const app= new Vue(
    {
    el : "#app", 
    data :{
        list : [], 
        cartText : "", 
    }, 
    methods : { 
        // Creiamo la funzione per aggiungere un Item nell'array dando come argomento una stringa
        add : function(string){ 
            // condizione se la stringa è diversa da vuata -->
            if (string.trim() != ""){ 
                // --> aggiungi l'Item al nostro array-->
                this.list.push(string.trim()); 
                // --> e svuota il campo di testo
                this.cartText= ""; 
            // altrimenti dammi un errore 
            }else{
                alert("Inserisci articolo")
            }
        },
        // Funzione per rimuovere l'Item dalla nostra lista 
        remuve : function(index){
            // se lìitem è presente nella lista
            if( this.list[index] != undefined ){ 
                // elimina Item
                this.list.splice(index, 1);
            }else{ 
                alert("Articolo non presente")
            }
        }
    }
})