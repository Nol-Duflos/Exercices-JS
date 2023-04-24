const promise1 = new Promise((resolve, reject) => { //Promise est un mot clef créateur d'objets, elle vas prendre deux fonction selon si il a reussite ou echec (resolve, reject)

    console.log("Hello async");

    resolve('Les données sont arrivées');

})

//O peut utiliser des call back avec resolve et reject

promise1.then((value) => {
    console.log(value);
})

console.log(promise1);