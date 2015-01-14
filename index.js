/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-odometer',
  included: function(app) {
    app.import({
      development: app.bowerDirectory + '/odometer/odometer.js',
      production: app.bowerDirectory + '/odometer/odometer.min.js'
    });
    var theme = 'default';
    if (app.odometer && app.odometer.theme) {
     theme = app.odometer.theme;
    }
    app.import(app.bowerDirectory + '/odometer/themes/odometer-theme-' + theme + '.css');
  }
};
