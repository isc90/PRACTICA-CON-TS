function formatData(input: string | number, prefix?: string):string{
    let result:string = "";

    if(typeof input === "string"){
        result = input.toUpperCase();
    } else{
        result = (input * 2).toString();
    }


    return prefix ? `${prefix}-${result}` : result;
}

console.log(formatData(3));
console.log(formatData(3, "result"));
console.log(formatData("caca"));
console.log(formatData("caca", "result"));
