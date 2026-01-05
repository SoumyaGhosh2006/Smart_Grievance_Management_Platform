function analyzeComplaint(text) {
  const input = text.toLowerCase();

  let category = "General";
  let department = "Municipal Office";
  let priority = "Low";

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
    input.includes("damaged") ||
    input.includes("repair") ||
    input.includes("construction") ||
    input.includes("road work") ||
    input.includes("digging")) {
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
input.includes("outage") ||
input.includes("blackout") ||
input.includes("load shedding") ||
input.includes("load shedding") ||

input.includes("transformer") ||
input.includes("transformer failure") ||
input.includes("burnt transformer") ||
input.includes("transformer blast") ||
input.includes("transformer issue") ||

input.includes("voltage") ||
input.includes("low voltage") ||
input.includes("high voltage") ||
input.includes("voltage fluctuation") ||
input.includes("fluctuation") ||

input.includes("current") ||
input.includes("no current") ||
input.includes("short circuit") ||
input.includes("short-circuit") ||
input.includes("spark") ||
input.includes("fire") ||

input.includes("meter") ||
input.includes("electric meter") ||
input.includes("meter fault") ||
input.includes("meter problem") ||

input.includes("line") ||
input.includes("electric line") ||
input.includes("power line") ||
input.includes("fallen wire") ||
input.includes("loose wire") ||
input.includes("wire snapped")) {
    category = "Electricity";
    department = "Electricity Board";
  } 
  
  
  else if (
    input.includes("accident") ||
input.includes("accidents") ||
input.includes("crash") ||
input.includes("collision") ||
input.includes("hit and run") ||
input.includes("road accident") ||
input.includes("vehicle accident") ||
input.includes("bike accident") ||
input.includes("car accident") ||
input.includes("injured") ||
input.includes("injury") ||
input.includes("hurt") ||

input.includes("fire") ||
input.includes("fire accident") ||
input.includes("fire breakout") ||
input.includes("fire broke out") ||
input.includes("burning") ||
input.includes("flames") ||
input.includes("smoke") ||
input.includes("blast") ||
input.includes("explosion") ||

input.includes("crime") ||
input.includes("theft") ||
input.includes("robbery") ||
input.includes("burglary") ||
input.includes("snatching") ||
input.includes("chain snatching") ||
input.includes("assault") ||
input.includes("attack") ||
input.includes("violence") ||
input.includes("murder") ||
input.includes("rape") ||
input.includes("harassment") ||
input.includes("threat") ||
input.includes("threatening") ||
input.includes("kidnap") ||
input.includes("kidnapping") ||

input.includes("emergency") ||
input.includes("urgent") ||
input.includes("help") ||
input.includes("danger") ||
input.includes("life threatening")) {
    category = "Public Safety";
    department = "Emergency Services";
  }


 // ---- PRIORITY DETECTION (SEVERITY) ----

// MEDIUM PRIORITY FIRST (service disruption)
if (
  input.includes("power cut") ||
  input.includes("power outage") ||
  input.includes("blackout") ||
  input.includes("no power") ||
  input.includes("no water") ||
  input.includes("water shortage") ||
  input.includes("water cut") ||
  input.includes("pipe burst") ||
  input.includes("contaminated water") ||
  input.includes("blocked drain") ||
  input.includes("water logging") ||
  input.includes("waterlogged") ||
  input.includes("pothole") ||
  input.includes("damaged road") ||
  input.includes("transformer failure") ||
  input.includes("low voltage") ||
  input.includes("voltage fluctuation")
) {
  priority = "Medium";
}

// HIGH PRIORITY (life / safety risk)
else if (
  input.includes("accident") ||
  input.includes("crash") ||
  input.includes("collision") ||
  input.includes("injured") ||
  input.includes("fire") ||
  input.includes("fire accident") ||
  input.includes("burning") ||
  input.includes("flames") ||
  input.includes("smoke") ||
  input.includes("blast") ||
  input.includes("explosion") ||
  input.includes("crime") ||
  input.includes("murder") ||
  input.includes("rape") ||
  input.includes("assault") ||
  input.includes("violence") ||
  input.includes("kidnap") ||
  input.includes("danger") ||
  input.includes("life threatening") ||
  input.includes("fallen wire") ||
  input.includes("loose wire") ||
  input.includes("short circuit")
) {
  priority = "High";
}



  return { category, priority, department };
}

module.exports = { analyzeComplaint };
