const url = `https://rent-a-bike-softuni1-default-rtdb.europe-west1.firebasedatabase.app/rents`;

export default {

    async rent(bikeId, userId) {

        const response = await fetch(`${url}.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bikeId, userId })
        })


        const result = await response.json();

        return result

    },
    async getOne(bikeId) {

        const response = await fetch(`${url}.json?equalTo="${bikeId}"&orderBy="bikeId"`);
        const result = await response.json();

        if (!result) {
            return null
        }


        const [id, rent] = Object.entries(result).at(0);

        return {
            id,
            ...rent
        }

    },
    async deleteOne(rentId) {

        const response = await fetch(`${url}/${rentId}.json`, {
            method: 'DELETE',
        });


        if (!response.ok) {
            throw new Error('Failed to delete rent');
        }
    }

}