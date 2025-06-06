interface Product{
    id:number;
    nombre:string;
    precio:number;
    stock:number;
}

const macbook:Product = {id:1,nombre:"macbook",precio:2000,stock:5};
const iphone:Product = {id:2,nombre:"iPhone",precio:1000,stock:5};
const watch:Product = {id:3,nombre:"Apple Watch",precio:500,stock:5};
const dell:Product = {id:4,nombre:"Precision",precio:1000,stock:0};

const stock:Array<Product> = [macbook,iphone,watch];

function existence(stock:Array<Product>):void{
    console.log(stock.filter((product)=> product.stock > 0));
};

existence(stock);