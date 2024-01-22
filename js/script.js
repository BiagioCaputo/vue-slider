console.log("Vue OK", Vue);

const {createApp} = Vue;

const app = createApp({
    name:"caruselRielaborationWithVue",
    data: () => ({
        destinations, //recupero la lista oggetti contenuta in data.js
        currentIndex: 0 , //imposto una variabile di appoggio che mi servirà per le operazioni di cambio immagine
    }),
    

});


app.mount('#root');