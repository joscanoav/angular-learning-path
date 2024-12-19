interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const song = 'New Song';


const { 
    song:anotherSong, 
    songDuration:duration, 
    details
} = audioPlayer;

const { author } = details;


//console.log('Song ', anotherSong);
//console.log('Duration ', duration);
//console.log('Author ', author);

const [p1, p2, trunks = 'Not Found']: string[] = ['Goku','Vegeta'];

console.error('Personaje 3:', trunks );

// objetos con llaves y arreglos con corchetes

export{};
