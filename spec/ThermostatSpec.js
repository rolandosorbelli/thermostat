describe('Thermostat', function() {
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
		thermostat2 = new Thermostat(25);
		thermostat3 = new Thermostat(32);
		thermostat4 = new Thermostat(17);
	});

	it("should start at 20 degrees", function() {
		expect(thermostat.temperature).toBe(20);
	});

	it("should increase the temperature", function(){
		thermostat.up();
		expect(thermostat.temperature).toBe(21);
	});

	it("should decrease the temperature", function(){
		thermostat.down();
		expect(thermostat.temperature).toBe(19);
	});

	it("describes the minimum temperature", function(){
		expect(thermostat.minTemperature).toBe(10);
	});

	it("power saving mode should be on by default", function(){
		expect(thermostat.powerSaving).toBe(true);
	});

	it("shouldn't go further than 25 degrees if power saving is on", function(){
		expect(function() {thermostat2.up()}).toThrow("Power Saving is on!");
		expect(thermostat2.temperature).toBe(25);
	});

	it("shouldn't go further than 32 degrees if power saving is off", function(){
		thermostat3.powerSaving = false;
		// thermostat3.temperature = 32
		expect(function() {thermostat3.up()}).toThrow("Power Saving is off!");
		expect(thermostat3.temperature).toBe(32);

	});

	it("should reset the temperature to 20", function(){
		thermostat2.reset();
		expect(thermostat2.temperature).toBe(20);
	});

	it("should display 'low-usage' if temperature < 18", function(){
		expect(thermostat4.usage()).toBe("Low-usage!");
	});

	it("should display 'medium-usage' if temperature < 25", function(){
		expect(thermostat.usage()).toBe("Medium-usage!");
	});

	it("should display 'high-usage' if temperature > 24", function(){
		expect(thermostat3.usage()).toBe("High-usage!");
	});
});