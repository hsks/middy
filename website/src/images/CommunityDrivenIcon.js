import React from 'react';

export default function CommunityDrivenIcon(props) {
  return (
    <svg version={1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" width={48} height={48} {...props}>
      <path fill="#1565C0" d="M25,22h13l6,6V11c0-2.2-1.8-4-4-4H25c-2.2,0-4,1.8-4,4v7C21,20.2,22.8,22,25,22z" />
      <path fill="#2196F3" d="M23,19H10l-6,6V8c0-2.2,1.8-4,4-4h15c2.2,0,4,1.8,4,4v7C27,17.2,25.2,19,23,19z" />
      <g fill="#FFA726">
        <circle cx={12} cy={31} r={5} />
        <circle cx={36} cy={31} r={5} />
      </g>
      <g fill="#607D8B">
        <path d="M20,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z" />
        <path d="M44,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z" />
      </g>
    </svg>
  );
}
