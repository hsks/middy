import React from 'react';

export default function FreeAsInFreedomIcon(props) {
  return (
    <svg version={1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" width={48} height={48} {...props}>
      <rect x={9} y={4} fill="#FBE9E7" width={30} height={40} />
      <g fill="#F4511E">
        <polygon points="30,37 32.8,37 27.8,32 25,34.8 30,39.8" />
        <polygon points="18,37 15.2,37 20.2,32 23,34.8 18,39.8" />
      </g>
      <rect x={15} y={13} fill="#FF8A65" width={18} height={4} />
      <rect x={15} y={20} fill="#FF8A65" width={18} height={2} />
      <path fill="#FF8A65" d="M24,26c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S26.8,26,24,26z M24,34c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S25.7,34,24,34z" />
      <path fill="#FF8A65" d="M8,3v42h32V3H8z M38,40c-1.7,0-3,1.3-3,3H13c0-1.7-1.3-3-3-3V8c1.7,0,3-1.3,3-3h22c0,1.7,1.3,3,3,3V40z" />
    </svg>
  );
}
