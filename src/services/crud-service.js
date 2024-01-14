class CrudService{
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service");
            throw{error};
        }
    }
    async delete(id){
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service");
            throw{error};
        }
    }
    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service");
            throw{error};
        }
    }
    async getAll(){
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service");
            throw{error};
        }
    }
    async update(id, data){
        try {
            const response = await this.repository.destroy(data, id);
            return response;
        } catch (error) {
            console.log("Something went wrong in CRUD service");
            throw{error};
        }
    }
}

module.exports = CrudService