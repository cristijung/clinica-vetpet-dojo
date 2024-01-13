function renderSpecialties() {
  const specialties = [
    "Nutricionista",
    "Neurologia",
    "Ortopedia",
    "Cardiologia",
    "Clínico Geral",
  ];

  const options = specialties
    .map((specialty) => {
      return `<option value="${specialty}">${specialty}</option>`;
    })
    .join();

  document.getElementById("specialty").innerHTML = options;
}

function renderAnimals() {
  const animals = [
    "Cachorro",
    "Gato",
    "Pássaro",
    "Peixe",
    "Coelho",
    "Hamster",
    "Outro",
  ];

  const options = animals
    .map((animal) => {
      return `<option value="${animal}">${animal}</option>`;
    })
    .join();

  document.getElementById("animal-select").innerHTML = options;
}

document.addEventListener("DOMContentLoaded", () => {
  renderAnimals();
  renderSpecialties();
});

function otherAnimal() {
  const animalDiv = document.getElementById("animal-form-group");

  const div = document.createElement("div");
  div.classList.add("custom-form-item");

  const label = document.createElement("label");
  label.setAttribute("for", "other-animal");
  label.classList.add("form-label");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.classList.add("form-control");
  input.name = "other-animal";
  input.id = "other-animal";

  div.appendChild(label);
  div.appendChild(input);
  animalDiv.appendChild(div);
}
