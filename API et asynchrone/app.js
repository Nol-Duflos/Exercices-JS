//On vas utiliser setTimeout() et setInterval

setTimeout(presentation, 2000); //Premier argument : une fonction qu'on vas executer et un second argument du temps jusqu'à l'execution de cette fonction
            //Ici, 2 secondes passent jusqu'à l'execution de la fonction "présentation"

function presentation (){
    console.log("Hello world");
}


const timeout = setTimeout(presentation2, 2000);

clearTimeout(timeout); //Permet de ne pas présenter la fonction, ici c'est la fonction "presentation2" qui est visée

function presentation2 (){
    console.log("Hello de la deuxième présentation");
}

setTimeout(function presentation3 (){
    console.log("Hello de la troisième présentation");
}, 2000);

let compteur = 0;



setInterval(increment, 1000);  //Très utilisé pour faire des fonctionnalités qui ont besoins de se répeter

function increment(){
    compteur = compteur + 1;
    console.log(compteur);
}