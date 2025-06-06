class Cart{

    private cart: Array<Product>;
    constructor(){
        this.cart = [];
    };

    addProduct(prod:Product):void{
        this.cart.push(prod);
    };

    totalBill():number{
        return this.cart.reduce((acc,curr)=> acc + curr.precio,0);
    };

    outOfStock():Array<Product>{
        return this.cart.filter((product)=> product.stock === 0);
    };

    inStock():Array<Product>{
        return this.cart.filter((product)=> product.stock > 0);
    };

}

interface Product{
    id:number;
    nombre:string;
    precio:number;
    stock:number;
}

const carrito:Cart = new Cart();

const Macbook:Product = {id:1,nombre:"macbook",precio:2000,stock:5};
const iPhone:Product = {id:2,nombre:"iPhone",precio:1000,stock:5};
const Watch:Product = {id:3,nombre:"Apple Watch",precio:500,stock:5};
const Dell:Product = {id:4,nombre:"Precision",precio:1000,stock:0};


carrito.addProduct(Macbook);
carrito.addProduct(iPhone);
carrito.addProduct(Watch);
carrito.addProduct(Dell);

console.log(carrito.totalBill());


