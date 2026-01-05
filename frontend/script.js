const toast = document.getElementById("toast");
const voiceBtn = document.getElementById("voiceBtn");
const textArea = document.getElementById("text");
const adminList = document.getElementById("adminList");

const complaintsStore = [];

/* =========================
   TOAST HELPER
========================= */
function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 300);
  }, 2500);
}

/* =========================
   OFFLINE DETECTION
========================= */
window.addEventListener("offline", () => {
  showToast("⚠️ You are offline. Complaints will retry automatically.");
});

window.addEventListener("online", () => {
  showToast("✅ Back online. You can submit now.");
});

/* =========================
   SUBMIT COMPLAINT (REAL BACKEND)
========================= */
function submitComplaint() {
  const btn = document.getElementById("submitBtn");
  const loadingText = document.getElementById("loading");
  const result = document.getElementById("result");

  const complaint = textArea.value.trim();

  if (!complaint) {
    showToast("Please describe your complaint.");
    return;
  }

  if (!navigator.onLine) {
    localStorage.setItem("pendingComplaint", complaint);
    showToast("📶 Offline. Complaint saved and will retry.");
    return;
  }

  btn.classList.add("loading");
  btn.disabled = true;

  loadingText.classList.remove("hidden");
  result.classList.add("hidden");

  fetch("/complaint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: complaint }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("BACKEND RESPONSE:", data);

      loadingText.classList.add("hidden");

      /* Citizen-facing message */
      result.innerHTML = `
        <strong>Complaint Submitted & Queued</strong><br><br>
        Your complaint has been recorded and forwarded to the concerned authority.
      `;
      result.classList.remove("hidden");

      btn.classList.remove("loading");
      btn.disabled = false;

      showToast("✅ Complaint submitted successfully");
      textArea.value = "";

      /* Authority Dashboard (REAL AI DATA) */
      addToAdminView({
        text: data.text,
        priority: data.priority,
        department: data.department,
      });
    })
    .catch(() => {
      loadingText.classList.add("hidden");
      btn.classList.remove("loading");
      btn.disabled = false;
      showToast("❌ Failed to submit complaint");
    });
}

/* =========================
   ADMIN VIEW LOGIC
========================= */
function addToAdminView(data) {
  complaintsStore.push(data);

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  complaintsStore.sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  );

  adminList.innerHTML = "";

  // Priority counters
  let highCount = 0;
  let mediumCount = 0;
  let lowCount = 0;

  complaintsStore.forEach((item) => {
    const card = document.createElement("div");
    card.className = "admin-card";

    let badgeClass = "low";
    let rank = "";

    if (item.priority === "High") {
      badgeClass = "high";
      highCount++;
      rank = `#${highCount}`;
    } else if (item.priority === "Medium") {
      badgeClass = "medium";
      mediumCount++;
      rank = `#${mediumCount}`;
    } else {
      badgeClass = "low";
      lowCount++;
      rank = `#${lowCount}`;
    }

    card.innerHTML = `
      <p><strong>Complaint:</strong> ${item.text}</p>
      <p>
        <strong>Priority:</strong>
        <span class="badge ${badgeClass}">
          ${item.priority} ${rank}
        </span>
      </p>
      <p><strong>Department:</strong> ${item.department}</p>
    `;

    adminList.appendChild(card);
  });
}


/* =========================
   RETRY WHEN BACK ONLINE
========================= */
window.addEventListener("online", () => {
  const saved = localStorage.getItem("pendingComplaint");
  if (saved) {
    textArea.value = saved;
    localStorage.removeItem("pendingComplaint");
    showToast("🔁 Retrying saved complaint…");
  }
});

/* =========================
   VOICE TO TEXT (OPTIONAL)
========================= */
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = "en-IN";
  recognition.interimResults = false;

  voiceBtn.addEventListener("click", () => {
    recognition.start();
    voiceBtn.classList.add("listening");
    showToast("🎙️ Listening...");
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textArea.value += (textArea.value ? " " : "") + transcript;
    showToast("📝 Voice captured");
  };

  recognition.onend = () => {
    voiceBtn.classList.remove("listening");
  };

  recognition.onerror = () => {
    voiceBtn.classList.remove("listening");
    showToast("❌ Voice input failed");
  };
} else {
  voiceBtn.disabled = true;
  voiceBtn.textContent = "🎙️ Voice not supported";
}
