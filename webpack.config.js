let path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"production",
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"bundle")
    },
    plugins:[
        // htmlWebpackPlugin插件主要作用是将src目录下面的html打包到dist目录下面
        // 在src下面的html文件不用主动引用js文件，该插件会在打包完成以后主动引用打包生成的js文件
        new htmlWebpackPlugin({
            template:"./src/index.html",   //将哪个文件打包到dist目录下面
            filename:"index.html",    //打包生成的html文件名
            minify:{
                removeAttributeQuotes:true,  //打包后的html文件去掉双引号
                collapseWhitespace:true,   //折叠行
            },
            hash:true   //html引用的js文件名称带hast值
        })
    ],
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",  //该loader将ES6转化为ES5
                    options:{
                        presets:["@babel/preset-env"],  //ES6转化为ES5
                        // plugins:["@babel/plugin-proposal-class-properties"] //ES7转化为ES5
                        "plugins": [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                            "@babel/plugin-transform-runtime",
                            "@babel/plugin-syntax-dynamic-import"
                        ]
                    }
                },
                include:path.resolve(__dirname,"src"),  //默认会转化所以的js文件，这里是包括src下的文件
                exclude:/node_module/   //排除node_module下面的文件
            }
        ]
    }
}