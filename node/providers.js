const { appConfiguration } = require('./appConfiguration');
const { environmentUtils } = require('./environmentUtils');
const { errorHandlerWithOptions, errorHandler } = require('./errorHandler');
const {
  loggerWithOptions,
  logger,
  appLoggerWithOptions,
  appLogger,
} = require('./logger');
const { packageInfoProvider } = require('./packageInfo');
const { pathUtils, pathUtilsWithHome } = require('./pathUtils');
const { rootRequireProvider } = require('./rootRequire');

module.exports = {
  appConfiguration,
  environmentUtils,
  errorHandlerWithOptions,
  errorHandler,
  loggerWithOptions,
  logger,
  appLoggerWithOptions,
  appLogger,
  packageInfo: packageInfoProvider,
  pathUtils,
  pathUtilsWithHome,
  rootRequire: rootRequireProvider,
};
