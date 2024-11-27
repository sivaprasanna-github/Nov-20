class Vehicle{
    model;
    licensePlate;
    mileage;
    constructor(model, licensePlate, mileage){
        this.model = model;
        this.licensePlate = licensePlate;
        this.mileage = mileage;
    }

    drive(miles){
        this.mileage = this.mileage + miles;
        console.log("mileage is now increased to", this.mileage);
    }

    getMileage(){
        console.log("my current mileage is", this.mileage);
    }
}

var myVehicle = new Vehicle("ToyotaPrius", "ABC1234", 55);
myVehicle.drive(20);
myVehicle.getMileage();
console.table(myVehicle);