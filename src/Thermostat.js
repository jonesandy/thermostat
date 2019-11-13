function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.powerSaving = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.getMinTemp = function(){
  return this.MIN_TEMP;
};

Thermostat.prototype.isPowerSavingOn = function(){
  return this.powerSaving;
};

Thermostat.prototype.switchPowerSaving = function(){
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.increaseTemp = function(){
    this.temperature ++;
};

Thermostat.prototype.decreaseTemp = function(){
  this.temperature --;
};