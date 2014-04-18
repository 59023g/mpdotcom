/*
'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Thing Schema

var GameSchema = new mongoose.Schema({
  game: {
    location: String,
    date: Date, //date.now?
    team: [{
      name: String,
      origin: String,
      player: [String, String, String],
      score: [{
        value: Number,
        time: Number,
        whoScored: String
      }]
    }]
  }
}); 

var TeamSchema = new mongoose.Schema({
  team: String,
  origin: String, //three letters?
  player: [String, String, String]
});


/* virtuals shorten queries

personSchema.virtual('name.full').get(function () {
  return this.name.first + ' ' + this.name.last;
});
*/

/**
 * Methods
 
GameSchema.methods = {
  /**
   * Authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword;
  },

  /**
   * Make salt
   *
   * @return {String}
   * @api public
   
  makeSalt: function() {
    return crypto.randomBytes(16).toString('base64');
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String}
   * @api public
   
  encryptPassword: function(password) {
    if (!password || !this.salt) return '';
    var salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
  }
};

// A model is a class with which we construct documents.
var Game = mongoose.model('Games', GameSchema);

Game.remove({}, function(err) {
  if (err) {
    console.log('error deleting old data.');
  }
});

var johndoe = new Game({
  game: {
    location: 'San Francisco',
    date: new Date,
    team: [{
      name: 'MP',
      origin: 'SF',
      player: ['MP', 'MP', 'MP'],
      score: [{
        value: 1,
        time: 234,
        whoScored: 'MP'
      }]
    }, {
      name: 'MP2',
      origin: 'SF',
      player: ['MP2', 'MP2', 'MP2'],
      score: [{
        value: 2,
        time: 4,
        whoScored: 'MP2'
      }]
    }]
  }
});


johndoe.save(function(err) {
  if (err) console.log('Error on save!')
});

/**
 * Validations
 
GameSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');
*/
