import React, { useState } from 'react';

const HamburgerIcon = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className='m-2 relative cursor-pointer w-8 h-8  flex md:hidden'
    >
      <div className='w-full h-full flex flex-col gap-1 justify-center'>
        <div
          className={`w-full bg-white h-1 rounded transition-all transform ${
            open ? ' rotate-45 translate-y-1' : 'rotate-0 translate-y-0'
          }`}
        ></div>
        <div
          className={`w-full bg-white h-1 rounded transition-all duration-400 ${
            open ? 'absolute opacity-0' : 'opacity-100'
          }`}
        ></div>
        <div
          className={`w-full bg-white h-1 rounded transition-all transform ${
            open ? '-rotate-45 -translate-y-1' : 'rotate-0'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default HamburgerIcon;
