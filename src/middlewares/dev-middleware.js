
import path from 'path';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';

import config from '../../webpack.dev.config';

const compiler = webpack(config);
const devConfig = config.devServer;

export default devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats: { colors: true }
});