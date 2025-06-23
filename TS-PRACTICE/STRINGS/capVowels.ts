const greeting:string = "Hola Mundo";
const vowels:string[] = ['a','e','i','o','u'];

function vows(str:string):void{
    let arr = str.split('');

    for(let i = 0; i < arr.length; i++){
        if(vowels.includes(arr[i])){
            arr[i] = arr[i].toUpperCase();
        }
    }
    console.log(arr.join(''));
}

vows(greeting);