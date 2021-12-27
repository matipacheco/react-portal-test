import { createPortal } from 'react-dom';
import Ball from './Ball';

function BallPortal({ callback }) {
  const canyonPortal = document.querySelector('#canyon-portal');
  return createPortal(<Ball callback={callback} />, canyonPortal);
}

export default BallPortal;
