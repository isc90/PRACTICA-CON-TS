

function isPair(num:number):Boolean{
    const pairNumber:Boolean = num % 2 === 0 ? true : false;
    return pairNumber;
};

console.log(isPair(4));
console.log(isPair(3));