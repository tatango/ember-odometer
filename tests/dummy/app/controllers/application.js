import Ember from 'ember';

export default Ember.Controller.extend({
  counter: 0,
  startIncrementingCounter: function(){
    var controller = this;
    window.setInterval(function(){
      Ember.run(controller, 'incrementProperty', 'counter', 10);
    }, 3000);
  }.on('init')
});
