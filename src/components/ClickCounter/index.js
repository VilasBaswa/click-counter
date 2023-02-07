import {Componant} from 'react'
import './index.css'

class Clickcounter extends Componant {
  state = {count: 0}
  onIncrementCount = () => {
    this.setState(pState => ({count: pState.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The Button has been clicked
          <br />
          <span className="counter-value">{count}</span>
        </h1>
        <p className="description">Click the button to increase the count</p>
        <button className="btn" type="button" onclick={this.onIncrementCount}>
          Click me
        </button>
      </div>
    )
  }
}
export default Clickcounter
