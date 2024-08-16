import './index.css'

const TotalScore = props => {
  const {TotalScoreOne} = props
  const a = JSON.stringify(TotalScoreOne)
  return (
    <div className="total-score-main-container">
      <div className="total-score-left-cont">
        <h1 className="total-score-left-heading">
          Rock <br /> Paper <br /> Scissors
        </h1>
      </div>
      <div className="total-score-right-cont">
        <p className="total-score-right-heading">Score</p>
        <p className="total-score">{a}</p>
      </div>
    </div>
  )
}

export default TotalScore
