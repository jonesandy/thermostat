function Thermostat(){
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
};

Thermostat.prototype.increaseTemp = function(){
  if(this.maximumTemperature === this.temperature) {
    throw "Max temperature exceeded";
  } else {
    this.temperature ++;
  }

};

Thermostat.prototype.decreaseTemp = function(){
  this.temperature --;
};