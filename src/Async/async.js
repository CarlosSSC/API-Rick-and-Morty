const API = "https://rickandmortyapi.com/api/characters/"

const getData = async (API) =>{
    
    try{
        const data = await fetch(API)
        console.log(data)
    }   catch (error){
        console.log(error);
    }
}