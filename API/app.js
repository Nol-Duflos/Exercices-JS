//On vas faire nos premiers appels d'API

//json = JavaScript Object Notation
//C'est un formet de fichier pour stocker facilement des donées
//A surpassé XML


const liste =  document.querySelector('.liste');
const btn = document.querySelector('.btn');

//Appel basique avec XHR
//Chaque fois, on fait des appels avec des URL :


const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

//Fontion pour m'anipuler l'appel d'API
xhr.onload = function(){
    console.log(JSON.parse(xhr.response)); //Permet de log l'appel sur console.log sous forme de chaine de caractère
                                            //JSON.parse transforme le Json en JavaScript
}

xhr.send(); //Pour voir l'appel effectué, il faut aller dans "reseaux" "Network" 