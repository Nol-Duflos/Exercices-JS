// window.addEventListener('load', () => { //Ajoute un évènement lié à la fenêtre 'window' une fois que le site a chargé 'load'
//     console.log("Le site a chargé ! ");
// });

// window.addEventListener('DOMContentloaded', () => {
//     console.log("Le DOM est en train de se charger, avant les images");
// });

// window.addEventListener('scroll', () => { // Vas déclencher des animation liées au scroll
//                                           //Je vais pouvoir faire changer l'apparence de la navbar au scroll
//     console.log("Tu viens de scroll !!");
// });

// window.addEventListener('keydown', () => { //'keydown' c'est quand on vas appuyé sur une touche
//     console.log("Tu viens d'appuyer sur une touche !");
// }); 

// window.addEventListener('keyup', (e) => { //'keyup' c'est quand on vas relaché une touche
//     console.log(e);
// });

//Jouer avec l'input
// document.getElementById('inp').addEventListener('input', () => {
//     console.log("l'input reçoit des données")
// });

//Un évènement très important c'est 'submit',c'est quand on envoit des données au backend

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); //Cette formule empêche la page de s'actualiser
    console.log("formulaire envoyé !")
});