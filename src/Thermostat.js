'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 25;
  this.powerSaving = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.getMinTemperature = function(){
  return this.MIN_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingOn = function(){
  return this.powerSaving;
};

Thermostat.prototype.switchPowerSaving = function(){
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.increaseTemperature = function(){
    this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.getCurrentTemperature() === this.MIN_TEMPERATURE) {
    return;
  } else {
    this.temperature--;
  }
};