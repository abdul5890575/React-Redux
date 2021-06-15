const songsReducer = () => {
  return [
      { title: 'song1', duration : '4:05'} ,
      { title: 'song2', duration : '4:20'},
      { title: 'song3', duration : '3:15'}
  ]
}

const SelectedSongReducer = (selectedSong = null , action) =>{
    if( action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}