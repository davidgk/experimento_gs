require('esbuild').buildSync({
    entryPoints: ['src/main.js'],
    outdir: 'dist',
    bundle: true,
    format: 'esm', // 🔥 Evita la encapsulación en una variable
    banner: {js: 'globalThis.GlobalFunctions = globalThis.GlobalFunctions || {};'},
    platform: 'browser',
    target: 'esnext'
});