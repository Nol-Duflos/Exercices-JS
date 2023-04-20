//Le DOM c'est toute notre structure HTML
//En JavaScript, on peut manipuler le DOM, lui ajouter des éléments, lui en retirer, ajouter des noeuds, etc.
//Notamment en les selectionnant

const premierTitre = document.getElementsByClassName('premier-titre'); //Sélecteur de class, créer un tableau automatiquement

const premierID = document.getElementById('premier-id'); //Il me rend directement l'élément du DOM au lieu d'un tableau

const titreNu = document.querySelector('h3'); //Si on utlise querySelector, on est obligier de specifier avec . ou # si il s'agit d'un ID ou d'une class
 
//Ici on vas selectionner tout les li d'un coup avec Queryselec

const allLi = document.querySelectorAll('li');
const liste = document.querySelector('ul');

const i2 = document.querySelector('.i2');

const premierH1 = document.querySelector('.premier-titre');

//Styliser un élément en le manipulant diirectement
premierH1.style.background = '#FFBE77'; //Change le style de l'objet selectionné

premierH1.innerText = 'Hello world depuis le JS'; //change le text à l'intérieur

const parent = document.querySelector('.parent');

parent.innerHTML = '<h2>Un text ajouté en HTML depuis JavaScript</h2>';//Ajouter un élément HTML.//!\\IMPORTANT : Il faut une baslise parente dans laquelle mettre l'élément HTML

//Créer un nouvel élément
let nvEl = document.createElement('li');
nvEl.innerText = "Nouvel item ajouté depuis JavaScript";
//liste.appendChild(nvEl);//Le mettre à la fin de la liste déjà établie dans le DOM HTML

console.log(premierH1);

// console.log(premierTitre);
// console.log(premierID); 
// console.log(titreNu);

// console.log(liste.childNodes);

// console.log(i2.nextSibling); //Permet de selectionner le noeud suivant dans le DOM, donc le retour à la ligne
// console.log(i2.nextElementSibling); //Permet de selectionner le prochain li
// console.log(i2.previousElementSibling); //Permet de selectionner l'élément précédent
// console.log(liste.lastElementChild); //Selectionne le dernier élément enfant

//Supprimer et ramplacer un élément

liste.children[2].remove(); //On vas selectionner retirer le troisième élément de la liste(rappel : l'index commence par 0)
liste.children[1].replaceWith(nvEl);