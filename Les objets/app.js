//Comprendre les objets
//!\\Très importants en JavaScript//!\\

let Nol = { //à l'intérieur d'un objet, il y a des propriétés et des valeurs qui sont associées à cet objet
    //C'est un conteneur à valeurs et à données
    prenom : 'Nol', //des virgules entre chaque propriétés sauf si c'est la dernière
    nom : 'Duflos',
    age :27,
    taille : 170,
    brune : true,
    //On peut ajouter une fonction :
    presentation : function(){     // <== C'est une methode, CAD une fonction dans un objet, une fonction qui vas être la valeur d'une propriété
        console.log("Hello world");
    } 
}

console.log(Nol.presentation()); //dot notation ; on appel notre objet (Nol) avec une de ses valeurs (nom)

//Ajouter une propriété dans un objet : 

Nol.passions = ['Cuisine', 'Escalade', 'Sport']; //Ajoute une propriété dans l'objet en respecant l'ordre alphabétique

console.log(Nol.passions[1]); //On peut selectionner une des passions du tableau à partir de l'objet Nol, ici c'est "escalade" qui est log