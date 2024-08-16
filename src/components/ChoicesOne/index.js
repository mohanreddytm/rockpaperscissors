import {Component} from 'react'

import './index.css'

class ChoicesOne extends Component {
  onClickChoice = () => {
    const {
      details,
      currentChoiceExport,
      yourImgSrc,
      isWinnigIsDone,
      result,
    } = this.props
    let resultOne = ''
    if (details.id === 'PAPER') {
      if (currentChoiceExport === 'ROCK') {
        resultOne = 'YOU WON'
      } else if (currentChoiceExport === 'SCISSORS') {
        resultOne = 'YOU LOSE'
      } else {
        resultOne = 'IT IS DRAW'
      }
    } else if (details.id === 'SCISSORS') {
      if (currentChoiceExport === 'ROCK') {
        resultOne = 'YOU LOSE'
      } else if (currentChoiceExport === 'PAPER') {
        resultOne = 'YOU WON'
      } else {
        resultOne = 'IT IS DRAW'
      }
    } else if (details.id === 'ROCK') {
      if (currentChoiceExport === 'SCISSORS') {
        resultOne = 'YOU WON'
      } else if (currentChoiceExport === 'PAPER') {
        resultOne = 'YOU LOSE'
      } else {
        resultOne = 'IT IS DRAW'
      }
    }
    isWinnigIsDone(true)
    result(resultOne)
    yourImgSrc(details.imageUrl)
  }

  render() {
    const {details} = this.props

    let testID

    if (details.id === 'ROCK') {
      testID = 'rockButton'
    }
    if (details.id === 'PAPER') {
      testID = 'paperButton'
    }
    if (details.id === 'SCISSORS') {
      testID = 'scissorsButton'
    }

    return (
      <li className="each-choice">
        <button
          onClick={this.onClickChoice}
          className="normal-button"
          type="button"
          data-testid={testID}
        >
          <img
            className="choice-image"
            src={details.imageUrl}
            alt={details.id}
          />
        </button>
      </li>
    )
  }
}
export default ChoicesOne
