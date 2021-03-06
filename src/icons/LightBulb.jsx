import React from 'react'

// eslint-disable-next-line
const LightBulb = ({ light }) => (
  <svg
    className="light-bulb-svg"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 500 500"
  >
    <path
      id="SVGCleanerId_0"
      style={{ fill: light ? '#FFC843' : '#F3F2F0' }}
      d="M315.764,331.543c0-48.588,88.859-76.217,88.859-182.919 C404.623,66.542,338.084,0,256.001,0S107.378,66.542,107.378,148.624c0,106.702,88.861,134.331,88.861,182.919H315.764z"
    />
    <g>
      <path
        id="SVGCleanerId_0_1_"
        className={light ? 'bulb-lit' : 'bulb-unlit'}
        d="M315.764,331.543c0-48.588,88.859-76.217,88.859-182.919
          C404.623,66.542,338.084,0,256.001,0S107.378,66.542,107.378,148.624c0,106.702,88.861,134.331,88.861,182.919H315.764z"
      />
    </g>
    <g>
      <path
        className={light ? 'wire-on' : 'wire-off'}
        d="M227.215,339.787c-4.554,0-8.244-3.691-8.244-8.244c0-42.72-12.297-61.258-25.316-80.884
          c-12.092-18.227-24.595-37.074-24.595-73.777c0-4.553,3.69-8.244,8.244-8.244s8.244,3.691,8.244,8.244
          c0,31.731,10.124,46.991,21.845,64.662c13.156,19.83,28.065,42.307,28.065,89.999C235.459,336.096,231.769,339.787,227.215,339.787
          z"
      />
      <path
        className={light ? 'wire-on' : 'wire-off'}
        d="M284.785,339.787c-4.554,0-8.244-3.691-8.244-8.244c0-47.692,14.909-70.168,28.065-89.999
          c11.721-17.67,21.845-32.931,21.845-64.662c0-4.553,3.69-8.244,8.244-8.244c4.554,0,8.244,3.691,8.244,8.244
          c0,36.703-12.503,55.55-24.595,73.777c-13.02,19.626-25.316,38.164-25.316,80.884C293.03,336.096,289.34,339.787,284.785,339.787z"
      />
    </g>
    {light && (
      <path
        style={{ fill: '#FFFFFF' }}
        d="M282.882,214.907c-2.496,0-4.86-1.132-6.425-3.078l-20.456-25.438l-20.456,25.438
          c-1.565,1.946-3.928,3.078-6.425,3.078l0,0c-2.496,0-4.86-1.132-6.425-3.078l-26.88-33.426c-2.854-3.548-2.29-8.738,1.259-11.592
          c3.549-2.853,8.738-2.29,11.592,1.259l20.455,25.438l20.456-25.438c1.565-1.946,3.928-3.078,6.425-3.078
          c2.497,0,4.86,1.132,6.425,3.078l20.456,25.438l20.455-25.438c2.854-3.547,8.042-4.112,11.592-1.259
          c3.548,2.854,4.111,8.043,1.259,11.592l-26.88,33.426C287.741,213.775,285.378,214.907,282.882,214.907z"
      />
    )}
    <path
      style={{ opacity: '0.1', enableBackground: 'new' }}
      d="M190.877,310.851c3.37,6.653,5.362,13.439,5.362,20.692h119.526 c0-7.254,1.992-14.041,5.362-20.692H190.877z"
    />
    <circle
      style={{ fill: '#5C6670' }}
      cx="256.004"
      cy="491.738"
      r="20.264"
    />
    <path
      style={{ opacity: '0.1', enableBackground: 'new' }}
      d="M256.001,471.473c-11.194,0-20.264,9.072-20.264,20.264 c0,0.897,0.078,1.774,0.191,2.64c6.329,2.027,13.071,3.131,20.072,3.131c7.001,0,13.743-1.105,20.072-3.131 c0.112-0.866,0.191-1.743,0.191-2.64C276.263,480.545,267.193,471.473,256.001,471.473z"
    />
    <circle
      style={{ fill: '#333E48' }}
      cx="256.004"
      cy="431.741"
      r="59.997"
    />
    <path
      style={{ opacity: '0.1', enableBackground: 'new' }}
      d="M256.001,471.473c-11.194,0-20.264,9.072-20.264,20.264 c0,0.897,0.078,1.774,0.191,2.64c6.329,2.027,13.071,3.131,20.072,3.131c7.001,0,13.743-1.105,20.072-3.131 c0.112-0.866,0.191-1.743,0.191-2.64C276.263,480.545,267.193,471.473,256.001,471.473z"
    />
    <path
      style={{ fill: '#5C6670' }}
      d="M341.083,411.442c0,11.164-9.135,20.299-20.298,20.299H191.216c-11.164,0-20.299-9.134-20.299-20.299 v-63.054c0-11.164,9.135-20.299,20.299-20.299h129.569c11.163,0,20.298,9.135,20.298,20.299V411.442z"
    />
    <g>
      <rect x="170.922" y="352.232" style={{ fill: '#333E48' }} width="170.164" height="16.489" />
      <rect x="170.922" y="391.112" style={{ fill: '#333E48' }} width="170.164" height="16.489" />
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
)

export default LightBulb
