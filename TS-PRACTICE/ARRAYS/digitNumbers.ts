let num:number = 500;


function oddDigitNumber(num:number):number{

    let digitCounter:number = 0;
    
        while(num >= 1){
            num /= 10;
            digitCounter++;
        } 
        return digitCounter;
}

oddDigitNumber(num);

const container:Array<number> =[555,901,482,1000,4000];


function findNumber(nums:Array<number>):number{
    let even:number = 0;

        for(let num of nums){
            let digitCounter = oddDigitNumber(num);
            if(digitCounter % 2 === 0){
                even++;
            }
        }

    return even;
}

console.log(findNumber(container));