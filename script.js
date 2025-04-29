function changeText() {
  const element = document.getElementById("dynamicText");
  element.textContent = "Text has been changed!";
}

function changeStyle() {
  const element = document.getElementById("dynamicText");
  element.style.color = "blue";
  element.style.fontSize = "30px";
}

function toggleElement() {
  const container = document.getElementById("container");
  const existing = document.getElementById("newElement");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newEl = document.createElement("p");
    newEl.id = "newElement";
    newEl.textContent = "I was added dynamically!";
    newEl.style.color = "green";
    container.appendChild(newEl);
  }
}
