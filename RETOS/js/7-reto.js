/**
 * Framework USado VUEJS
 * Se crea una instancia de vue
 * data: 
 *  url: es la pagina para consumir la api de pokeapi
 *  info: es informacion contenida del pokemon buscado
 * created:
 *  se carga los resultados de la api al crearse la instancia de vue
 *  el objeto params son los parametros para obtener informacion en este caso la categoria Pinguinos de ficcion
 *  en formato json y solo 5 resultados.
 *  Axios es el que se encarga de hacer la conexion y por medio del metodo GET para recibir una respuesta 
 *  y de forma asincrona con promesas espera que devuelva una respuesta, e internamente axios ya trae la data en formato
 *  json y en nuestro HTML se imprime el titulo y el enlace del articulo 
 * 
 */


Vue.component('pokemon',{

    template: //html
    `
    <div>
        <input type="text" v-model="buscar" @keyup.enter="getPokemon">
        <button class="btn btn-primary" @click="getPokemon">Buscar</button>
        <div class=" card mt-3" style="width: 18rem;" v-if="ver === 'ok'">
        
            <img :src="info.sprites.other.dream_world.front_default" class="card-img-top" :alt="info.name">
            <div class="card-body">
            <h5 class="card-title">{{info.name.toUpperCase()}}</h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>ID:</b> {{info.id}}</li>
            <li class="list-group-item"><b>Height:</b> {{info.height}}</li>
            <li class="list-group-item"><b>Weight:</b> {{info.weight}}</li>
            </ul>
        
        </div>
        <div class="mt-3" v-else-if="ver==='error'" >
            <p class="h3"> Pokemon no encontrado =(</p>
            
        </div>
    </div>
        `,
        
    data(){
        return{
            url: 'https://pokeapi.co/api/v2/',
            info: [],
            ver: '',
            buscar:''
        }
    },
    methods: {
        
        getPokemon(){
            axios.get(`${this.url}pokemon/${this.buscar.toLowerCase()}`)
            .then(res=>{
                this.info = res.data
                this.ver= 'ok';
                this.buscar = '';
            })
            .catch(err => {
                this.ver= 'error';
                console.warn(err);

            })
        }
    },
})

const app = new Vue({
    el: '#app',
    
})