
async function fetchData<T>(url:string):Promise<T>{

        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Fail");
        };

        const data: T = await response.json();
        return data;

};

const dir:string = "https://pokeapi.co/api/v2/pokemon/pikachu";

interface Pokemon {
    name: string;
    id:number;
};

async function main(){

    try{
        const pikachu = await fetchData<Pokemon>(dir);
        console.log(pikachu.id);
        console.log(pikachu.name);
    } catch(err){
        console.error("Something went wrong", err)
    }
}

main();