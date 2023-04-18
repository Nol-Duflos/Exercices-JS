const btn =  document.querySelector('.btn1');

btn.addEventListener('click', presentation);

function presentation(){

    btn.classList.toggle('active'); //Le toggle est utilisé à la place du add, cela permet d'ajouter ou de retirer la class au bouton en cliquant dessus

}