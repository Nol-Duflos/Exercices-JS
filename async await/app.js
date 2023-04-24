//Utiliser async await qui permet d'utiliser des promesses plus facilement

async function foo(){ //Quand on utilise 'async' devant une fonction, elle envoie toujours une promesse qui s'auto résoud
    const p1 = new Promise ((resolve, reject) => {
        setTimeout(() => resolve("Action effectuée !"), 1000)
    });

    let resultat = await p1;
    console.log(resultat);

}

foo().then(console.log);