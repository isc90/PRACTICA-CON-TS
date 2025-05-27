
const storage:Array<number | string | Boolean> = [false,1,'2',3,4,true];

    function firstElement<T>(arr: Array<T>):T | undefined{
        return arr[0];
    }

    console.log(firstElement(storage));