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

const app = new Vue({
    el: '#app',
    data:{
        url: 'https://pokeapi.co/api/v2/',
        info: [],
        buscar: '',
        ver: ''
    },
    methods: {
        getPokemon(){
            axios.get(`${this.url}pokemon/${this.buscar.toLowerCase()}`)
            .then(res=>{
                let json =  res.data;
                //console.log(json);
                this.info = res.data;
                
                this.ver= 'ok';

            })
            .catch(err => {
                this.ver= 'error';
                console.warn(err);

            })
        }
    }
})