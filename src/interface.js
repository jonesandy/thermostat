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
      $("#togglePSM").text("POWER SAVING ON");
    } else {
      $("#togglePSM").removeClass("psmOn");
      $("#togglePSM").text("POWER SAVING OFF");
    }
  });

  displayWeather('London');

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#cityTemperature').text(data.main.temp);  
    });
    $("#currentCity").text(city);
    $("#cityName").val('');
  };

  $('#selectCity').submit(function(event) {
    event.preventDefault();
    var city = $('#cityName').val();
    displayWeather(city);
  });

});
