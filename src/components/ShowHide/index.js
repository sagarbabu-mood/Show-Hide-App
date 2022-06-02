import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  showFirstName = () => {
    this.setState(prevState => ({
      isFirstName: !prevState.isFirstName,
    }))
  }

  showLastName = () => {
    this.setState(prevState => ({
      isLastName: !prevState.isLastName,
    }))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="items-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div>
            <button
              className="button"
              type="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstName ? <p className="para">Joe</p> : null}
          </div>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastName ? <p className="para">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
