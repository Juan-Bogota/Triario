/**
 * Framework USado VUEJS
 * Se crea una instancia de vue
 * data: 
 *  url: es la pagina para consumir la api de pokeapi
 *  pokemones: es la lista que guarda losresultados de la espuesta de la api
 * created:
 *  se carga los resultados de la api al crearse la instancia de vue
 *  se realizo una paginacion de prev y next sencillo que nos trae 20 pokemones de la api
 *  si no hay paginacion previous o next en la respuesta de la api, se oculta el boton  
 *  El DOM Virtual se crea dinamicamente cuando se renderiza los pokemones
 */

const app = new Vue({
    el: '#app',
    data:{
        url: 'https://pokeapi.co/api/v2/pokemon',
        paginacion: {
            prev: '',
            next: ''
        },
        valueP: 'visible',
        valueN: 'visible',
        pokemones:[]
    },
    methods: {
        async getPokemon(url){
            try {
                this.pokemones=[];
                let res = await axios.get(url || this.url);
                let json = await res.data
                console.log(json)
                json.previous ? this.valueP = 'visible': this.valueP = 'hidden';
                json.next ? this.valueN = 'visible': this.valueN = 'hidden';
                this.paginacion.next = json.next;
                this.paginacion.prev = json.previous;
                
                    for (let i = 0; i < json.results.length; i++){
                
                        try {
                            let res = await axios.get(json.results[i].url);
                            let pokemon = await res.data;
                            this.pokemones.push(pokemon)

                        } catch (err) {
                            console.log(err)
                        }
                   }
                console.log(this.pokemones)
                
            }catch (err) {
                console.log(err)
            }
        }
    },
    created() {
        this.getPokemon();        
               
        }
    })