import {data1, data2} from './header';
import maFonctionExportee from './header/js';

console.log(data1, data2);
maFonctionExportee();


// function foo(){
//     var txt1 = 'txtVar';
//     let text2 = 'textLET';

//     if(true) {

//     }

//     console.log(txt1, txt2);
// }

// foo();

//Une fonction fléchée doit rentrer dans une variable, les fonctions flechées font tout letemps référence à un objet global

//Faire de l'hoisting

let age = 28;
let prenom = 'Nol';

console.log(`Je suis ${prenom} et j'ai ${5 + 12} ans`);

//spread opérator

const personne = {
    nom: 'Tom',
    age : 28,
}

const presentation = {
    ...personne, //ces trois petits points permettent de rajouter le contenu d'un tableau dans un tableau oud' une variable dans une variable
    email: 'tom@gmail.com',
}

console.log(presentation);


//rest operator

function arr(...nbs) { //Quand on utilise les trois petits points dans les paramètres d'une fonction, c'est un REST operator 
    console.log(nbs);
}

arr(1 ,2 ,3 ,4 ,5 , 6, 7 , 8, 9 );


//Destructuring (affecté par décomposition)

const tab = [1, 2, 3];
[a, b, c] = tab; //On a créer trois variables, la premiére égale à 1, la deucième égale à 2, la troisième égale à 3



//On peut faire la même chose pour les objets

const obj = {
    premier : 4,
    deuxieme : 5,
    troisieme : 3
}
const{premier, deuxieme , troisieme} = obj;

console.log(premier, deuxieme , troisieme); 