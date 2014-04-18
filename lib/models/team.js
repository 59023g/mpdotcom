'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TeamSchema = new Schema({
  games: {

  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  players: {
    p1: {
      type: String,
      default: '',
      trim: true,
      required: true
    },
    p2: {
      type: String,
      default: '',
      trim: true,
      required: true
    },
    p3: {
      type: String,
      default: '',
      trim: true,
      required: true
    }
  },
  city: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  name: {
    type: String,
    default: '',
    trim: true,
    required: true
  }

});

TeamSchema
  .virtual('info')
  .get(function() {
    return {
      'name': this.name,
      'players': this.players
    };
  });

mongoose.model('Team', TeamSchema);

/*
Team.schema.path('name').validate(function (value, respond) {
  Team.findOne({ name: value }, function (err, user) {
    if (user) respond(false);
  });
}, 'This name is Already registered');


Team.remove({}, function(err) {
  if (err) {
    console.log('error deleting old data.');
  }
});
*/
/*
var johndoe = new Team({
  players: [{
    p1: 'MP',
    p2: 'Pierre',
    p3: 'Sam'
  }],
  city: 'Madison',
  name: 'Mad Bounce'
});


johndoe.save(function(err) {
  if (err) console.log('Error on save!');
});
*/