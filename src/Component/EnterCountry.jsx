import React from 'react';
import '../App.css';
import axios from 'axios';
import CountryData from './CountryData';

class Country extends React.Component {
  state = {
    name: '',
    submit: false,
  };

  handlechange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  submit = () => {
    var data = this.state.name;
    axios
      .get('https://restcountries.eu/rest/v2/name/' + data)
      .then((response) => {
        console.log(response.data[1].capital);
        if (response.status == 200) {
          this.setState({
            capital: response.data[1].capital,
            population: response.data[1].population,
            latlng: response.data[1].latlng,
            flag: response.data[1].flag,
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
      return (
        <CountryData
          capital={this.state.capital}
          population={this.state.population}
          latlng={this.state.latlng}
          flag={this.state.flag}
        />
      );
    } else {
      return (
        <div className="form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Country"
              onChange={this.handlechange}
            ></input>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              disabled={!this.state.name}
              onClick={this.submit}
            >
              Submit
            </button>
          </div>
        </div>
      );
    }
  }

  render() {
    return <>{this.page()}</>;
  }
}

export default Country;
