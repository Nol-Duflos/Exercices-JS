// Constante : On ne peut pas ré-assigner la valeur des constantes. C'est une sécurité

const prenom = 'Nol';

console.log(prenom);


//Variable "let" : on peut ré-assigner sa valeur, si on ajoute "nom = 'Zola' par exemple"

let nom = "Duflos";
nom = "Zola";

console.log(nom);


//Avant 2015, on utilisait la variable "var" car "const" et "let" n'existaient pas
var number = 9;

console.log(number);


//Les différents types et le nommage de variables

const typeString = "Enzo le designer du web"; //String
const typeNumber = 1234; // 
const typeUndefined = undefined; 
const typeObj = {
    a: 1,
    b: 2,
    c: 3,
}//C'est un objet, on y reviendra en détails plus tard. a,b et c sont des propriétés. 1, 2 et 3 sont leurs valeurs
//Si dans la console.log ci dessous on ecrit (typeObj.C) il n'y aura que la valeur 3 qui apparaitra dans la console.

console.log(typeObj);

const typeTableau = [1,2,3,4,5,6,7,8] //C'est un tableau, si on écrit dans la console (typeTableau[2]) on n'accédera au 3 car l'index commence à zero dans les tableaux

console.log(typeTableau);

const typeBooleen = true; //C'est une variable qui ne peut être que "true" ou "false", 
                          //On s'en sert pour faire des conditions, pour essayer de réperer quand un calcul est juste, pour decider d'afficher quelque chose ou non




//Les opérateurs        
const operation = 10 + 10;
const operation1 = 10 * 10; //Multiplication
const operation2 = 10 / 10; //Division
const operation3 = 10 % 5; //Modulo, c'est le reste d'une division. pratique pour des cas de chiffre pair et impaires.
const operation4 = 2 ** 3; //Calculer les puissances, ici 2 puissance 3 donc 2 x 2 x2

console.log(operation);

//Les chaines de caractères plus poussées


const str = "Juliette";
const str2 = "John";

console.log( "Hello je m'appelle "+ str2); // C'est une CONCATENATION, c'est à dire un assemblage de deux chaines de caractère string. 
                                           // C'est l'ancienne manière de faire

//avec les bak tig :
console.log(`je suis une chaine ${str}`); // On peut faire référence à une variable avec ${nom de la variable} dans les appostrophes
                                    //On peut faire des phrases à rallonge et ajouter autant de variables que l'on veut 
                                   //les approstrophes particulières sont écritent avec alt gr + touche è



//Créer une fonction en Javascript

function presentation(){ //les parenthèses vides veulent dire "j'execute cete fonction"
    
    //on peut écrire des consoles : console.log("Hello, je suis Nol");
    let txt = "Hello je suis Nol";

    return txt; //return est un mot-clef, en utilisant "return" avec la variable, on execute la fonction mais rien ne vas se passer. car elle ne vas pas le retourner dans la console.
                // il faut ajouter "presentation()" dans la console ci-dessous

};

console.log(presentation());



function presentation2(a,b){ //dans ces parenthèses, on peut y mettre des paramètres pour appeler la fonction, ici a et b

    console.log('Hello world');

    return a + b; //la console vas retourner NaN qui veut dire "Not a Number"
                  //Sauf si j'ajoute des nombres dans mon console.log
};

console.log(presentation2(4, 6));
console.log(presentation2(4, 66));
console.log(presentation2(4, 666));

//Fonctions classiques et fléchés

const presentationfoo = (a,b) => { //Voilà une fonction fléchée, elle peut faire la même chose qu'une fonction classique
   
    console.log('My good bitch');
    
    return a + b;
}

console.log(presentationfoo(2,3))

//Exercice avec un bouton, un évènement et une fonction flechée

const btn = document.querySelector("#btn");

btn.addEventListener('click', () => { //Quand on ajoute un évènement, on peut directement passer à une fonction fléchée
    console.log("Tu as cliqué sur le bouton"); //Cette commande est trop bien
})

//L'ordre de déclaration

let txt = "Salut !";

function presentation3(){

    console.log(txt);

}

console.log(presentation3());

//Les conditions en JS

 const nombre = 100;

 if(nombre < 50){//C'est dans les parenthèses qu'on met la condition
                 //ATTENTION pour faire égale on utilise "==" et non = tout seul. C'est une égalité non stricte et ce n'est pas conseiller 
    console.log("La condition est respectée");

 } else {

    console.log("La condition n'est pas respectée :(")
 }


 const nbr = 74;

 if(nbr == 50 ){
                 //ATTENTION pour faire égale on utilise "==" et non = tout seul. C'est une égalité non stricte et ce n'est pas conseiller 
    console.log("NB = 50");

 } else if(nbr > 50 && nbr < 100) { //&& veut dire qu'il faut que le sdeux expressions renvoient "true", c'est un "in between"
                                    //Pour faire "OU" on utilise || à la place de && ici
                                    //Pour faire "N'est pas égale" on utilise "!="
 
    console.log("NB > 50")
 } else if(nbr > 500) {

    console.log("NB > 500");
 }

 const nb = 10000; 

 console.log(Boolean(nb));


 const consoleDev = true; //Avec cette alternance, on peut ouvrir et fermer quelque chose, très utilisé dabs ke dev web

 console.log(!consoleDev);

 //Le switch

let couleur = "vert";

switch (couleur) {

    case 'vert':
        console.log("Prix :  19.99");
        break;
    case 'rouge':
        console.log("Prix :17.99");
        break;
    case 'blanc':
        console.log("Pris : 15.99");
        break;
    default:
    console.log(`Désolé, nous n'avaons pas de ${couleur}.`);
}

//Créer une boucle en JS
//Une boucle sert à répeter une action plusieurs fois
for(let i = 0; i < 5; i++) { //Tant que i est égale à 5, alors je vais faire i++, c'est à dire que je vais incrémenter de un i.
                             //ça commence à 0, c'est stricetement inférieur à 5
                             //i vas prendre la première valeur après avoir exécuté le contenu de la boucle
    console.log(`Notre variable i est égal à : ${i}`);

}

//Les boucles "while" et "do while"
//!\\ ATTENTION //!\\ On évite de 
let i = 0;

while (i <= 10) { //Plus récente et moins utilisée, Tant que i est inférieur à 10
    console.log('Notre valeur est', i);
    i++;         //Tant que i est inférieur à 10, je vais ajouter des i
}

let v = 2; 
do {         //do while est très peu utilisé
    console.log(`Notre seconde valeur est`, v);
    v++;
}
while (v < 10);