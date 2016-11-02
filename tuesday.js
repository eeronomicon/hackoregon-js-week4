"use strict";

function Vehicle(type, line, lat, long, speed, full, vehicleNumber, late) {
  this.type = type;
  this.line = line;
  this.lat = lat;
  this.long = long;
  this.speed = parseInt(speed);
  this.full = full;
  this.vehicleNumber = parseInt(vehicleNumber);
  this.late = parseInt(late);
};

Vehicle.prototype.city = "Portland";
Vehicle.prototype.state = "Oregon";
Vehicle.prototype.agency = "Trimet";

Vehicle.prototype.displayInfo = function() {
  var returnArray = [];
  returnArray.push(this.type);
  returnArray.push(this.line);
  returnArray.push([this.lat, this.long]);
  return returnArray;
};

Vehicle.prototype.updateLatLong = function(newLat, newLong) {
  this.lat = newLat;
  this.long = newLong;
}

var busLine12 = new  Vehicle("Bus", "12", -122.2, 45.52, 30, false, 1520, 2);
console.log(busLine12);
console.log(busLine12.displayInfo());
console.log(busLine12.agency);

var maxTrainBlue = new Vehicle("Train", "Blue", -122.0, 45.22, 15, false, 102, 5);
console.log(maxTrainBlue);
console.log(maxTrainBlue.displayInfo());
console.log(maxTrainBlue.city);

var trolleyBroadway = new  Vehicle("Trolley", "Broadway", -123.2, 44.52, 25, true, 828, 10);
console.log(trolleyBroadway);
console.log(trolleyBroadway.displayInfo());
console.log(trolleyBroadway.state);

maxTrainBlue.updateLatLong(-121.9, 45.2);
console.log(maxTrainBlue.displayInfo());


function Vector(x, y) {
  this.x = x;
  this.y = y;
};

Vector.prototype.plus = function(vector) {
  this.x += vector.x;
  this.y += vector.y;
  return this;
};

Vector.prototype.minus = function(vector) {
  this.x -= vector.x;
  this.y -= vector.y;
  return this;
};

console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
