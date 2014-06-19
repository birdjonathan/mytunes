// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	
  },

  // Make an add function, when it is the only song in song queue, call play first function  
  // If there is only one song in the queue, play it otherwise 

	playFirst: function() {
		this.at(0).play();
	}


});