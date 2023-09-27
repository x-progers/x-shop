
module.exports= {
        presets: ["env"],
        plugins: [
            [
              require.resolve('babel-plugin-module-resolver'),
              {
                cwd: 'babelrc',
                extensions: [
                  '.js',
                  '.jsx',
                  '.ts',
                  '.tsx'
                ],
                root: ['src'],
                alias: {
                    "@components": ["src/components/components"],
                    "@constants": ["src/constants/constants"]
                },
              },
            ],
          ]
}