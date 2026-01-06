function analyzeComplaint(text) {
  const input = text.toLowerCase();

  let category = "General";
  let department = "Municipal Office";
  let priority = "Low";
  let severity = 10; // default severity

  // ---- CATEGORY CLASSIFICATION (NLP) ----
  if (
    input.includes("water") ||
    input.includes("no water") ||
    input.includes("water supply") ||
    input.includes("drinking water") ||
    input.includes("dirty water") ||
    input.includes("muddy water") ||
    input.includes("contaminated") ||
    input.includes("water pressure") ||
    input.includes("low pressure") ||
    input.includes("water shortage") ||
    input.includes("water cut") ||
    input.includes("leak") ||
    input.includes("leakage") ||
    input.includes("pipe burst") ||
    input.includes("pipeline") ||
    input.includes("tanker") ||
    input.includes("water tanker") ||
    input.includes("sewage") ||
    input.includes("sewer") ||
    input.includes("sewer line") ||
    input.includes("gutter") ||
    input.includes("nala") ||
    input.includes("manhole") ||
    input.includes("toilet overflow") ||
    input.includes("septic tank") ||
    input.includes("bad smell") ||
    input.includes("foul smell") ||
    input.includes("overflow") ||
    input.includes("backflow") ||
    input.includes("sanitation") ||
    input.includes("drain") ||
    input.includes("drainage") ||
    input.includes("blocked drain") ||
    input.includes("clogged drain") ||
    input.includes("water logging") ||
    input.includes("waterlogged") ||
    input.includes("flooded") ||
    input.includes("road flooded") ||
    input.includes("overflowing drain") ||
    input.includes("storm drain") ||
    input.includes("stagnant water")
  ) {
    category = "Water & Sanitation";
    department = "Municipal Water Department";
  } 
  
  else if (
    input.includes("road") ||
    input.includes("roads") ||
    input.includes("street") ||
    input.includes("lane") ||
    input.includes("main road") ||
    input.includes("service road") ||
    input.includes("highway") ||
    input.includes("flyover") ||
    input.includes("pothole") ||
    input.includes("potholes") ||
    input.includes("pit") ||
    input.includes("crater") ||
    input.includes("road damage") ||
    input.includes("broken road") ||
    input.includes("damaged road") ||
    input.includes("uneven road") ||
    input.includes("bad road") ||
    input.includes("bridge") ||
    input.includes("overbridge") ||
    input.includes("underbridge") ||
    input.includes("flyover bridge") ||
    input.includes("culvert") ||
    input.includes("footbridge") ||
    input.includes("crack") ||
    input.includes("cracks") ||
    input.includes("collapsed") ||
    input.includes("collapse") ||
    input.includes("repair") ||
    input.includes("construction") ||
    input.includes("road work") ||
    input.includes("digging")
  ) {
    category = "Roads & Infrastructure";
    department = "Public Works Department";
  } 
  
  else if (
    input.includes("electricity") ||
    input.includes("electric") ||
    input.includes("power") ||
    input.includes("power supply") ||
    input.includes("no power") ||
    input.includes("power cut") ||
    input.includes("power outage") ||
    input.includes("blackout") ||
    input.includes("load shedding") ||
    input.includes("transformer") ||
    input.includes("voltage") ||
    input.includes("current") ||
    input.includes("short circuit") ||
    input.includes("fallen wire") ||
    input.includes("loose wire")
  ) {
    category = "Electricity";
    department = "Electricity Board";
  } 
  
  else if (
    input.includes("accident") ||
    input.includes("crash") ||
    input.includes("collision") ||
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

  // ---- PRIORITY + SEVERITY DETECTION ----

  // HIGH PRIORITY (life threatening)
  if (input.includes("bomb blast") || input.includes("explosion")) {
    priority = "High";
    severity = 100;
  }
  else if (input.includes("mass murder")) {
    priority = "High";
    severity = 90;
  }
  else if (input.includes("murder")) {
    priority = "High";
    severity = 80;
  }
  else if (input.includes("kidnap")) {
    priority = "High";
    severity = 70;
  }
  else if (input.includes("fire")) {
    priority = "High";
    severity = 60;
  }

  // MEDIUM PRIORITY (service disruption)
  else if (
    input.includes("power cut") ||
    input.includes("power outage") ||
    input.includes("blackout") ||
    input.includes("no water") ||
    input.includes("water shortage") ||
    input.includes("pipe burst") ||
    input.includes("pothole") ||
    input.includes("damaged road")
  ) {
    priority = "Medium";
    severity = 40;
  }

  // LOW PRIORITY (default)
  else {
    priority = "Low";
    severity = 20;
  }

  return { category, priority, department, severity };
}

module.exports = { analyzeComplaint };
