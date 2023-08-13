const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "2px solid blue";
  section.style.marginBottom = "15px";
  section.style.borderRadius = "15px";
  section.style.paddingLeft = "5px";
  section.style.backgroundColor = "lightgray";
}

// const placeContainer = document.getElementById("places-container");
// placeContainer.style.backgroundColor = "yellow";

const placeContainer = document.getElementById("places-container");
placeContainer.classList.add("yellow-bg");
placeContainer.classList.add("text-center");
placeContainer.classList.remove("large-text");
