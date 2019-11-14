var thermo = new Thermostat;

$(document).ready(function(){

  function updateTemperature(){
    $("#tempValue").text(thermo.getCurrentTemperature());
    $("#tempValue").attr('class', thermo.energyUsage());
  };

  updateTemperature();

  $("#tempUp").on('click', function(){
    thermo.increaseTemperature()
    updateTemperature();
  });

  $("#tempDown").on('click', function(){
    thermo.decreaseTemperature()
    updateTemperature();
  });

  $("#resetTemp").on('click', function(){
    thermo.resetTemperature()
    updateTemperature();
  });


  $("#togglePSM").on('click', function(){
    thermo.switchPowerSaving();
    if (thermo.isPowerSavingOn()){
      $("#togglePSM").addClass("psmOn");
    } else {
      $("#togglePSM").removeClass("psmOn");
    }
  });

});
