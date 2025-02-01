const loaderContainer = document.querySelector(".loader-container");
const body = document.querySelector("body");
const darkBtn = document.querySelector(".dark-btn");
const list = document.querySelector("#list");

async function getData() {
  loaderContainer.classList.remove("hidden");
  const req = await fetch("https://restcountries.com/v3.1/all");
  const data = await req.json();
  loaderContainer.classList.add("hidden");
  return data;
}

darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.removeItem("mode");
  }
});

function generateCountires(countries) {
  countries.forEach((c) => {
    console.log(c);
    let li = document.createElement("li");
    let p = document.createElement("p");
    let img = document.createElement("img");
    let cap = document.createElement("p");
    let pop = document.createElement("p");
    let reg = document.createElement("p");

    img.src = c.flags.svg;
    img.alt = c.flags.alt;
    p.textContent = c.name.common;
    cap.textContent = c.capital;
    pop.textContent = c.population;
    reg.textContent = c.region;

    li.appendChild(img);
    img.width = "264";
    img.height = "160";

    li.appendChild(p);
    li.appendChild(pop);
    li.appendChild(reg);
    li.appendChild(cap);
    list.appendChild(li);
  });
}
getData()
  .then((data) => generateCountires(data))
  .catch((error) => console.log(error));
