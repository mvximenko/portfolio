const Logo = ({ desktop }) => (
  <svg width={desktop ? 34 : 21} height={desktop ? 32 : 20} viewBox='0 0 34 32'>
    <defs>
      <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='a'>
        <stop stopColor='#819CFA' offset='0%' />
        <stop stopColor='#4A63F3' offset='100%' />
      </linearGradient>
      <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='b'>
        <stop stopColor='#91EEFD' offset='0%' />
        <stop stopColor='#58D9FB' offset='100%' />
      </linearGradient>
      <linearGradient x1='50%' y1='0%' x2='50%' y2='100%' id='c'>
        <stop stopColor='#FFA759' offset='0%' />
        <stop stopColor='#FF6E2D' offset='100%' />
      </linearGradient>
    </defs>
    <g fill='none' fillRule='evenodd'>
      <circle fill='url(#a)' cx={17} cy={10} r={10} />
      <circle fill='url(#b)' cx={24} cy={22} r={10} />
      <circle fill='url(#c)' cx={10} cy={22} r={10} />
    </g>
  </svg>
);

export default Logo;
