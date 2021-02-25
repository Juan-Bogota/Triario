/**
 * Se crea la clase Maestro, el cual tiene atributo materia y un metodo de prmedio de Grupo
 *  adicional hay 2 subclases que heredan de la clase maestro sus propiedades como materia
 *  y su metodo de promedio grupo
 *  El maestro de fisica tiene un atributo adicional de antiguedad
 *  El maestro de musica tiene un atributo adicional de edad
 */


class Maestro {
    constructor(materia) {
      this.materia = materia;
    }
    promedioGrupo(calificaciones){
        return calificaciones.reduce((a,b) => a + b) / calificaciones.length;
    }
  }
  
  class MaestroDeFisica extends Maestro {
    constructor(materia, antiguedad){
        super(materia),
        this.antiguedad = antiguedad
    }
    promedioGrupo(calificaciones){
        return super.promedioGrupo(calificaciones)
    }
  }


  class MaestroDeMusica extends Maestro {
    constructor(materia, edad){
        super(materia),
        this.edad = edad
    }
    promedioGrupo(calificaciones){
        return super.promedioGrupo(calificaciones)
    }
  }

const maestroUno = new Maestro('matematicas');
console.log(maestroUno.promedioGrupo([2,3,4,5,6,7]));

const maestroDos = new MaestroDeFisica('fisica', 10);
console.log(maestroUno.promedioGrupo([10,8,4,6, 9]));

const maestroTres = new MaestroDeMusica('Musica', 38);
console.log(maestroUno.promedioGrupo([5.5, 6, 7, 8.5]));

