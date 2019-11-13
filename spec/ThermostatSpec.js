'use strict';

describe('Thermostat', function(){
  
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('new thermostat starts at 20', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('new thermostat min temp = 10', function(){
    expect(thermostat.getMinTemperature()).toEqual(10);
  });


  describe('changes temperature', function(){

    it('increases by 1', function(){
      thermostat.increaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases by 1', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
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

    it('has power saving mode on', function(){
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });

    it('can switch power saving off', function(){
      thermostat.switchPowerSaving();
      expect(thermostat.isPowerSavingOn()).toBe(false);
    });

    it('can switch power saving off then on', function(){
      thermostat.switchPowerSaving();
      expect(thermostat.isPowerSavingOn()).toBe(false);
      thermostat.switchPowerSaving();
      expect(thermostat.isPowerSavingOn()).toBe(true);
    });

    it('is off and has MAX TEMP 32', function(){
      thermostat.switchPowerSaving();
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



  });

});
