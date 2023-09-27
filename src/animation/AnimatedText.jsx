import { useSpring, animated } from 'react-spring';

export default function AnimatedText({ text }) {
  const fadeProps = useSpring({ opacity: 1, from: { opacity: 0 }, reset: true });

  return (
    <animated.div style={fadeProps}>
      <h1>{text}</h1>
    </animated.div>
  );
}