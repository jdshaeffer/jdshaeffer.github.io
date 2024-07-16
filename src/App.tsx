const Intro = () => {
  return (
    <>
      <h1 className='text-3xl font-extrabold'>JD Shaeffer</h1>
      <p className='underline underline-offset-8 mb-8'>
        Sr Software Engineer at Butterfly Network
      </p>
      <p>Full stack, mostly TypeScript/JavaScript and Python.</p>
      <p>Building cool apps that impress my friends.</p>
    </>
  );
};

interface ProjectProps {
  imgFirst?: boolean;
}

const Project = ({ imgFirst }: ProjectProps) => {
  return (
    <div className='flex flex-row justify-items-center items-center space-x-4 mb-20'>
      {imgFirst ? (
        <>
          <div className='border-solid border-2 border-white rounded-md px-2 py-2 basis-2/3'>
            <p>dude</p>
            <p>dude</p>
            <p>dude</p>
            <p>dude</p>
            <p>dude</p>
            <p>dude</p>
          </div>
          <div className='border-solid border-2 border-red px-2 py-2 basis-1/3 text-center'>
            <p>dude</p>
          </div>
        </>
      ) : (
        <>
          <div className='border-solid border-2 border-red px-2 py-2 basis-1/3 text-center'>
            <p>dude</p>
          </div>
          <div className='border-solid border-2 border-white rounded-md px-2 py-2 basis-2/3'>
            <p>dude</p>
            <p>dude</p>
            <p>dude</p>
            <p>dude</p>
            <p>dude</p>
            <p>dude</p>
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <div className='mt-20'>
      <Project imgFirst />
      <Project />
    </div>
  );
};

const App = () => {
  return (
    <div className='container mx-auto px-20 py-20'>
      <div className='border-solid border-2 border-white rounded-md px-20 py-20'>
        <Intro />
        <Projects />
      </div>
    </div>
  );
};

export default App;
