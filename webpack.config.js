
module.exports = {
    output: {
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            },
            //для старых скриптов
            {
                test: /\.exec\.js$/,
                use: [ 'script-loader' ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.pug$/,
                use: ['pug-plain-loader']
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                loaders: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img/content'
                }
            },
        ]
    },
    resolve: {
        alias: {
        },
    },
    //для CDN
    externals: {
        jquery: 'jQuery'
    },

    //для локальных модулей


    devtool: "eval",
    plugins: [
        //new $.webpack.NoEmitOnErrorsPlugin()
        //new $.webpack.ProgressPlugin({
        //чтобы не включать в каждом модуле импорт библиотеки, можно объявить глобальную переменную тут
        //только для локальных модулей (например если jQuery лежит локально)
        //$: 'путь к файлу jquery'
        //после этого можно в каждом модуле не писать import $ from 'jquery'
        //})
    ]
};