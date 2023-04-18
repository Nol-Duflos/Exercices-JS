 //console.log vas loger quelque chose dans la console
 const nombre = document.querySelector('h1'); //docuent représente tout le DOM, en faisant ".querySelector on vas pouvoir selectionner l'élément voulu dans le body de HTML"

 console.log(nombre); //nombre correspond donc à h1 dans le Dom
 
 const id = document.getElementById('monsoustitre'); //Ce selecteur permet de selectionner uniquement les id, on n'a pas besoin de rajouter # pour preciser que c'est un id comme avec querySelector
                                                    //Il n'est plus si utilisé
 console.log(document);

 const elHTML = document.getElementsByClassName('text');

 console.log(elHTML); //elHTML permet de créer un tableau avec tout les éléments de l'objet seléctionné dans la console

 const allli = document.querySelectorAll(".list") //querySelectorAll nous retourne un tableau dans le log avec un tableau ciblant tout nos éléments
                                                //On vas pouvoir venir les cibler en groupe pour faire des actions de groupe
 console.log(allli);