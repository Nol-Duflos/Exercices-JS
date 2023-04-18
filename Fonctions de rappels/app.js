//Utiliser les fonctions de rappels (callback) sur les tableaux
// filter() est une fonction qui vas appeler une autre fonction
//Une fonction callback est une fontion qui être utilisée en tant qu'argument par une autre fonction

function usingCallback(callback){ //C'est une fonction (usingCallback) qui prend une autre function (callback) en paramètre et qui l'execute.

    callback();
}

usingCallback(function(){
    console.log("Hello depuis la callback");
});

const numTab = [1, 2, 3, 4];

//FOREACH

numTab.forEach(function(element){ //Foreach est une methode proposée par JavaScript qui utilise une fonction callback. Ici elle appelle cette fonction pour chaque élément du tableau.
    console.log(element);         //L'élément "element" s'appelle "une valeur courante"
});

//MAP

const resultMap = numTab.map(function(x){ //La méthode Map vas utiliser une fonction callback et ça va retourner un nouveau tableau avec les resultats d'une fonctions qui auront été appliqué à chaque élément du tableau ici.
    return x * 2;
}); //On peut aussi utiliser des fonctions fléchées qui sont plus jolies et prennent moins de place

//const resultMap = numTab.map(x => * 2);

console.log(resultMap);

//FILTER
//La méthode "filter" sert à filtrer un tableau

const fruits = ['Fraise', 'abc', 'Pomme', 'Pastèque', 'kiwi'];

const resultFilter = fruits.filter(function(fruit){

    return fruit.length > 4; //filtre les éléments inférieur à 4 caractères pour garder ceux à plus de 4 caractères

});

console.log(resultFilter);

//REDUCE
//Celle-ci je ne l'ai pas très bien comprise.

const numTab2 = [1, 2, 3, 4];
const reduced = numTab2.reduce(function(a,b){
    return a + b;
}, 10); //On comment à accumuler à 10, donc ça fait 10 +1 +2 +3 +4

console.log(reduced);
