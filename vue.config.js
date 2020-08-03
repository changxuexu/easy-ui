const fs = require('fs')
const path = require("path")
const join = path.join

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

// function getEntries (path) {
//   let files = fs.readdirSync(resolve(path));
//   const entries = files.reduce((ret, item) => {
//     const itemPath = join(path, item)
//     const isDir = fs.statSync(itemPath).isDirectory();
//     if (isDir) {
//       ret[item] = resolve(join(itemPath, 'index.js'))
//     } else {
//       const [name] = item.split('.')
//       ret[name] = resolve(`${itemPath}`)
//     }
//     return ret
//   }, {})
//   return entries
// }

/**
 * 判断刚路径是否含有index.js
 * @param {String} dir 
 */
function hasIndexJs (dir) {
  let dirs = [];
  try {
    dirs = fs.readdirSync(dir);
  } catch (e) {
    dirs = null;
  }
  return dirs && dirs.includes('index.js');
}

/**
 * 获取指定入口和入口下包含index.js的文件夹的路径
 * @param {String} entryDir 
 */
const getPath = function (entryDir) {
  //fs.readdirSync返回一个包含“指定目录下所有文件名称”的数组对象
  let dirs = fs.readdirSync(entryDir);
  const result = {
    index: entryDir
  };
  //path.resolve()方法可以将路径或者路径片段解析成绝对路径
  //path.resolve('/foo', '/bar', 'baz') -> /bar/baz
  dirs = dirs.filter(dir => {
    return hasIndexJs(path.resolve(entryDir, dir));
  }).forEach(dir => {
    result[dir] = path.resolve(entryDir, dir);
  });
  return result;
}

const entrys = getPath(path.resolve(__dirname, './packages'));

// console.log("entrys=", entrys)

// 开发环境配置
const devConfig = {
  lintOnSave: false,
  pages: {
    index: {
      //page 的入口
      entry: "examples/main.js",
      //模板来源
      template: "public/index.html",
      //在 dist/index.html 的输出
      filename: "index.html"
    }
  },
  chainWebpack: config => {
    // 扩展 webpack 配置，使 packages 加入编译
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        return options
      })
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages')
      }
    }
  }
}

//生成环境配置
const buildConfig = {
  lintOnSave: false,
  //避免在生产环境中用F12开发者工具在Sources中看到源码
  productionSourceMap: false,
  css: {
    sourceMap: true,
    extract: {
      filename: 'style/[name].css'
    }
  },
  configureWebpack: {
    entry: {
      // ...getEntries('packages'),
      ...entrys
    },
    output: {
      filename: '[name]/index.js',
      libraryTarget: 'commonjs2',
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    //删除Vue CLI3原先打包编译的一些无用功能
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')

    // 处理css字体文件
    config.module
      .rule('fonts')
      .use('url-loader')
      .tap(option => {
        option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]'
        return option
      })
  },
  outputDir: 'lib'
}

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;