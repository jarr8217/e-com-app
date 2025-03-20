import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  function App() {
      const beatList = [
          {
              id: 1,
              title: 'Midnight Drive',
              artist: 'Lunar Beats',
              genre: 'Lo-Fi HipHop',
              price: 10.00,
           /* audioPreview: This is to be added later.
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['chill, lo-fi, hip hop'],
              description: 'A chill lo-fi hip hop beat to relax to.',
  
  
          },
          {
              id: 2,
              title: 'Grime Time',
              artist: 'Urban Legends',
              genre: 'Grime',
              price: 12.95,
           /* audioPreview: This is to be added later.
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['grime, dark, gritty'],
              description: 'A dark and gritty grime beat to get you hyped.',
          },
          {
              id: 3,
              title: 'Jersey Club Bounce',
              artist: 'Club Kings',
              genre: 'Jersey Club',
              price: 5.00,
           /* audioPreview: This is to be added later.
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['jersey club, high energy, party'],
              description: 'A high energy Jersey Club beat to get the party started.',
          },
          {
              id: 4,
              title: 'Hyperpop Surge',
              artist: 'Pixel Pulse',
              genre: "Hyperpop",
              price: 9.99,
           /* audioPreview: This is to be added later.
              audioFull::
              bpm::
              key:
              tags:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['hyperpop, futuristic, electronic'],
              description: 'A futuristic hyperpop beat to take you to another dimension.',
          },
          {
              id: 5,
              title: 'Cinematic Score',
              artist: 'Epic Soundscapes',
              genre: "Cinematic",
              price: 13.99,
           /* audioPreview:  This is to be added later.
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['cinematic, epic, orchestral'],
              description: 'An epic cinematic score to set the mood for your next project.',
          },
          {
              id: 6,
              title: 'Reggae Riddin',
              artist: 'Island Vibes',
              genre: "Reggae",
              price: 22.99,
           /* audioPreview: This is to be added later.
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['reggae, chill, laid back'],
              description: 'A laid back reggae beat to chill out to.',
          },
          {
              id: 7,
              title: 'Future Bass Drop',
              artist: 'Bass Junkies',
              genre: 'Future Bass',
              price: 8.50,
           /* audioPreview: This is to be added later.
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['future bass, high energy, party'],
              description: 'A high energy future bass beat to get the party started.',
          },
          {
              id: 8,
              title: 'Golden Era',
              artist: 'Vintage Vibes',
              genre: "Boom Bap",
              price: 15.00,
           /* audioPreview:
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['boom bap, classic, hip hop'],
              description: 'A classic boom bap beat to take you back to the golden era of hip hop.',
          },{
              id: 9,
              title: 'Trap Soal Serenity',
              artist: 'Soulful Sounds',
              genre: "Trap soul",
              price: 25.99,
           /* audioPreview:
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['trap soul, soulful, chill'],
              description: 'A soulful trap beat to set the mood for your next project.',
          },
          {
              id: 10,
              title: 'Reggaeton Fuego',
              artist: 'Ritmo Caliente',
              genre: 'Reggaeton',
              price: 7.99,
           /* audioPreview:
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['reggaeton, party, high energy'],
              description: 'A fiery reggaeton beat to get the party started.',
          },
          {
              id: 11,
              title: 'Salsa Dura Groove',
              artist: 'Sonido Tropical',
              genre: "Salsa",
              price: 10.00,
           /* audioPreview:
              audioFull::
              bpm::
              key:
              stock:
              */
              image: './assets/300x300.img',
              tags: ['salsa, latin, dance'],
              description: 'A lively salsa beat to get you moving.',
          },
          {
              id: 12,
              title: 'Merengue Madness',
              artist: 'Ritmo Caliente',
              genre: 'Merengue',
              price: 14.99,
           /* audioPreview:
              audioFull::
              bpm::
              key:
              stock:
              */
             image: './assets/300x300.img',
              tags: ['merengue, latin, high energy'],
              description: 'A high energy merengue beat to get the party started.',
          },
      ];
      // State to store the list of beats
      const [beats, setBeats] = useState(beatList);
  
  
      // Filter beats by genre
      const handleFilter = (genre) => {
          const query = genre.toLowerCase().trim();
          const filteredBeats = beatList.gilter((beat) => beat.genre.toLowerCase().includes(query));
     
          setBeats(filteredBeats);
      }
  
  
      return (
          <div className="App">
            <h1>Beat Store</h1>
            <BeatList beats={beats} />      
          </div>
      );
    };
  
  
  
  
  
  
  export default App;
  


