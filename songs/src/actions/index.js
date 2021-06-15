// action creator (form)
export const SelectSong = (song) => {
    return {
        type : 'SONG_SELECTED',
        payload : song
    }
}