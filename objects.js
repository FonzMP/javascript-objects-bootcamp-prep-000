var playlist = {
  KISS: 'Detroit Rock City'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, [artistName]: songTitle)
}
