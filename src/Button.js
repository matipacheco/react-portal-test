import { useState } from 'react';
import { Button as BootstrapButton } from "react-bootstrap";

import BallPortal from "./BallPortal";

function Button() {
  const [showBall, toggleShowBall] = useState(false)
  const [isDisabled, toggleIsDisabled] = useState(false)

  const handleClick = () => {
    toggleShowBall(!showBall)
    toggleIsDisabled(true)
  }

  const resetState = () => {
    toggleShowBall(false)
    toggleIsDisabled(false)
  }

  return (
    <>
      {showBall && <BallPortal callback={resetState} />}
      <BootstrapButton onClick={handleClick} disabled={isDisabled}>
        Fire!
      </BootstrapButton>
    </>
  )
}


export default Button
