
/**
 * 
 * Crear una pila usando clases en TS
 * 
 */

class Pile<T>{ // aqui el generico

    private pile:T[]; //declarar la pila

    constructor(){
        this.pile = []; //inicializarla
    };

    push(element:T):void{
        this.pile.push(element)
    };

    pop(): T | undefined{
        return this.pile.pop();
    };

    peek(): T | undefined{
        return this.pile[this.pile.length];
    };

    size():number{
        return this.pile.length;
    };
    
}


const pila1 = new Pile<number>();

pila1.push(0);
pila1.push(1);

console.log(pila1.size());