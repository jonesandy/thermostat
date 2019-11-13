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

Thermostat.prototype.getMaxTemperature = function(){
  return this.MAX_TEMPERATURE;
};

Thermostat.prototype.setMaxTemperature = function(num){
  this.MAX_TEMPERATURE = num;
};

Thermostat.prototype.isPowerSavingOn = function(){
  return this.powerSaving;
};

Thermostat.prototype.switchPowerSaving = function(){
  this.powerSaving = !this.powerSaving;
  if (this.powerSaving) {
    this.setMaxTemperature(25);
  } else {
    this.setMaxTemperature(32);
  }
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