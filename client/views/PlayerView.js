// PlayerView.js - Defines a backbone view class for the music player.
//  Here when the song ends (triggered), then dequeue, and play the 
// next song
// Call setSong, get access to songs queue, 
var PlayerView = Backbone.View.extend({


  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video

  el: '<audio controls autoplay />',

  events: {
    'ended' : 'ended'
  },

  //event lilsteners can only be attached to child elements of el

  initialize: function() {
    // this.$el.on('ended', (function() {
    //   this.model.trigger('ended');
    // }).bind(this)
    // );
  },

  ended: function () {
    // this.trigger('ended', this);
    // dequeue this song
    this.model.dequeue();
    debugger;
    // play next song  
    this.model.play();
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
