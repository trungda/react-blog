module.exports = {
    entry: {
      index: ["./public/scripts/App.js"],
      post: ["./public/scripts/Post.js"],
    },
    output: {
        path: "./public/assets",
        filename: "[name].entry.js"
    },
    module: {
    	loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.js$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
  resolve: {extensions: ['', '.js']},
};
