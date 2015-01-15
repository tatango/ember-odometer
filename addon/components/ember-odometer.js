/* global Odometer */
import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'odometer',
  value: null, // bound via containing template
  duration: 2000, // this should match the css animation time
  animation: null, // 'count' is an option for simpler animation method which just increments the value,
                  // use it when you're looking for something more subtle.
  format: '(,ddd).dd',
  didInsertElement: function(){
    this.od = new Odometer({
      el: this.get('element'),
      value: this.get('value'),
      duration: this.get('duration'),
      format: this.get('format'),
      animation: this.get('animation')
    });
  },
  onChange: function(){
    this.od.update(this.get('value'));
  }.observes('value')
});
