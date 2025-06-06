class Vehicle{
    constructor(public nombre:string, public topSpeed:number){};

    description():string{
        return(`This vehicle is a ${this.nombre} and it's top speed is ${this.topSpeed} km/h`);
    };

};

const mazda2:Vehicle = new Vehicle("Mazda 2",240);
//mazda2.description();

class StationWagon extends Vehicle{

    constructor(nombre:string,topSpeed:number, public doors:number){
        super(nombre,topSpeed);
    };

    description(): string {
        return(`${super.description()} it has ${this.doors} doors`);
    }
};

const golf:StationWagon = new StationWagon("Golf StationWagon",260,5);

console.log(golf.description())