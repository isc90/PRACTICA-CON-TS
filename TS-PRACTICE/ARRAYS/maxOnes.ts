const seq:Array<number> = [1,1,0,1,1,1];

function maxConsecutiveOnes(nums:Array<number>):void{
    let maxOnes:number=0;
    let counter:number=0;

        for(let num of nums){
            if(num == 1){
                counter+=1;
                if(counter > maxOnes){
                    maxOnes = counter;
                }
            }else{
                counter = 0;
            }
        }

    console.log(maxOnes);
}


maxConsecutiveOnes(seq);