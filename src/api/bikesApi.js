const url = `https://rent-a-bike-softuni1-default-rtdb.europe-west1.firebasedatabase.app/bikes`;


async function getAll() {
    
    const response = await fetch(`${url}.json`);
    const result = await response.json();

    const bikes = Object.keys(result).map(id => ({id, ...result[id]}));
    
    console.log(bikes);

    return bikes;
}

async function create(data){
    
    const response = await fetch(`${url}.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await response.json();

    return result
}


export default {
    getAll,
    create
}