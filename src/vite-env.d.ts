import React from 'react';

/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.jpg';
declare module '*.png';
declare module '*.woff2';
declare module '*.woff';
declare module '*.ttf';
declare module '*.svg' {
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
