/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-odometer',

  included: function(app, parentAddon) {
    let target = (parentAddon || app);
    target.options = target.options || {};

    target.import({
      development: target.bowerDirectory + '/odometer/odometer.js',
      production: target.bowerDirectory + '/odometer/odometer.min.js'
    });

    let theme = 'default';

    if (target.options.odometer && target.options.odometer.theme) {
     theme = target.options.odometer.theme;
    }

    target.import(target.bowerDirectory + '/odometer/themes/odometer-theme-' + theme + '.css');

    return this._super.included.apply(this, arguments);
  }
};
