# svg-compressor

A simple SVG compressor using [SVGO](https://github.com/svg/svgo) and [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin).

## Installation

1. Clone the repository
2. Open a Terminal/Command prompt at the cloned folder, and run:

```
npm install
```

## Usage

1. Place uncompressed SVG files in an _/uncompressed/_ folder in the root
2. Open a Terminal/Command prompt at the cloned folder, and run:

```
npm run compress
```

This will run the Gulp SVG compression task. Alternatively, you can run the Gulp task directly with:

```
gulp compress
```
3. After the task has finished, two files for each uncompressed SVG file will be exported to the _/compress/_ folder:
    1. A compressed SVG file with no path merges (under the _/normal/_ folder)
    2. A compressed SVG file with merged paths (under the _/merged/_ folder)
