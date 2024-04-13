function createContent() {
  const divContEl = document.querySelector("div.container");

  for (let i = 0; i < myData.length; i++) {
    myData[i].URL = photoBank[i];
  }

  myData.forEach((element) => {
    const newDivEl = document.createElement("div");
    newDivEl.classList.add("img__container");

    const imgEl = document.createElement("img");
    imgEl.src = element.URL;
    imgEl.width = "300";
    newDivEl.appendChild(imgEl);

    const h4El = document.createElement("h4");
    h4El.innerHTML = element.Species.toUpperCase();
    newDivEl.appendChild(h4El);

    const textEl = document.createElement("p");
    textEl.innerHTML = element.CommonName;
    newDivEl.appendChild(textEl);

    divContEl.appendChild(newDivEl);
  });
}

setTimeout(createContent, 3000);
