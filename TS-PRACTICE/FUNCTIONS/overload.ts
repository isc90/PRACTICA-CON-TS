

function processInput(input: string | number): string | number{

    return typeof input === "string" ? input.trim() : (input * input);

};

console.log(processInput("Caquitaaa   "));
console.log(processInput(5));