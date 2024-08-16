import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const RulesOne = () => (
  <Popup
    modal
    trigger={
      <button className="rules-button" type="button">
        Rules
      </button>
    }
  >
    {close => (
      <div className="rules-cont">
        <RiCloseLine className="close-one" onClick={() => close()} />
        <img
          className="rules-image"
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </div>
    )}
  </Popup>
)

export default RulesOne
