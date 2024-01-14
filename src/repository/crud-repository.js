class CrudRepository{

    constructor(model){
        const model = this.model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        
        } catch(error){
            console.log("Something went wrong in crud Repo");
            throw error;
        }
    }

    async destroy(modelId){
        try {

            await this.model.destroy({
                where:{
                    id:modelId
                }
            });
            return true;

        } catch(error){
            console.log("Something went wrong in crud Repo");
            throw error;
        }
    }

    async get(modelId){
        try {
        
            const result= await this.model.findByPk(modelId);
                
            return result;

        } catch(error){
            console.log("Something went wrong in crud Repo");
            throw error;
        }
    }

    async getAll(){
        try {

            const result= await this.model.findAll();
                
            return result;

        } catch(error){
            console.log("Something went wrong in crud Repo");
            throw error;
        }
    }

    async update(data,modelId){
        try {
            const result = await this.model.update(data,{
                where: {
                    id: modelId,
                }
            });
            return result; 

        } catch(error){
            console.log("Something went wrong in crud Repo");
            throw error;
        }
    }

}

module.exports = CrudRepository;