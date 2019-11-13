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
    expect(thermostat.getMinTemp()).toEqual(10);
  });


  describe('changes temperature', function(){

    it('increases by 1', function(){
      thermostat.increaseTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });

    it('decreases by 1', function(){
      thermostat.decreaseTemp();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
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
    
  });

});
