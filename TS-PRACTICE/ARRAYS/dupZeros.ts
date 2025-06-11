const arr:Array<number>=[1,0,2,3,0,4,5,0];


function dupZeros(arr:Array<number>):number{

    let zeros:number = 0;
    let len:number = arr.length;

    if(arr[arr.length] == 0){
        len-=1;
        zeros++;
    }

    for(let i = len; i >= 0; i--){
        if(arr[i] == 0){
            zeros++;
        }
    }


    return zeros;
}

console.log(dupZeros(arr));