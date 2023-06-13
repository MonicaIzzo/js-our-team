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

console.log('JS OK')

// #0 RECUPERO GLI ELEMENTI DAL DOM
const imgElement = document.getElementById('imagesThumbnails');
const nameSurnameElement = document.getElementById('nameSurname');
const roleElement = document.getElementById('professionalRole');

// # MILESTONE 0: CREO l'OBJECT "Team"

const teamMembers = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', image: 'wayne-barnett-founder-ceo.jpg',},
    { name: 'Angela Caroll', role: 'Chief Editor ', image: 'angela-caroll-chief-editor.jpg',},
    { name: 'Walter Gordon', role: 'Office Manager ', image: 'walter-gordon-office-manager.jpg',},
    { name: 'Angela Lopez ', role: 'Social Media Manager', image: 'angela-lopez-social-media-manager.jpg',},
    { name: 'Scott Estrada ', role: 'Developer', image: 'scott-estrada-developer.jpg',},
    { name: 'Barbara Ramos', role: 'Graphic Designer', image: 'barbara-ramos-graphic-designer.jpg',},
]

console.log(teamMembers);

// MILESTONE 1: STAMPO IN CANSOLE l'OBJECT
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    items += `
    <li>${member.name}
    `
}

// MILESTONE 2: STAMPO IN DOM l'OBJECT

// #3 INSERISCO IN PAGINA i DATI testuali e LA FOTO CARICATA DINAMICAMENTE
imgElement.innerText = [];
nameSurnameElement.innerText = [];
roleElement.innerText = [];


// BONUS 1: Trasformare la stringa foto in una immagine effettiva

// BONUS 2: Organizzare i singoli membri in card/schede