const liste =  document.querySelector('.liste');
const btn = document.querySelector('.btn');
const xhr = new XMLHttpRequest();

btn.addEventListener('click', () => {

    fetch('https://jsonplaceholder.typicode.com/posts') //Appel à l'API
    .then(response => response.json()) //avec .then on obtient une réponse
    .then(data => {
        for(i = 0; i < data.length; i++) {
    
            let newLi = document.createElement('li');
            let newTitreCarte = document.createElement('h2');
            let newBodyCarte = document.createElement('p');
    
            newTitreCarte.innerText = data[i].title;
            newBodyCarte.innerText = data[i].body;
    
            newLi.appendChild(newTitreCarte);
            newLi.appendChild(newBodyCarte);
            liste.appendChild(newLi);
        }
    }) //là on accède aux données
})
