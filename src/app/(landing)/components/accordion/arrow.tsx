const IconArrow = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      className={`w-6 h-6 text-black ${
        isOpen ? 'rotate-180' : ''
      } transition-transform duration-300`}
      focusable='false'
      aria-hidden='true'
      viewBox='0 0 24 24'
      data-testid='ArrowDownwardIcon'
    >
      <path d='m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z'></path>
    </svg>
  );
};

export default IconArrow;
