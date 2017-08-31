function Thermostat(temperature = 20){
	this.temperature = temperature;
	this.minTemperature = 10;
	this.powerSaving = true;
};

Thermostat.prototype.up = function(){
	if (this.temperature===25 && this.powerSaving === true) {
		throw("Power Saving is on!");
	}
	else if (this.temperature===32 && this.powerSaving === false) {
		throw("Power Saving is off!");
	}
	else {
		this.temperature += 1;
	}
};

Thermostat.prototype.down = function(){
	this.temperature -= 1;
};

Thermostat.prototype.reset = function(){
	this.temperature = 20;
};

Thermostat.prototype.usage = function(){
	if (this.temperature < 18) {
		return("Low-usage!");
	}
	else if (this.temperature < 25 && this.temperature > 17) {
		return("Medium-usage!");
	}
	else {
		return("High-usage!");
	}
};