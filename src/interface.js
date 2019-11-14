var thermo = new Thermostat;

$(document).ready(function(){
  $("#tempValue").text(thermo.getCurrentTemperature());

  $("#tempUp").on('click', function(){
    thermo.increaseTemperature()
    $("#tempValue").text(thermo.getCurrentTemperature());
  });

  $("#tempDown").on('click', function(){
    thermo.decreaseTemperature()
    $("#tempValue").text(thermo.getCurrentTemperature());
  });

  $("#resetTemp").on('click', function(){
    thermo.resetTemperature()
    $("#tempValue").text(thermo.getCurrentTemperature());
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
