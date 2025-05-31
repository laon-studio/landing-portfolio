interface MenuButtonProps {
  onClick?: () => void;
  isOpen?: boolean;
}

const MenuButton = (title: String) => {
  return (
    <button
      className='z-10 flex items-center justify-center w-12 h-12 transition-transform cursor-pointer'
      aria-label='Toggle navigation menu'
    >
      <div className='relative flex flex-col w-8 gap-[4px]'>
        <span className='w-full absolute h-[1px] z-10 bg-black'></span>
        <span className='w-full absolute h-[1px] z-10 bg-black'></span>
        <span className='w-full absolute h-[1px] z-10 bg-black'></span>
      </div>
    </button>
  );
};

export default MenuButton;
