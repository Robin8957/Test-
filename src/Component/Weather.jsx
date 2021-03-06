import React from 'react';
import '../App.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        <div>
          <div className="card">
            <div className="cardBody">
              <img src={this.props.icon} />
            </div>
          </div>
        </div>
        <div className="row mt50">
          <div className="col-md-4">
            <div className="card">
              <div className="cardBody">
                <h2>Temperature</h2>
                {this.props.temperature}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="cardBody">
                <h2>Wind_speed</h2>
                {this.props.wind_speed}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="cardBody">
                <h2>Precip</h2>
                {this.props.precip}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Weather;
