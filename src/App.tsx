import Frame from './components/Frame';
import Intro from './components/Intro';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className='container mx-auto px-32 py-32'>
      <Frame>
        <Intro />
        <Projects />
      </Frame>
    </div>
  );
};

export default App;
