const { CityService } =require('../services/index');

const CityService = new CityService();


const create = async (req,res) => {

try{
    const city = await CityService.createCity(req.body);
     return res.status(201).json({
        data : city,
        success: true,
        message : ' Successfully created a city',
        err : {}
    });
    
} catch (error){
    console.log(error);
    return res.status(500).json({
        data : {},
        success : false,
        message: 'Not able to create a city',
        err : error
    });
}
    
}


const destroy = (req,res) => {
    
}


const get = (req,res) => {
    
}


const update = (req,res) => {
    
}


module.exports = {

    create,
    destroy,
    get,
    update

}