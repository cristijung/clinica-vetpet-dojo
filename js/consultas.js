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

function renderMedics() {
  const medics = [
    { specialty: "Nutricionista", name: "Dr. João" },
    { specialty: "Nutricionista", name: "Dra. Ana" },
    { specialty: "Nutricionista", name: "Dr. Carlos" },
    { specialty: "Neurologia", name: "Dra. Maria" },
    { specialty: "Neurologia", name: "Dr. Pedro" },
    { specialty: "Neurologia", name: "Dra. Sofia" },
    { specialty: "Ortopedia", name: "Dr. André" },
    { specialty: "Ortopedia", name: "Dra. Laura" },
    { specialty: "Ortopedia", name: "Dr. Gabriel" },
    { specialty: "Cardiologia", name: "Dra. Camila" },
    { specialty: "Cardiologia", name: "Dr. Lucas" },
    { specialty: "Cardiologia", name: "Dra. Rafaela" },
    { specialty: "Clínico Geral", name: "Dr. Marcos" },
    { specialty: "Clínico Geral", name: "Dra. Juliana" },
    { specialty: "Clínico Geral", name: "Dr. Fernanda" },
  ].filter(
    (medic) => medic.specialty === document.getElementById("specialty").value
  );

  const options = medics
    .map((medic) => {
      return `<option value="${medic.name}">${medic.name} - ${medic.specialty}</option>`;
    })
    .join();

  document.getElementById("doctor").innerHTML = options;
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
  addOtherAnimalListener();
  addOtherMedicListener();
  renderMedics();
  renderCalendar();
  // console.log(renderCalendar());
});

function addOtherAnimalListener() {
  const otherAnimalSelect = document.getElementById("animal-select");
  otherAnimalSelect.addEventListener("change", (event) => {
    const selectedAnimal = event.target.value;

    if (selectedAnimal === "Outro") {
      otherAnimal();
    } else {
      const otherAnimalInput = document.getElementById("other-animal-div");
      otherAnimalInput.remove();
    }
  });
}

function addOtherMedicListener() {
  const otherSpecialitySelect = document.getElementById("specialty");
  otherSpecialitySelect.addEventListener("change", (event) => {
    renderMedics();
  });
}

function onSubmit(event) {
  event.preventDefault();

  const clientName = event.target["client-name"].value;
  const telephone = event.target["client-tel"].value;
  const animal = event.target["animal-select"].value;
  const otherAnimal = event.target["other-animal"]?.value;
  const specialty = event.target["specialty"].value;
  const doctor = event.target["doctor"].value;
  const date = event.target["date-query"].value;

  updateLocalStorage({
    clientName,
    telephone,
    animal: animal === "Outro" ? otherAnimal : animal,
    specialty,
    doctor,
    date,
  });
}

function updateLocalStorage(item) {
  const localStorageData = localStorage.getItem("@vetpet:consultas") || "[]";

  if (localStorageData.length === 0) {
    localStorage.setItem("@vetpet:consultas", JSON.stringify([item]));
  }

  const parse = JSON.parse(localStorageData);

  localStorage.setItem("@vetpet:consultas", JSON.stringify([...parse, item]));

  renderCalendar();
}

function getLocalStorage() {
  const localStorageData = localStorage.getItem("@vetpet:consultas") || [];

  if (localStorageData.length === 0) {
    return [];
  }

  return JSON.parse(localStorageData);
}

function renderCalendar(){
  const dataQuerys = getLocalStorage();

  const sectionData = document.getElementById("specific-query");
  sectionData.innerHTML = "";

  dataQuerys.map((item) => {
    const query = document.createElement("div");
    query.classList.add("card-query");

    query.innerHTML = "aa";

    sectionData.appendChild(query);
  })
}

function otherAnimal() {
  const animalDiv = document.getElementById("animal-form-group");

  const div = document.createElement("div");
  div.classList.add("custom-form-item");
  div.id = "other-animal-div";

  const label = document.createElement("label");
  label.setAttribute("for", "other-animal");
  label.classList.add("form-label");
  label.innerText = "Qual?";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.classList.add("form-control");
  input.name = "other-animal";
  input.id = "other-animal";

  div.appendChild(label);
  div.appendChild(input);
  animalDiv.appendChild(div);
}
