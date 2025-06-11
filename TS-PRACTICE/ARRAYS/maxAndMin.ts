const arri:Array<number> = [1,3,534,6,7,4,2,];

function maxAndMin(arr:Array<number>):string{
    let res:string="";
    let max:number= 0;
    let min:number= 0;
    const sorted: number[] = arr.sort((a,b)=>a-b);

    max = sorted[sorted.length - 1];
    min = sorted[0];

    res = `min: ${min}, max: ${max}`

    return res;
}

console.log(maxAndMin(arri));