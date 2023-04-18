const titre = document.querySelector('h1');
const btn =  document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const soustitre = document.querySelector('.soustitre');

btn.addEventListener('click', presentation); //addEventListener ajoute un écouteur d'évènement, ici le click, dans lequel on ajoute une fonction
                                            //Le bouton avec sa class "btn" porte un évènement et déclanche une fonction

function presentation(){ 

    // titre.classList.add('taille-txt');
    console.log("Touche pressée");
}

// presentation(); //J'avais gardé cette fonction et ça ne marchait pas


btn2.addEventListener('click', evenement);  

function evenement(a, b){ //Dans les parentaises d'une fonction, on peut mettre des paramêtres.

    console.log(a + b);

}

evenement(2,5); //Avec les paramètres, la console.log vas afficher 7


//Autres évènements : Les survols avec mouseenter et l'appuie sur une touche avec keydown

//On vas ajouter un évènement de survol sur le titre H2 pour que le fond soit bleu quand on le survol

soustitre.addEventListener('mouseenter', underline);

function underline(){

    soustitre.classList.add('text-deco');
    console.log("Element survolé");

}