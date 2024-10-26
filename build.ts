await Bun.build({
    entrypoints: ["./index.tsx"],
    outdir: "./build",
    splitting: false, // default
    sourcemap: "inline",
    minify: true,
    target: "bun",
  });
  