import { useEffect } from 'react';
import { useMotionAnimate } from 'motion-hooks';

import ball from './ball.svg';

function Ball({ callback }) {
  const { play, isFinished } = useMotionAnimate(
    '.ball',
    { x: 1300, rotate: 360 },
    { duration: 3 }
  )

  useEffect(() => {
    play();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!isFinished) return
    callback()
    // eslint-disable-next-line
  }, [isFinished])

  return <img src={ball} className="ball" alt="logo" />
}

export default Ball
