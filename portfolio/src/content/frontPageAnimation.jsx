import { useInView, animated } from '@react-spring/web'

export default function FrontPageAnimation({text}) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: '-10% 0%',
    }
  )

  return (
    <animated.div ref={ref} style={springs}>
      <div className="section">
        <div className="title has-text-centered">
          {text}
        </div>

      </div>

    </animated.div>
  )
}