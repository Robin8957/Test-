import React from 'react';
import '../App.css';
import axios from 'axios';
import Weather from './Weather';

class CountryData extends React.Component {
  state = { submit: false };

  submit = () => {
    var data = this.props.capital;
    axios
      .get(
        'http://api.weatherstack.com/current?access_key=95b024cb0870a82513c09d72f9bba749&query=' +
          data
      )
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          this.setState({
            temperature: response.data.current.temperature,
            wind_speed: response.data.current.wind_speed,
            precip: response.data.current.precip,
            icon: response.data.current.weather_icons,
            submit: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  page() {
    if (this.state.submit) {
      console.log('temp', this.state.temperature);
      return (
        <Weather
          temperature={this.state.temperature}
          wind_speed={this.state.wind_speed}
          precip={this.state.precip}
          icon={this.state.icon}
        />
      );
    } else {
      return (
        <>
          <div>
            <div className="card">
              <div className="cardBody">
                <img src={this.props.flag} />
              </div>
            </div>
          </div>
          <div className="row mt50">
            <div className="col-md-4">
              <div className="card">
                <div className="cardBody">
                  <h2>Capital</h2>
                  {this.props.capital}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="cardBody">
                  <h2>Population</h2>
                  {this.props.population}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="cardBody">
                  <h2>latlng</h2>
                  {this.props.latlng}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  render() {
    return <>{this.page()}</>;
  }
}

export default CountryData;
