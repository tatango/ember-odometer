module.exports = {
  description: 'ember-odometer',
  afterInstall: function(options) {
    return this.addBowerPackageToProject('odometer', '0.4.7');
  }
};
