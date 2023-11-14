// Filename: complexCode.js
// Description: Complex code showcasing a music playlist application

// Define the Song class for storing the song details
class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  play() {
    console.log(`Playing: ${this.artist} - ${this.title}`);
  }
}

// Define the Playlist class for managing a collection of songs
class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(song) {
    const index = this.songs.indexOf(song);
    if (index !== -1) {
      this.songs.splice(index, 1);
    }
  }

  play() {
    console.log(`Playing Playlist: ${this.name}`);
    for (const song of this.songs) {
      song.play();
    }
  }
}

// Create some song objects
const song1 = new Song("Bohemian Rhapsody", "Queen", 355);
const song2 = new Song("Hotel California", "Eagles", 397);
const song3 = new Song("Stairway to Heaven", "Led Zeppelin", 481);

// Create a new playlist
const playlist = new Playlist("Classic Rock");

// Add songs to the playlist
playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);

// Play the playlist
playlist.play();