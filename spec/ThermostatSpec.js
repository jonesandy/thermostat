'use strict';

describe('Thermostat', function(){
  
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('new thermostat', function(){

    it('does start temp at 20', function(){
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('has min temp 10', function(){
      expect(thermostat.getMinTemperature()).toEqual(10);
    }); 

    it('has power saving mode on', function(){
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });

  });

  describe('changes temperature', function(){

    it('does increase by 1', function(){
      thermostat.increaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('does increase by 3', function(){
      for (var i = 0; i < 3; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(23);
    });

    it('decreases by 1', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('decreases by 5', function(){
      for (var i = 0; i < 5; i++){
        thermostat.decreaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(15);
    });

  });

  describe('has temperature limits', function(){

    it('stops decreasing when limit hit', function(){
      thermostat.temperature = 10;
      thermostat.decreaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });

    it('stops increasing when limit hit - PSM', function(){
      thermostat.switchPowerSaving();
      thermostat.temperature = 32;
      thermostat.increaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });

  });

  describe('power saving mode', function(){

    beforeEach(function(){
      thermostat.switchPowerSaving();
    });

    it('can switch power saving off', function(){
      expect(thermostat.isPowerSavingOn()).toBe(false);
    });

    it('can switch power saving off then on', function(){
      expect(thermostat.isPowerSavingOn()).toBe(false);
      thermostat.switchPowerSaving();
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });

    it('is off and has MAX TEMP 32', function(){
      expect(thermostat.isPowerSavingOn()).toBe(false);
      expect(thermostat.getMaxTemperature()).toBe(32);
    });

  });

  describe('default temperature', function(){

    it('can be reset back to default', function(){
      for (var i = 0; i < 6; i++){
        thermostat.increaseTemperature();
      }
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
      expect(thermostat.getCurrentTemperature()).not.toEqual(25);
    });

  });

  describe('displays usage levels', function(){

    it('shows low-usage', function(){
      for (var i = 0; i < 3; i++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('shows medium-usage', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('shows high-usage', function(){
      thermostat.switchPowerSaving();
      for (var i = 0; i < 6; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  });

  describe('usage cases', function(){

    beforeEach(function(){
      for (var i = 0; i < 10; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25)
      thermostat.switchPowerSaving();
    });

    it('increase temp, switch off PSM, carry on increasing', function(){
      for (var i = 0; i < 5; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(30)
    });

    it('increase temp, switch off PSM, increase till MAX_TEMP', function(){
      for (var i = 0; i < 15; i++){
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32)
    });

  });

});
