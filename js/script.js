console.log("Vue OK", Vue);

const {createApp} = Vue;

const app = createApp({
    name:"caruselRielaborationWithVue",
    data: () => ({
        destinations, //recupero la lista oggetti contenuta in data.js
        currentIndex: 0 , //imposto una variabile di appoggio che mi servirà per le operazioni di cambio immagine
    }),

    computed: {
        //mi restituisce la lunghezza di destinations
        lastElementIndex(){
            return this.destinations.length - 1;
        },
        //mi restituisce vero se il current index è il primo elemento 
        isFirstIndex(){
            return this.currentIndex === 0;
        },
        //mi restituisce vero se il current index è l'ultimo elemento di destinations
        isLastIndex(){
            return this.currentIndex === this.lastElementIndex;
        }
    },

    methods: {
        goToPrev(){
            if(this.isFirstIndex){
                this.currentIndex = this.lastElementIndex;
            }
            else{
                this.currentIndex--;
            }
        },

        goToNext(){
            if(this.isLastIndex){
                this.currentIndex = 0;
            }
            else{
                this.currentIndex++;
            }

        }
    }
    

});


app.mount('#root');