// playlist format
// {
//     playlist_name: [
//         {
//             song_name: 'song_name',
//             song_artist: ['artist1', 'artist2'],
//             url: 'url',
//             playback_time: 'playback_time'
//         }
//      ]
const playlist = {}

// add playlist
function addPlaylist(playlist_name) {
    // create new playlist record
    playlist[playlist_name] = []
    return playlist[playlist_name];
}

// add song to playlist
function addSong(playlist_name, song_name, song_artist, url) {
    // add song to playlist
    playlist[playlist_name].push({
        song_name: song_name,
        song_artist: song_artist,
        url: url,
        playback_time: 0
    })
    return playlist[playlist_name];
}
// play song in playlist
function playSong(playlist_name, song_name) {
    // play song in playlist
    for (var i = 0; i < playlist[playlist_name].length; i++) {
        if (playlist[playlist_name][i].song_name == song_name) {
            ++playlist[playlist_name][i].playback_time ;
            return playlist[playlist_name][i];
        }
    }
    return null;
}

// get all playlist
function getAllPlaylist() {
    // get all playlist
    return Object.keys(playlist);
}

// get list of song
function getSongList(playlist_name, is_sorted) {
    // get list of song
    if (is_sorted) {
        playlist[playlist_name].sort(function(a, b) {
            return a.playback_time - b.playback_time;
        });
    }
    return playlist[playlist_name];
}

// export
module.exports = {
    addPlaylist: addPlaylist,
    addSong: addSong,
    playSong: playSong,
    getAllPlaylist: getAllPlaylist,
    getSongList: getSongList
}