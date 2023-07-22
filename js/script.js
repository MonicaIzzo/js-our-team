/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede ispirandovi alle immagini in allegato

DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg */

console.log("JS OK");

// # MILESTONE 0 e 1: CREO l'ARREY "Team" e STAMPO IN CANSOLE.

const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor ",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager ",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez ",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada ",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];
console.log(teamMembers);

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  console.log(member.name, member.role, member.image);
}

// MILESTONE 2 e 3 : STAMPO IN DOM l'ARRAY con i DATI testuali e LA FOTO CARICATA DINAMICAMENTE.

const teamContainer = document.getElementById("team-container");

// card

let cards = "";

for (const member of teamMembers) {
  const card = `
    <div class="col-4 mt-3 mb-3">
        <div class="card mb-3 border border-0 rounded-0">
            <img class="card-img-top rounded-0" src="img/${member.image}" alt=“pippo”>
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                    <p class=" card-text">${member.role}</p>
            </div>
        </div>
    </div>
    `;
  cards += card;
}
teamContainer.innerHTML = cards;
