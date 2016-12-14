import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    // console.log(temps);
    // console.log(pressures);
    // console.log(humidities);

    return (
        <tr key={ name }>
          <td className="hidden-xs-down"><GoogleMap lon={ lon } lat={ lat } /></td>
          <td><Chart data={ temps } color="red" units="°C" /></td>
          <td><Chart data={ pressures } color="green" units="hPa" /></td>
          <td><Chart data={ humidities } color="blue" units="%" /></td>
        </tr>
    );
  }
  
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="hidden-xs-down">City</th>
              <th>Temp</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather) }
          </tbody>
        </table>
        </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);