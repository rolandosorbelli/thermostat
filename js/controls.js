$(document).ready(function(){
	var thermostat = new Thermostat();
	$('#temperature').text(thermostat.temperature);

	$('#temperature-up').on('click', function() {
		thermostat.up();
		updateTemperature();
	})

	$('#temperature-down').on('click', function() {
		thermostat.down();
		updateTemperature();
	})

	$('#temperature-reset').on('click', function(){
		thermostat.reset();
		updateTemperature();
	})

	function updateTemperature(){
		$('#temperature').text(thermostat.temperature);
		if(thermostat.usage() === 'Low-usage!') {()
			$('#temperature').css('color', 'lightgreen')
		} else if(thermostat.usage() === 'Medium-usage!') {
			$('#temperature').css('color', 'powderblue')
		} else {
			$('#temperature').css('color','indianred')
		}
	}

})
