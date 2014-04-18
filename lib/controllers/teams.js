'use strict';

var mongoose = require('mongoose'),
  Team = mongoose.model('Team');


/**
 * Module dependencies.

var mongoose = require('mongoose'),
   Article = mongoose.model('Article'),
    _ = require('lodash');
 */


exports.list = function(req, res) {
  Team.find(function(err, teams) {
    res.send(teams);
  });
};


exports.fuk = function(req, res) {
  return Team.find(function(err, teams) {
    if (!err) {
      return res.json(teams);
    } else {
      return res.send(err);
    }
  });
};

/**
 * Find team by id
 */
exports.team = function(req, res, next, id) {
  Team.load(id, function(err, team) {
    if (err) return next(err);
    if (!team) return next(new Error('Failed to load team ' + id));
    req.team = team;
    next();
  });
};

/**
 * Create a team
 */

exports.create = function(req, res, next) {
  new Team({
    name: req.body.name,
    city: req.body.city,
    players: {
      p1: req.body.players.p1,
      p2: req.body.players.p2,
      p3: req.body.players.p3
    }
  }).save(function(err) {
    if (err) {
      return "error update";
    } else {
      console.log("Success");
    }
  });

};

/**
 * Update a team
 */
exports.update = function(req, res) {
  var team = req.team;

  //team = _.extend(team, req.body);

  team.save(function(err) {
    if (err) {
      return "error update --lodash";
    } else {
      res.jsonp(team);
    }
  });
};

/**
 * Delete a team
 */
exports.destroy = function(req, res) {
  var team = req.team;

  team.remove(function(err) {
    if (err) {
      return "error destroy";
    } else {
      res.json(team);
    }
  });
};



exports.show = function(req, res) {
  res.json(req.name);
};

/**
 * Show a team
exports.show = function(req, res, next) {
  var teamId = req.params.id;

  Team.find(teamId, function(err, team) {
    if (err) return next(new Error('Failed to load Team'));

    if (team) {
      res.send({
        info: team.info
      });
    } else {
      res.send(404, 'USER_NOT_FOUND');
    }
  });
};
 */

/*
exports.list = function(req, res) {
  return Team.find(function (err, teams) {
    if (!err) {
      return res.json(teams.name);
    } else {
      return res.send(err);
    }
  });
}
*/

/**
 * List of Teams
 */
exports.all = function(req, res) {
  Team.find().sort('-createdAt').populate('name', 'city').exec(function(err, teams) {
    if (err) {
      res.render('error', {
        status: 500
      });
    } else {
      res.jsonp(teams);
    }
  });
};
