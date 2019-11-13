'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.MIN_TEMPERATURE = 10;
  this.NON_PSM_MAX = 32;
  this.PSM_MAX = 25;
  this.LOW_USAGE_LIMIT = 18;
  this.maxTemperature = this.PSM_MAX;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaving = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.getMinTemperature = function(){
  return this.MIN_TEMPERATURE;
};

Thermostat.prototype.getMaxTemperature = function(){
  return this.maxTemperature;
};

Thermostat.prototype.setMaxTemperature = function(num){
  this.maxTemperature = num;
};

Thermostat.prototype.isPowerSavingOn = function(){
  return this.powerSaving;
};

Thermostat.prototype.switchPowerSaving = function(){
  this.powerSaving = !this.powerSaving;
  if (this.powerSaving) {
    this.setMaxTemperature(this.PSM_MAX);
  } else {
    this.setMaxTemperature(this.NON_PSM_MAX);
  }
};

Thermostat.prototype.increaseTemperature = function(){
  if (this.temperature === this.maxTemperature) {
    return;
  } else {
    this.temperature++;
  }
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temperature === this.MIN_TEMPERATURE) {
    return;
  } else {
    this.temperature--;
  }
};

Thermostat.prototype.resetTemperature = function(){
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function(){
  if (this.temperature < this.LOW_USAGE_LIMIT) {
    return 'low-usage';
  } else {
    return 'medium-usage';
  }

};