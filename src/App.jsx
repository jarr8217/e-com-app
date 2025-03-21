import { useState } from 'react'
import './App.css'
import BeatList from './BeatList.jsx'
import Header from './Header.jsx'

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBeats, setFilteredBeats] = useState([]);
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
            image: 'https://fakeimg.pl/200x200',
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
            image: 'https://fakeimg.pl/200x200',
            tags: ['grime, dark, gritty'],
            description: 'A dark and gritty grime beat to get you hyped.',
        },
        {
            id: 3,
            title: 'Jersey Club Bounce',
            artist: 'Club Kings',
            genre: 'Jersey Club',
            price: 5.99,
            /* audioPreview: This is to be added later.
            audioFull::
            bpm::
            key:
            stock:
            */
            image: 'https://fakeimg.pl/200x200',
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
            image: 'https://fakeimg.pl/200x200',
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
            image: 'https://fakeimg.pl/200x200',
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
            image: 'https://fakeimg.pl/200x200',
            tags: ['reggae, chill, laid back'],
            description: 'A laid back reggae beat to chill out to.',
        },
        {
            id: 7,
            title: 'DR future',
            artist: 'DR boys',
            genre: 'Dembow',
            price: 8.99,
            /* audioPreview: This is to be added later.
            audioFull::
            bpm::
            key:
            stock:
            */
            image: 'https://fakeimg.pl/200x200',
            tags: ['dembow, high energy, party'],
            description: 'A high energy dembow beat to get the party started.',
        },
        {
            id: 8,
            title: 'dembow Vibes',
            artist: 'Ritmo Caliente',
            genre: "dembow",
            price: 15.00,
            /* audioPreview:
            audioFull::
            bpm::
            key:
            stock:
            */
            image: 'https://fakeimg.pl/200x200',
            tags: ['boom bap, classic, hip hop'],
            description: 'A classic dembow beat to get you moving.',
        },
        {
            id: 9,
            title: 'Salsa Paradise',
            artist: 'Sabor Latino',
            genre: "Salsa",
            price: 25.99,
            /* audioPreview:
            audioFull::
            bpm::
            key:
            stock:
            */
            tags: ['salsa, latin, dance'],
            image: 'https://fakeimg.pl/200x200',
            description: 'Salsa beat that will make your soul dance.',
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
            image: 'https://fakeimg.pl/200x200',
            tags: ['reggaeton, party, high energy'],
            description: 'A fiery reggaeton beat to get the party started.',
          },
          {
            id: 11,
            title: 'Reggaeton Rhythm',
            artist: 'Sonido Tropical',
            genre: "Reggaeton",
            price: 10.00,
            /* audioPreview:
            audioFull::
            bpm::
            key:
            stock:
            */
            image: 'https://fakeimg.pl/200x200',
            tags: ['salsa, latin, dance'],
            description: 'A energetic Reggaeton beat to get you moving.',
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
           tags: ['merengue, latin, dance'],
            image: 'https://fakeimg.pl/200x200',
            description: 'A lively merengue beat to get you moving.',
        },
    ];
    // State to store the list of beats
    const [beats, setBeats] = useState(beatList);

    // Handle search logic
    const handleFiltered = (beats, searchTerm) => {
        const lowerCaseTerm = searchTerm.toLowerCase();

        const filtered = beats.filter((beat) => 
            beat.genre.toLowerCase().includes(lowerCaseTerm) ||
            beat.title.toLowerCase().includes(lowerCaseTerm) ||
            beat.artist.toLowerCase().includes(lowerCaseTerm) ||
            beat.id.toString().includes(lowerCaseTerm) ||
            beat.tags.join('').toLowerCase().includes(lowerCaseTerm)
        );

        setFilteredBeats(filtered);
    };   
    
    // handles text input change
    const handleFilter = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    }

    // Triggers the search when the button is clicked
    const handleSearch = () => {
        handleFiltered(beats, searchTerm);
    }

    // Triggers search when the enter key is pressed
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="App">
            <Header handleFilter={handleFilter} handleKeyPress={handleEnter} handleSearch={handleSearch} searchTerm={searchTerm} />
            <BeatList beats={filteredBeats.length > 0 ? filteredBeats : beats} />
        </div>
    )
};

export default App;

