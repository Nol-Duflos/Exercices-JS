//On peut itérer avec des chaines de caractère tout comme

const string = 'lorem ipsum dolor sit amet.'; //string pour ficelle

console.log(string.charAt(4)); //ce console.log avec chartAt(4) vas nous donner la lettre du quatrième index, ici le "m" de "Lorem"
console.log(string.includes('ipsum')); //Si notre texte contient "ipsum" alors "true" aparaitra dans le console.log
                                       //Comme j'ai fait une faute de frappe, il m'a renvoyé "false"
                                       //Très pratique pour gérer du texte
console.log(string.indexOf('p')); //"index of" vas donner d'index de départ de o, donc ici 7
                                 //RAPPEL //!\\ L'index commence à 0 (L de "Lorem" correspond à 0) et inclu les espace. 

console.log(string.charCodeAt(0)); //Nous donne le code du caractère selectionné, ici l'unicode de l correspond à 76
                                   //Peut nous premettre d'interargir avec  le comportement de l'utilisateur en fonction des touches qu'il utilise

console.log(string.slice(15))    //On coupe une partie à partir de l'index 15, ce qui donne "or sit amet"    
                                //slice = "coupé"
                                //Si on fait (-15), la chaine de caractère est coupé à l'envers.

const stringToArray = string.split() .join(); //split cert à créer un tableau à partir d'une chaine de caractère. 
                                      //Si on ajoute des apostrophes dans les parenthèses (''), toutes les lettres seront dvivisées comme des éléments diffrents du tableau.
                                      //avec un espace entre les apostrophes (' ') on divise la chaine de caractères par mot
                                      //On utilise souvent .join() après split pout manipuler la chane de caractère sous forme de tableau et revenir à une chaine de caractère normale après
console.log(stringToArray);

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat); //permet de fusionner les deux const


//LE REGEX
//plutôt ennuyant

const str3 = 'Première utilisation des Regex';

//const regex =/[eai]/g; //Vas nous assurer que notre chaine de caractère contienne au moins le caratère "a"
                    //en ajoutant g après les crochets, le regex ne s'arettera pas à la première occurence
                    //il y a plusieurs façons de faire du Regex, en matchant toutes les lettres qui ne sont pas en minuscule par ex
                    //c'est une suite de selection à apprendre et à connaître
                    //en ajoutant ^ devant, on ajoute tout ce qui n'est pas ce qu'on a selectionner (majuscule, minuscule, chiffre, symboles)
                    //ajouter i sert à ignorer certains 
                    //On peut mettre des antislash \

//console.log(str3.match(regex)); //Plusieurs informations seront présentes sur le caractère selectionné  

//Méthode "Replace"

const str4 = 'Deuxième utilisation des Regex';

const regex = /[0-9]\s/gi;

console.log(str4.replace(/e/g, 'zzz')); //remplace le "e" de "Deuxième" par zzz, en ajoutant g, je remplace tout les e