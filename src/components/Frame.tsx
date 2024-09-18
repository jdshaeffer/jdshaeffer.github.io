import { ReactNode, ReactElement } from 'react';

interface FrameProps {
  children: ReactNode;
  option: number;
}

type FrameOptions = Record<number, ReactElement>;

const Frame = ({ children, option }: FrameProps) => {
  const frameOptions: FrameOptions = {
    1: (
      <div className='border-2 border-white px-20 py-20 relative'>
        <div className='border-2 border-white border-t border-l absolute w-24 h-24 rounded-br-full left-0 top-0' />
        <div className='border-2 border-white border-t border-r absolute w-24 h-24 rounded-bl-full right-0 top-0' />
        <div className='border-2 border-white border-l border-b absolute w-24 h-24 rounded-tr-full left-0 bottom-0' />
        <div className='border-2 border-white border-r border-b absolute w-24 h-24 rounded-tl-full right-0 bottom-0' />
        <div className='border-2 border-white rounded-md px-10 py-10'>
          {children}
        </div>
      </div>
    ),
    2: <div className='box px-20 py-20'>{children}</div>,
  };
  return frameOptions[option];
};

export default Frame;
