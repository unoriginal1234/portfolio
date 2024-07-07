import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';

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
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function AboutAnimation() {
  const [open, set] = useState(true);
  return (
    <div className="section">
      <div className={animationContainer, 'is-size-1 has-text-centered is-italic has-text-weight-bold'}
      // onClick={() => set(state => !state)}
      >
      <Trail open={open}>
        <span>A bit</span>
        <span>About</span>
        <span>Me</span>

      </Trail>
    </div>
    </div>

  );
}
