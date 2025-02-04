
export async function fetchplaces(){
    const response=await fetch('http://localhost:3000/places')
    const resdata=await response.json();
    if(!response.ok){
        throw new Error('Failed to fetch places');
    }
    console.log(response);
    return resdata.places;
}
export async function updateplaces(places){
    const response=await fetch('http://localhost:3000/user-places',{
        method:'PUT',
        body:JSON.stringify({places}),
        header:{
            'Content-Type':'application/json'
        }
    });
    const resdata=await response.json();
    if(!response.ok){
        throw new Error('failed');
    }
    return resdata.message;
}