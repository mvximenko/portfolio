const Arrow = ({ desktop }) => (
  <svg width={desktop ? 11 : 7} height={desktop ? 19 : 12} viewBox='0 0 11 19'>
    <g fillRule='nonzero' fill='none'>
      <path
        d='M10.367 8.524L2.585.755A1.375 1.375 0 10.632 2.694L7.44 9.569.633 16.375a1.375 1.375 0 000 1.939c.257.262.608.41.976.412.367-.001.719-.15.976-.412l7.782-7.769a1.375 1.375 0 000-2.021z'
        fill='#FFF'
      ></path>
      <path d='M-11-7h33v33h-33z'></path>
    </g>
  </svg>
);

export default Arrow;
