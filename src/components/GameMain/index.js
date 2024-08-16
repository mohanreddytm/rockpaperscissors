import {Component} from 'react'

import TotalScore from '../TotalScore'

import RulesOne from '../RulesOne'

import ChoicesContainer from '../ChoicesContainer'

import './index.css'

class GameMain extends Component {
  state = {score: 0}

  gettingScore = x => {
    if (x === 'YOU WON') {
      this.setState(prevState => ({score: prevState.score + 1}))
    } else if (x === 'YOU LOSE') {
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  render() {
    const {listOfChoices} = this.props
    const {score} = this.state

    return (
      <div className="game-main-container">
        <TotalScore TotalScoreOne={score} />
        <ChoicesContainer
          gettingScore={this.gettingScore}
          choices={listOfChoices}
        />

        <RulesOne />
      </div>
    )
  }
}

export default GameMain
