//!\\ IMPORTANT //!\\ Valeurs primitives vs valeurs de références

//Valeurs primitives : string, number, boolean, undefined, null
//Valeurs de références : obj et tableaux

//Il y a une différence fondametale entre les valeurs primitives et de référence


let a = "abc";
let b = a;
//Les deux, a et b, sont égales à "abc"

a = "zzz"; 
        //Il n'y a que a qui est égale à zzz, on pourrait peser que b aussi mais non
        //Dès quon a donné "abc" à notre valeur b, cette valeur primitive est devenu indépendandte de "Let a"
        //Notre b est resté à a = "abc"
a = "bbb";

console.log(a, b);


let obj1 = {str: "efg"}; 
                        //Notre objet {str: "efg"} est une valeur de référence, si je fais 1000 let qui point vers cet objet, ça va être ma même référence partout
                         //Si je change la valeur de cet objet, ça va changer la valeur de tout nos let
let obj2 = obj1;

obj1.str = "zzz";

console.log(obj1, obj2);



//Delete
const chaton = {
        race : 'Norvegien',
        poid : 3,
        couleur : 'noir',
}

delete chaton.couleur; //On peut supprimer une propriété comme ça

console.log(chaton.race);
console.log(chaton.poid); 
console.log(chaton.couleur);  //undefined apparaitra dans la Console à la place de noir

//Les objets peuvent être très complexes.

const chien = {
        race : 'Berger picard',
        poid : 20,
        couleur : 'brun',
        prenom : 'Vanille',

        nouvelobjet : { //Ex : On peut imbriquer des objets dans des objets, des nouveaux tableaux, 
                naissance : '10 juin 2004',
                proprietaire : 'Duflos Patrick',
                portee : 5,

                nouvelnouvelobject : {
                        vaccinationdate : '14 juin 2004',
                        adoptiondate : '3 septembre 2004',
                        tab : [{
                              age : 3,
                              santé : "parfaite",  
                        }]
                }
        }
}

//et pour selectionner par ex la date d'adoption de l'objet chien, il faut reproduire tout le chemin dans le console.log
//Un peu comme en css basique

console.log(chien.nouvelobjet.nouvelnouvelobject.adoptiondate); //comme ça, on a le 3 septembre 2004 qui apparait dans le console.log

//Les tableaux sont des objets

const tableau = ['a', 'b', 'c'];

console.log(typeof 'abc'); //typeof est une valeur à mettre devant dans le console.log pour savoir quel type c'est
                           //Si je met 'abc' il me rapporte donc string
                           //Si je met tableau, il me rapporte 'object' car le tableau est un objet
                           //C'est juste que les tableaux obt certaines caractéristiques différentes 
console.log(tableau.length); //Par ex la propriété lenght qui nous ermet de voir la longueur du tableau, ici la cnsole affichera 3


//Boucles for ..in et for .. of

//for in vas nous êrmettre d'itérer à travers un object, ce qui est très utile.

const voiture = {
        couleur : 'noir',
        marque : 'Peugeot',
        annee : '2007',
}

for(let props in voiture) {
        console.log(props, voiture[props]);
}

console.log(voiture['couleur']);
//

const fruits = ['fraises', 'cerises', 'framboises'];

for(let fruit of fruits) { //for of est une boucle spécifique aux tableaux
                           //for in pour les objets, for of pour les tableaux
        console.log(fruits.indexOf(fruit), fruit);

}

//Mot clef "THIS"
//this est une référence à l'objet qui a appelé une fonction.

const autobus = {
    couleur  : 'jaune',
    marque : 'Citrouen',
    anne : 2004,
    mafonction : function(){//pour utiliser this, je créer une fonction dans mon objet
        console.log(this);  //Je vais console.log la référence 'this'
    }
}

autobus.mafonction(); //ça nous retourne l'objet en lui-même

//Pour aller plus loin avec le mot clef 'this'

const axolotl = {
     nom : 'Vorace',
     proprietaire : 'Alexis Leger',
     poid : 560,
     couleur : 'grise',
     mafonction2 : function(){
        console.log(this.couleur);
     }, // <==========================//!\\ IMPORTANT //!\\ ne pas oublier la virgule à la fin d'une fonction quand on en commence une autre
     mafonctionflechee : () => { //On fait une fonction flechée
        console.log(this);
     }
}

axolotl.mafonction2();       //Les fonctions classiques font référence à l'objet dans laquelle la fonction est créer.
axolotl.mafonctionflechee(); //Les fonctions flechées font toujours référence à l'objet global.

console.log(this); //this vas tout le temps retourner un objet, l(objet) qui execute la fonction.

function foo(){
      console.log('Hello my darling seetheart');
}

foo();

//Methode bind()
//bind() nous permet de lier le contexte d'un objet avec une fonction

let nvFunction = axolotl.mafonction2.bind(axolotl);

console.log(nvFunction);

nvFunction();



const btn = document.querySelector('button');

btn.addEventListener('click', axolotl.mafonction2.bind(axolotl));

console.log(btn);