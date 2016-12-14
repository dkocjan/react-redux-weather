import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    // console.log(temps);
    // console.log(pressures);
    // console.log(humidities);

    return (
      <tr key={ name }>
        <td>{ name }</td>
        <td><Chart data={ temps } color="red" units="°C" /></td>
        <td><Chart data={ pressures } color="green" units="hPa" /></td>
        <td><Chart data={ humidities } color="blue" units="%" /></td>
      </tr>
    );
  }
  
  render() {
    return (
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: '20%' }}>City</th>
              <th style={{ width: '22.5%' }}>Temperature</th>
              <th style={{ width: '22.5%' }}>Pressure</th>
              <th style={{ width: '22.5%' }}>Humidity</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather) }
          </tbody>
        </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);