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

