const loaderContainer = document.querySelector(".loader-container");
const body = document.querySelector("body");
const darkBtn = document.querySelector(".dark-btn");
const list = document.querySelector("#list");
const p = document.querySelector(".p");
const img = document.querySelector("img");

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
    let capital = document.createElement("p");
    let population = document.createElement("p");
    let region = document.createElement("p");

    img.src = c.flags.svg;
    img.alt = c.flags.alt;
    p.textContent = c.name.common;
    capital.textContent = `capital: ${c.capital}`;
    population.textContent = `population:  ${c.population}`;
    region.textContent = `region: ${c.region}`;
    p.classList.add("davlat");
    capital.classList.add("qwerty");
    population.classList.add("qwerty");
    region.classList.add("qwerty");

    li.appendChild(img);
    img.width = "264";
    img.height = "160";
    li.appendChild(p);
    li.appendChild(population);
    li.appendChild(region);
    li.appendChild(capital);
    list.appendChild(li);
  });
}
getData()
  .then((data) => generateCountires(data))
  .catch((error) => console.log(error));
