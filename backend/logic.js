function analyzeComplaint(text) {
  const input = text.toLowerCase();

  let category = "General";
  let department = "Municipal Office";
  let priority = "Low";
  let severity = 20; // LOW by default

  /* =========================
     CATEGORY CLASSIFICATION
  ========================= */

  if (
    input.includes("water") ||
    input.includes("no water") ||
    input.includes("water supply") ||
    input.includes("dirty water") ||
    input.includes("sewage") ||
    input.includes("drain") ||
    input.includes("drainage") ||
    input.includes("overflow") ||
    input.includes("water logging")
  ) {
    category = "Water & Sanitation";
    department = "Municipal Water Department";
  }

  else if (
    input.includes("road") ||
    input.includes("pothole") ||
    input.includes("bridge") ||
    input.includes("flyover") ||
    input.includes("damaged road") ||
    input.includes("construction")
  ) {
    category = "Roads & Infrastructure";
    department = "Public Works Department";
  }

  else if (
    input.includes("electricity") ||
    input.includes("power") ||
    input.includes("power cut") ||
    input.includes("voltage") ||
    input.includes("transformer") ||
    input.includes("short circuit") ||
    input.includes("fallen wire")
  ) {
    category = "Electricity";
    department = "Electricity Board";
  }

  else if (
    input.includes("accident") ||
    input.includes("fire") ||
    input.includes("blast") ||
    input.includes("explosion") ||
    input.includes("crime") ||
    input.includes("murder") ||
    input.includes("rape") ||
    input.includes("assault") ||
    input.includes("kidnap") ||
    input.includes("emergency") ||
    input.includes("danger")
  ) {
    category = "Public Safety";
    department = "Emergency Services";
  }

  /* =========================
     PRIORITY + SEVERITY LOGIC
     (ORDER MATTERS)
  ========================= */

  // 🔴 HIGH PRIORITY – Life threatening
  if (
    input.includes("bomb") ||
    input.includes("blast") ||
    input.includes("explosion") ||
    input.includes("murder") ||
    input.includes("killed") ||
    input.includes("death") ||
    input.includes("rape") ||
    input.includes("assault") ||
    input.includes("kidnap") ||
    input.includes("fire") ||
    input.includes("accident") ||
    input.includes("injured") ||
    input.includes("life threatening")
  ) {
    priority = "High";
    severity = 100;
  }

  // 🟠 MEDIUM PRIORITY – Service disruption
  else if (
    input.includes("power cut") ||
    input.includes("power outage") ||
    input.includes("no power") ||
    input.includes("no water") ||
    input.includes("water shortage") ||
    input.includes("pipe burst") ||
    input.includes("blocked drain") ||
    input.includes("pothole") ||
    input.includes("damaged road") ||
    input.includes("low voltage")
  ) {
    priority = "Medium";
    severity = 60;
  }

  // 🟢 LOW PRIORITY – General complaints
  else {
    priority = "Low";
    severity = 20;
  }

  return {
    category,
    priority,
    department,
    severity
  };
}

module.exports = { analyzeComplaint };
