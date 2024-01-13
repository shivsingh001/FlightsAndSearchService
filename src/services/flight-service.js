const {FlightRepository, AirplaneRepository} = require('../repository/index');


class FlightService {

    constructor() {
        this.airplaneRepository =new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
           
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity  // Here we just destructure the data object and inserted the value of airpalne.capacity
        
            });
            return flight;

        } catch (error) {
            console.log("Something went wrong at service layer", error);
            throw {error};
        }
    }

    async getFlightData(){

    }
}

module.exports = FlightService;