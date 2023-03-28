import { useParallaxController } from 'react-scroll-parallax';

function Image(props) {
  const parallaxController = useParallaxController();

  // updates cached values after image dimensions have loaded
  const handleLoad = () => parallaxController.update();

  return <img src={props.src} onLoad={handleLoad} />;
}