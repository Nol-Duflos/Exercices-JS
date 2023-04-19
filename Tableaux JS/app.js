let tableau = ['a','b', 'c', 'd', 'e'];
              //1   2    3    4    5
//console.log(tableau[3]);    //C'est comme ça qu'on declare un tableau dans une console.log 
                            //La console de donne 4 parce que l'index commence à 0

console.log(tableau.length -1);

//Les methodes liées aux tableaux
//Les méthodes utiles sont des fonctions déjà intégrées au JavaScript

tableau.push(6); //Je peux utiliser "push" pour ajouter une valeur à la fin du tableau
tableau.pop(); //Pop retire une valeur à la fin du tableau, c'est le nemesis de push
tableau.shift(); //shift vas enlever une valeur au début
tableau.unshift('a'); //unshift vas ajouter une valeur au début

//il y a aussi Slice et Split, elles permettent de retirer des éléments
//Slice vas retourner un tableau
//Split vas directement modifier un tableau

//tableau.split(0, 2); // Le tableau commence à l'index 2, donc par C
                      // Permet d'ajouter des éléments, de retirer des éléments à un tableau directement

//Slice, en revanche, est à mettre dans le console.log vue que ça retourne quelque chose.

console.log(tableau.slice(2,4)); //On vas retourner un nouveau tableau qui vas retourner de l'Index 2 jusqu'à l'index 4

//console.log(tableau, indexOf('d')); //très sympa pour retrouver des valeurs, pour trouver des éléments dans un tableau. Ici, la console vas afficher 3

console.log(tableau);


//comment assembler des tableaux ?

const tableau1 =['a', 'b', 'c', 'd', 'e'];
const tableau2 =['z', 'y', 'x', 'w'];       //on créer deux tableaux

const tableau3 =tableau1.concat(tableau2); //on utilise concat

console.log(tableau3);  //Tadaaa les deux tableaux sont assemblé en un seul dans la console.

console.log(tableau3.includes('j')); //ça renvoit la valeur "false" car il n'y a pas de j dans le tableau concacté

//flat vas nous permettre d'aplatir des tableaux

const multitab = [1, 2, 3[1,2,3]];

const fruits = ['fraise', 'Pomme', 'Raisins'];
//joined vas transformer ce tableau en chaine de caractères
console.log(fruits.join(' ')); //Si je met deux aposthrophes dans les parenthèses, ça fait une chaine de caractère collée, si on met des espaces, il y aura des espaces entre les caractères

//reverse, cette fonction vas renversé ce qu'il y a dans un tableau

console.log(fruits.reverse());

//UTILISER UNE BOUCLE AVEC DES TABLEAUX

const numTab = [1, 2, 3, 4, 5, 6, 7];

for(let i = 0; i < numTab.length; i++){//On vas itérer jusquà ce que i soit égale à 7, une boucle "for" permet diterer à travers un tableau
    console.log(numTab[i]); //On vas utiliser i ici sous forme d'index pour récuperer les données du tableau.
}