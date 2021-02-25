/**
 * Framework USado VUEJS
 * Se crea una instancia de vue
 * data: 
 *  url: es la pagina para consumir la api de wikipedia
 *  list: es la lista que guarda losresultados de la espuesta de la api
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
        url: 'https://es.wikipedia.org/w/api.php',
        list: []
    },
    created(){
            const params = {
                
                action: "query",
                cmtitle: "Categoría:Pingüinos_de_ficción",
                list: "categorymembers",
                format: "json",
                cmlimit: 5
            };
            this.url = this.url + "?origin=*";
            Object.keys(params).forEach((key) => {this.url += "&" + key + "=" + params[key];});
            axios.get(this.url)
            .then(res=>{
                let json =  res.data;
                this.list = json.query.categorymembers;
            })
            .catch(err => {
                console.warn(err);
            })
    }
})