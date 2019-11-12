describe('Thermostat', function(){
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('new thermostat starts at 20', function(){
    expect(thermostat.temperature).toEqual(20);
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

});
