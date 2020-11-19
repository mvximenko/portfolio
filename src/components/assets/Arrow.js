const Arrow = ({ desktop }) => (
  <svg width={desktop ? 20 : 16} height={desktop ? 20 : 16} viewBox='0 0 24 24'>
    <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
  </svg>
);

export default Arrow;
