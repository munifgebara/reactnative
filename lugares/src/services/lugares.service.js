export default class LugaresService {



    static async  list() {
        try {
            let response = await fetch(baseURL + `.json`);
            let json = await response.json();
            let vetor = Object.keys(json).map(
                id => {
                    let obj = { id: id, data: json[id] };
                    return obj;
                }
            );
            return vetor;
        }
        catch (error) {
            console.log('Service ERROR', error);
            return [];
        }
    }
    static async delete(id) {
        try {
            let response = await fetch(baseURL + `/${id}.json`, { method: 'DELETE' });
            return response;
        }
        catch (error) {
            console.log('Service ERROR', error);
            return null;
        }
    }
    static async view(id) {
        try {
            let response = await fetch(baseURL + `/${id}.json`);
            let data = await response.json();
            return {id:id,data:data};
        }
        catch (error) {
            console.log('Service ERROR', error);
            return null;
        }
    }


    static async update(obj) {
        try {
            const data = JSON.stringify(obj.data);

            let response = await fetch(baseURL + `/${obj.id}.json`, { method: 'PATCH', body: data });
            return response;
        }
        catch (error) {
            console.log('Service ERROR', error);
            return null;
        }
    }

    static async insert(obj) {
        try {
            const data = JSON.stringify(obj.data);

            let response = await fetch(baseURL + `.json`, { method: 'POST', body: data });
            return response;
        }
        catch (error) {
            console.log('Service ERROR', error);
            return null;
        }
    }

}

const baseURL = 'https://reactnative-89ad7.firebaseio.com/lugares';