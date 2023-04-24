const promise1 = new Promise((resolve, reject) => { //Promise est un mot clef créateur d'objets, elle vas prendre deux fonction selon si il a reussite ou echec (resolve, reject)

    console.log("Hello async");

    resolve('Les données sont arrivées');

})

//O peut utiliser des call back avec resolve et reject

promise1.then((value) => { //Then permet de lancer une mathode après un resolve et qu'on a ben recçu nos
    console.log(value);
}).catch(() => {
    console.log("Il y a eu une erreur"); //On s'en sert pour déclarer une erreur, ça permet de ne plus avoir d'erreur sur console.log

})

console.log(promise1);