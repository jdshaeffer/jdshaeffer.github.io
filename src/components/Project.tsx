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

export default Project;
