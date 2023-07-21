// import from models/playlist.js
var playlists = require('../models/playlists.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // res.send('this is playlist router');
  res.send(playlists.getAllPlaylist());
});

router.get('/:name', function(req, res, next) {
    result = playlists.getSongList(req.params.name, req.query.is_sorted);
    res.send(result);
});

router.post('/', function(req, res, next) {
    // create new playlist record
    result = playlists.addPlaylist(req.body.name);
    res.send('success create playlist');
});

router.post('/:name', function(req, res, next) {
    // add song to playlist
    result = playlists.addSong(req.params.name, req.body.song_name, req.body.song_artist, req.body.url);
    res.send(result);
});

module.exports = router;
