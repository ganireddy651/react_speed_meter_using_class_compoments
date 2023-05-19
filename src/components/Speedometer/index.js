// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    console.log(speed)
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    console.log(speed)
    return (
      <div className="speed_meter_bg_container">
        <h1 className="main-heading">SSPEEDOMETER</h1>
        <div className="image-container">
          <img
            className="speed-meter-image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="speedometer"
          />
          <h1 className="heading">Speed is {speed}mph</h1>
          <p className="para">Min limit is 0mph, Max limit is 200mph</p>
          <div className="button-container">
            <button
              onClick={this.onAccelerate}
              className="accelerate-btn"
              type="button"
            >
              Accelerate
            </button>
            <button onClick={this.onBrake} className="brake-btn" type="button">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
