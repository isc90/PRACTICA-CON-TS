function counter(str:string):void{

    let vowels:number=0;
    let consonants:number=0;
    let container: string[]= str.split('');
    let vows = /[aeiouáéíóú]/gi

    for(let letter of container){
        if(vows.test(letter)){
            vowels++;
        }else{
            consonants++;
        }
    }

    console.log(`vowels: ${vowels}, consonants: ${consonants}`);

};


counter("CACA");