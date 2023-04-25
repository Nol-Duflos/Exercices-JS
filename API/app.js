//On vas faire nos premiers appels d'API

//json = JavaScript Object Notation
//C'est un formet de fichier pour stocker facilement des donées
//A surpassé XML


const liste =  document.querySelector('.liste');
const btn = document.querySelector('.btn');
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () => {
    console.log("Hello world");
    
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    xhr.responseType = 'json'; //Indique que c'est json qui est appelé, 
    
    //Fontion pour m'anipuler l'appel d'API
    xhr.onload = function(){
        console.log(xhr.response); //Permet de log l'appel sur console.log sous forme de chaine de caractère
        //JSON.parse transforme le Json en JavaScript

        for(i = 0; i < xhr.response.length; i++) {

            let newLi = document.createElement('li');
            let newTitreCarte = document.createElement('h2');
            let newBodyCarte = document.createElement('p');

            newTitreCarte.innerText = xhr.response[i].title;
            newBodyCarte.innerText = xhr.response[i].body;

            newLi.appendChild(newTitreCarte);
            newLi.appendChild(newBodyCarte);
            liste.appendChild(newLi);
        }
    }
    
    xhr.send(); //Pour voir l'appel effectué, il faut aller dans "reseaux" "Network" 
})