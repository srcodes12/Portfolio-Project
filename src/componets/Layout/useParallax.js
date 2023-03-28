import { useParallax } from 'react-scroll-parallax';

function useParallax() {
  const { ref } = useParallax<HTMLDivElement>({ speed: 10 });
  return <div ref={ref} />;
}

export default useParallax;