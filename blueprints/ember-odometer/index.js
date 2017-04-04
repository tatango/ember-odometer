module.exports = {
  description: 'ember-odometer',
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('odometer', '0.4.8');
  }
};
