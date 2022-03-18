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
                this.list.push({
                    text : this.cartText.trim().toUpperCase(), 
                    // questo item lo useremo come parametro per sbarrare il testo nella lista
                    done : false 
                }); 
                // --> e svuota il campo di testo
                this.cartText= ""; 
            // altrimenti dammi un errore 
            }else{
                alert("Inserisci articolo")
            }
        },
        // Funzione per rimuovere l'Item dalla nostra lista 
        remuve : function(index){
            // se l'item è presente nella lista
            if( this.list[index] != undefined ){ 
                // elimina solo l'item scelto
                this.list.splice(index, 1);
            }else{ 
                alert("Articolo non presente")
            }
        }, 
        // con questa funzione diamo all'item done il valore inverso e lo appliceremo sull'elemento della lista. 
        crossed : function(index) { 
            // done diventa true
            this.list[index].done = !this.list[index].done;
        }

        
    }
}) 
