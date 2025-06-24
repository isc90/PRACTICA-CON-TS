const greet:string= "Hello World, typescript is fun";


function reversed(str:string):void{
   const splat:Array<string> = str.split(' ');
    const rev: string[] = [];
        for(let w of splat){
         rev.push(w.split('').reverse().join('') + ' ');
        };

console.log(rev.join('')); 
}

reversed(greet);