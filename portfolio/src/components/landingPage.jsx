import { useSpring, animated } from '@react-spring/web'
import Socials from './socials'
import HeadshotCard from './headshotCard'

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
    <div className="container">
      <animated.div style={props}>
        <div className="fixed-grid has-2-cols">
          <div className="grid is-col-span-2">
            <div className="cell title">
              Eric T. Roth
            </div>

            <div className="cell container ">
            <Socials />
            </div>
          </div>
        </div>
      </animated.div>

    </div>
    <HeadshotCard />
    </div>

}