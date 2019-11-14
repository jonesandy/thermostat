var thermo = new Thermostat;

$(document).ready(function(){
  $("#tempValue").text(thermo.getCurrentTemperature());

  $("#tempUp").on('click', function(){
    thermo.increaseTemperature()
    $("#tempValue").text(thermo.getCurrentTemperature());
  });

});
