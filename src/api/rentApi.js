const url = `https://rent-a-bike-softuni1-default-rtdb.europe-west1.firebasedatabase.app/rents`;

export default {

    async rent( bikeId, userId){

        const response = await fetch(`${url}.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',  
            },
            body: JSON.stringify({bikeId, userId})
        })
    

        const result = await response.json();

        return result

    },
    async getOne( bikeId ){

        const response = await fetch(`${url}.json?equalTo="${bikeId}"&orderBy="bikeId"`);
        const result = await response.json();

         console.log(`object values result`, Object.values(result).at(0));
         
        return Object.values(result).at(0);
    }

}