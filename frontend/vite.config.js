import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss'; // Import Tailwind CSS
import autoprefixer from 'autoprefixer'; // Import Autoprefixer

export default defineConfig({
    plugins: [react(), tailwindcss()],


});