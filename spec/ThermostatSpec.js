describe('Thermostat', function(){
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('new thermostat starts at 20', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('new thermostat min temp = 10', function(){
    expect(thermostat.minimumTemperature).toEqual(10);
  });


  describe('changes temperature', function(){

    it('increases by 1', function(){
      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21);
    });

    it('decreases by 1', function(){
      thermostat.decreaseTemp();
      expect(thermostat.temperature).toEqual(19);
    });

  });

  describe('power saving mode', function(){

    it('is on, max temp should be 25', function(){
      thermostat.temperature = 25;
      thermostat.powerSavingMode = true;
      expect( function() { thermostat.increaseTemp(); }).toThrow("Max temperature exceeded");
    });
  });

});
