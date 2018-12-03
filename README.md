# Webpack image size loader
[![NPM](https://nodei.co/npm/img-size-loader.png)](https://nodei.co/npm/img-size-loader/)

Webpack image size loader. This loader

- Returns size info only
- Does not emit file
- Has no side effect
- Is totally compatible with any other loaders (e.g. [file-loader](https://www.npmjs.com/package/file-loader) [url-loader](https://www.npmjs.com/package/url-loader)). Check usage for detail

## Usage


- Install With `yarn`: `yarn add -D img-size-loader`
- Or install with `npm`: `npm install --save-dev img-size-loader`
- It is highly recommended to overloading other loaders by preceding inline loader with punctuation(`!`)
- Import example

```javascript
//leading punctuation (!)
//otherwise, will conflict with other loaders
import ImageWithSize from '!img-size-loader!./log.png'
//assume that '*.png' is loaded via `url-loader`, `file-loader`, ... by default
import ImageWithoutSize from './log.png'

console.log(ImageWithSize)
//output: { width: 1379, height: 991, type: 'png' }
console.log(ImageWithoutSize)
//output: http://127.0.0.1:8080/bundles/price_8a330fe5105f76b9a439f58cce44572c.png
```

## Dependencies
- [image-size](https://www.npmjs.com/package/image-size) package
