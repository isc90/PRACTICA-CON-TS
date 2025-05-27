
class Persona{

    constructor(private nombre:string, private age:number){}

    saludar(){
        console.log(`Hola ${this.nombre}, tienes ${this.age} anyos`)
    };
};

const jimi:Persona = new Persona("Jimi",27);
jimi.saludar();