// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    secondsTime: 0,
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false, secondsTime: 0})
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  onIncrement = () => {
    this.setState(prevState => ({
      secondsTime: prevState.secondsTime + 1,
    }))
  }

  onStartTimer = () => {
    this.intervalId = setInterval(this.onIncrement, 1000)
    this.setState({isTimerRunning: true})
  }

  renderMinutes = () => {
    const {secondsTime} = this.state
    const minutes = Math.floor(secondsTime / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {secondsTime} = this.state
    const seconds = Math.floor(secondsTime % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-img"
                alt="stopwatch"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="buttons-timer">
              <button
                className="start-button button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
                type="button"
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
