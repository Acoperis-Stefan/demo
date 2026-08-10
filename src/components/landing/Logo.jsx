import React from 'react';

const LOGO_URL = 'https://media.base44.com/images/public/6a60f66acdf5f6739fab2588/44e00e271_image9.jpg';

export default function Logo({ className = 'h-10 w-auto' }) {
  const rawId = React.useId();
  const id = `logo-${rawId.replace(/:/g, '')}`;

  return (
    <svg viewBox="0 0 120 60" className={className} style={{ overflow: 'visible' }}>
      <filter id={id}>
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  2 -1 -1 0 0" />
      </filter>
      <image
        href={LOGO_URL}
        crossOrigin="anonymous"
        width="120"
        height="60"
        preserveAspectRatio="xMidYMid meet"
        filter={`url(#${id})`}
      />
    </svg>
  );
}
