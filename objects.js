var playlist = {artist: "Carman", title: "Champion"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  console.log(playlist);
  console.log(artistName);
  delete playlist.artistName;
  console.log(playlist);
  console.log(artistName);
}