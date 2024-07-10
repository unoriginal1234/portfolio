import { useSpring, animated } from '@react-spring/web'

export default function LandingPage() {
  const props = useSpring({
    config: {duration: 750},
    from: { opacity: 0,
      x: '-10%'
    },
    to: { opacity: 1,
      x: '0%'},
  })

  return <div className="container">
    <animated.div style={props}>
      <div className="grid">
        <div className="cell title has-text-centered">
          Eric T. Roth

        </div>
        <div className="cell"></div>
      </div>
    </animated.div>
    </div>

}