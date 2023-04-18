//On vas ajouter une class à ce H1 pour lui changer sa taille par ex

const titre = document.querySelector('h1');

function presentation(){

    titre.classList.add('taille-txt');
}

presentation(); //J'ai oublié de déclarer ma fonction donc ça n'a pas marché
                //Là par contre, avec la fonction déclaré, ça fonctionne.
                //Avec cette fonction, j'ai ajouté une class au H1 qui a modifié son apparence.


//On n'aurait pu ne pas faire une fonction mais proceder de cette manière :

const soustitre = document.querySelector('h2');
soustitre.classList.add('sous-titre-txt');