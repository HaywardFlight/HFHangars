// Flight Data Management
class FlightData {
    constructor() {
        this.flightNumber = 'HF123';
        this.departureCity = 'New York';
        this.arrivalCity = 'London';
        this.departureTime = '10:00 AM';
        this.arrivalTime = '10:00 PM';
        this.departureDate = '2024-03-20';
        this.arrivalDate = '2024-03-20';
        this.departureTerminal = 'T4';
        this.arrivalTerminal = 'T5';
        this.departureGate = 'G12';
        this.arrivalGate = 'G8';
        this.flightStatus = 'On Time';
        this.aircraftType = 'Boeing 787';
        this.flightDuration = '7h 00m';
        this.distance = '3,459 miles';
        this.weather = {
            departure: {
                temperature: '72°F',
                conditions: 'Sunny',
                wind: '5 mph'
            },
            arrival: {
                temperature: '55°F',
                conditions: 'Cloudy',
                wind: '8 mph'
            }
        };
    }

    // Update flight data
    updateFlightData(newData) {
        Object.assign(this, newData);
        this.updateDisplay();
    }

    // Update weather data
    updateWeather(newWeather) {
        this.weather = newWeather;
        this.updateDisplay();
    }

    // Update the display with current data
    updateDisplay() {
        // Update flight number and route
        document.querySelector('.flight-number').textContent = this.flightNumber;
        document.querySelector('.flight-route').textContent = `${this.departureCity} → ${this.arrivalCity}`;

        // Update departure info
        document.querySelector('.departure-city').textContent = this.departureCity;
        document.querySelector('.departure-time').textContent = this.departureTime;
        document.querySelector('.departure-date').textContent = this.departureDate;
        document.querySelector('.departure-terminal').textContent = this.departureTerminal;
        document.querySelector('.departure-gate').textContent = this.departureGate;

        // Update arrival info
        document.querySelector('.arrival-city').textContent = this.arrivalCity;
        document.querySelector('.arrival-time').textContent = this.arrivalTime;
        document.querySelector('.arrival-date').textContent = this.arrivalDate;
        document.querySelector('.arrival-terminal').textContent = this.arrivalTerminal;
        document.querySelector('.arrival-gate').textContent = this.arrivalGate;

        // Update flight details
        document.querySelector('.flight-status').textContent = this.flightStatus;
        document.querySelector('.aircraft-type').textContent = this.aircraftType;
        document.querySelector('.flight-duration').textContent = this.flightDuration;
        document.querySelector('.distance').textContent = this.distance;

        // Update weather info
        const departureWeather = document.querySelector('.departure-weather');
        const arrivalWeather = document.querySelector('.arrival-weather');

        if (departureWeather) {
            departureWeather.innerHTML = `
                <p class="temperature">${this.weather.departure.temperature}</p>
                <p class="conditions">${this.weather.departure.conditions}</p>
                <p class="wind">Wind: ${this.weather.departure.wind}</p>
            `;
        }

        if (arrivalWeather) {
            arrivalWeather.innerHTML = `
                <p class="temperature">${this.weather.arrival.temperature}</p>
                <p class="conditions">${this.weather.arrival.conditions}</p>
                <p class="wind">Wind: ${this.weather.arrival.wind}</p>
            `;
        }
    }
}

// Create and export flight data instance
const flightData = new FlightData();
export default flightData; 