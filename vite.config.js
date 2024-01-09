//import { defineConfig } from 'vite';
//import react from '@vitejs/plugin-react';
//
//// https://vitejs.dev/config/
//export default defineConfig({
//  plugins: [react()],
//  esbuild: {
//    jsxFactory: 'React.createElement',
//    jsxFragment: 'React.Fragment',
//    reactJsx: 'react',
//  },
//});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // SS 1.6.24 set to the root to remove error
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
});