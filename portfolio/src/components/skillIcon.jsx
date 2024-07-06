// TODO: maybe devicon is better for performance...
import { useSpring, animated } from '@react-spring/web'



export default function SkillIcon({language, index}) {

  const props = useSpring({
    config: {duration: 2000},
    from: { opacity: 0},
    to: { opacity: 1},
  })

  return <>
    <span className="cell icon is-large">
      <animated.div style={props}>

      <img src={`https://skillicons.dev/icons?i=${language}`}></img>

      {/* <i className="devicon-amazonwebservices-plain-wordmark colored"></i> */}
      </animated.div>

    </span>
  </>
}