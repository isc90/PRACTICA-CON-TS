const nums:Array<number> = [-7,-3,2,3,11];

function sortedSquares(nums: number[]): number[] {
    
    const squared:Array<number> = nums.map((num)=>num*num);
    return squared.sort((a,b)=>a-b);
    
};

console.log(sortedSquares(nums));