//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue({
    el: "#root",
    data: {
        messaggio: "Hello Vue-JS!",
        immagine: {
            nome: "sedia",
            percorso: "./assets/img/download.jpg"
        }
    }
});
