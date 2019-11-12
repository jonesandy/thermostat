function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.increaseTemp = function(){
  this.temperature ++;
};

Thermostat.prototype.decreaseTemp = function(){
  this.temperature --;
};