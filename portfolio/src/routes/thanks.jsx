import { useSpring, animated } from '@react-spring/web';


export default function Thanks() {

  const props = useSpring({
    config: {duration: 1000},
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return <>
    <section className="section is-medium">
    <animated.div style={props}>
    <h1 className="title">Thank you for your message!</h1>
      <h2 className="subtitle">
        I look forward to checking it out!
      </h2>
    </animated.div>

    </section>
  </>
}