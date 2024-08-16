import {Component} from 'react'

import ChoicesOne from '../ChoicesOne'

import './index.css'

class ChoicesContainer extends Component {
  state = {
    winnig: false,
    status: '',
    yourImg: '',
    opponentImgSrc: '',
    currentChoiceEx: 'ROCK',
  }

  componentDidMount() {
    this.getTheRandomChoice()
  }

  getTheRandomChoice = () => {
    const {choices} = this.props

    let number = Math.random(0 <= 3 < 1)
    number *= 100
    const floatedOne = Math.floor(number)
    const finalOne = floatedOne % 3
    this.setState({currentChoiceEx: choices[finalOne].id})
  }

  onClickPlayAgainButton = () => {
    this.setState({winnig: false}, this.getTheRandomChoice)
  }

  isWinnigIsDone = x => {
    this.setState({winnig: x})
  }

  result = x => {
    const {gettingScore} = this.props
    gettingScore(x)
    this.setState({status: x})
  }

  yourImgSrc = x => {
    const {choices} = this.props
    const {currentChoiceEx} = this.state
    const filteredOne = choices.filter(each => each.id === currentChoiceEx)
    this.setState({opponentImgSrc: filteredOne[0].imageUrl})
    this.setState({yourImg: x})
  }

  initialOne = () => {
    const {choices} = this.props
    const {currentChoiceEx} = this.state
    return (
      <ul className="list-choices-cont">
        {choices.map(each => (
          <ChoicesOne
            result={this.result}
            isWinnigIsDone={this.isWinnigIsDone}
            yourImgSrc={this.yourImgSrc}
            currentChoiceExport={currentChoiceEx}
            details={each}
            key={each.id}
          />
        ))}
      </ul>
    )
  }

  winnerOne = () => {
    const {yourImg, opponentImgSrc, status, currentChoiceEx} = this.state
    console.log(currentChoiceEx)
    return (
      <div className="winner-main-cont">
        <ul className="teams-match-cont">
          <li className="each-team-winner">
            <h1 className="each-team-winner-heading">You</h1>
            <img
              className="each-team-winner-image"
              src={yourImg}
              alt="your choice"
            />
          </li>
          <li className="each-team-winner">
            <h1 className="each-team-winner-heading">Opponent</h1>
            <img
              className="each-team-winner-image"
              src={opponentImgSrc}
              alt="opponent choice"
            />
          </li>
        </ul>
        <div className="winner-win-cont">
          <p className="winner-win-heading">{status}</p>
          <button
            onClick={this.onClickPlayAgainButton}
            type="button"
            className="play-again-button"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {winnig} = this.state
    return <div>{winnig ? this.winnerOne() : this.initialOne()}</div>
  }
}

export default ChoicesContainer
