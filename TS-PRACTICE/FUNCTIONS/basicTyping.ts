const userName:string = "Jimi";
const userAge:number = 27;

function greeting(name:string, age:number): string{
    return `Hola ${name}, tienes ${age} anyos, y el siguiente tendras ${age + 1} anyos`;
};

console.log(greeting(userName,userAge));

