const nums:Array<number> = [1,2,3,4,5];

function sum(arr:Array<number>):number{
    const res:number = arr.reduce((acc,curr)=> acc + curr,0);
    return res;
};

console.log(sum(nums));