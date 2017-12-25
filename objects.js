var playlist = {artist: "Carman", title: "Champion"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  console.log(playlist);
  delete playlist.artistName;
  console.log(playlist);
}