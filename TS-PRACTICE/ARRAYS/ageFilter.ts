

type Users= {
    name:string;
    age:number;
}

const group:Array<Users> = [{name:"jimi",age:27},{name:"Kurt",age:27},{name:"Amy",age:27},{name:"john",age:15}]; 

function notUnderEighteen(arr:Array<Users>):Array<Users>{

    const hairyPeople:Array<Users> = arr.filter((u)=> u.age >= 18);

    return hairyPeople;
};

console.log(notUnderEighteen(group));