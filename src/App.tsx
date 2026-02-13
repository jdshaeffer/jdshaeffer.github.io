import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import LinedBox from './components/LinedBox';

const App = () => {
  return (
    <>
      <div className='absolute w-full h-10 text-center top-1/2 -mt-8'>
        <h1 className='text-2xl'>jd shaeffer</h1>
        <p>full stack software engineer</p>
      </div>
      <div className='absolute w-full h-5 text-center top-1/2 mt-12 z-10'>
        <a href='https://github.com/jdshaeffer'>github</a> |{' '}
        <a href='https://www.linkedin.com/in/jd-shaeffer/'>linkedin</a> |{' '}
        <a href='/resume.pdf'>resume</a>
      </div>

      <Canvas>
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <OrbitControls />
        <LinedBox position={[0, 0, 0]} />
      </Canvas>
    </>
  );
};

export default App;
