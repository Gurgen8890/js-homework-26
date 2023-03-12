class Vehicle {
  color;
  wheels;
  _speed = 0;
  #rims;
}

class Car extends Vehicle {
  steeringWheel;
  _engine;
  set engine(value) {
    this._engine = value
  }
  get engine() {
    return this._engine
  }


  set speed(value) {
    if (value > 250) {
      value = `Avtomeqenayi maximal aragutyun@ ${value}km/h`
    }
    this._speed = value
  }
  get speed() {
    return this._speed
  }
}

class Truck extends Vehicle {

  speed(value) {
    try {
      console.log("start speed are 0");
      if(value > 500) {
        throw 'speed need low than 500'
      }
    } catch (err) {
      console.log(err);
    }

    
  }

}



let car = new Car()
car._engine = 3.2


let truck = new Truck()
truck.steeringWheel = 'black';
truck.color = "blue";

truck._speed = 280;



let vehicle = new Vehicle()

try {  
vehicle.color = "red";
vehicle.wheels = 5;
vehicle._speed = '200 km';

if(vehicle.wheels > 4) {
  throw (`vehicle wills ${vehicle.wheels}`)
}
} catch (error) {
  
  console.log(error)
  console.log('wheel need be 4')
}


//console.log(truck);
// console.log(car);
 truck.speed(600);

 