import React, { useState } from 'react';
import { useTrail, a } from '@react-spring/web';
import SkillMessage from '../components/skillMessage'

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
    height: open ? 130 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height }, index) => (
        <a.div key={index} >
          <a.div style={{height}} >{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function AboutAnimation() {
  const [open, set] = useState(true);
  return (
      <div
      // onClick={() => set(state => !state)}
      >
      <Trail open={open}>
        <div className="section"><SkillMessage discipline={'Frontend:'} skills={['css', 'react', 'tailwind', 'html', 'jquery', 'bootstrap']}/></div>
        <div className="section"><SkillMessage discipline={'Backend:'} skills={['py', 'express', 'c', 'mongodb', 'postgres', 'nginx', 'nodejs', 'mysql']}/></div>
        <div className="section"><SkillMessage discipline={'Tools & Concepts:'} skills={['git', 'jest', 'vite', 'aws', 'webpack', 'cloudflare']}/></div>
      </Trail>
    </div>

  );
}
