//On vas faire nos premiers appels d'API

//json = JavaScript Object Notation
//C'est un formet de fichier pour stocker facilement des donées
//A surpassé XML


//Appel basique avec XHR
//Chaque fois, on fait des appels avec des URL :

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

xhr.send();