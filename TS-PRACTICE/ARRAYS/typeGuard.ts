
function isArrayString<T>(arr: Array<T>):Boolean{

    return arr.every((element) => typeof element === "string");

};


const bank = ["money", "gold", "checks",5];

console.log(isArrayString(bank));