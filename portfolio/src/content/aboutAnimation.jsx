import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';

const trailsText = {
  'position': 'relative',
  'width': '100%',
  'height': '80px',
  'line-height': '80px',
  'color': 'black',
  'font-size': '6em',
  'font-weight': '800',
  'letter-spacing': '-0.05em',
  'will-change': 'transform, opacity',
  'overflow': 'hidden'
}

const animationContainer = {
  'display': 'flex',
  'align-items': 'center',
  'height': '100%',
  'justify-content': 'center',
}

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function AboutAnimation() {
  const [open, set] = useState(true);
  return (
    <div className={animationContainer, 'is-size-1 has-text-centered is-italic has-text-weight-bold'} onClick={() => set(state => !state)}>
      <Trail open={open}>
        <span></span>
        <span>About</span>
        <span>Eric</span>
        <span>Roth</span>
      </Trail>
    </div>
  );
}
