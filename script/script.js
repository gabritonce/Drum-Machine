


const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {

    let pianoContainer = document.getElementsByClassName("container-drums");
    const base = "./audio/";
    const displayElement = document.getElementById("display");
    for (let index = 1; index <= 12; index++) {
        let div = document.createElement("div");
        div.classList.add("drum", index <= 8 ? "black-key" : "white-key");
        const number = index <= 9 ? "0" + index : index;
        div.addEventListener("click", () => {
            const soundName = `${base}kick${number}.wav`; // Modifica questo con il nome del suono corrente
            new Audio(soundName).play();
            displayElement.textContent = `${soundName}`.toUpperCase();
        })
        pianoContainer[0].appendChild(div);
    }



    let pianoContainer2 = document.getElementsByClassName("container-drums2");
    const base2 = "./audio/";
    const displayElement2 = document.getElementById("display");
    for (let index = 13; index <= 16; index++) {
        let div = document.createElement("div");
        div.classList.add("drum", index <= 8 ? "black-key" : "green-key");
        const number2 = index <= 9 ? "0" + index : index;
        div.addEventListener("click", () => {
            const soundName2 = `${base2}clap${number2}.wav`; // Modifica questo con il nome del suono corrente
            new Audio(soundName2).play();
            displayElement2.textContent = `${soundName2}`.toUpperCase();
        })
        pianoContainer2[0].appendChild(div);
    }


    let pianoContainer3 = document.getElementsByClassName("container-drums3");
    const base3 = "./audio/";
    const displayElement3 = document.getElementById("display");
    for (let index = 17; index <= 20; index++) {
        let div = document.createElement("div");
        div.classList.add("drum", index <= 8 ? "black-key" : "yellow-key");
        const number3 = index <= 9 ? "0" + index : index;
        div.addEventListener("click", () => {
            const soundName3 = `${base3}hat${number3}.wav`; // Modifica questo con il nome del suono corrente
            new Audio(soundName3).play();
            displayElement3.textContent = `${soundName3}`.toUpperCase();
        })
        pianoContainer3[0].appendChild(div);
    }


    let pianoContainer4 = document.getElementsByClassName("container-drums4");
    const base4 = "./audio/";
    const displayElement4 = document.getElementById("display");
    for (let index = 21; index <= 24; index++) {
        let div = document.createElement("div");
        div.classList.add("drum", index <= 8 ? "black-key" : "blue-key");
        const number4 = index <= 9 ? "0" + index : index;
        div.addEventListener("click", () => {
            const soundName4 = `${base4}perc${number4}.wav`; // Modifica questo con il nome del suono corrente
            new Audio(soundName4).play();
            displayElement4.textContent = `${soundName4}`.toUpperCase();
        })
        pianoContainer4[0].appendChild(div);
    }

});

const keyToNoteMap = {
    '49': 'kick09',  // Tasto '1'
    '50': 'clap13',  // Tasto '2'
    '51': 'hat17',  // Tasto '3'
    '52': 'perc21',  // Tasto '4'
    '53': 'kick10',  // Tasto '5'
    '54': 'clap14',  // Tasto '6'
    '55': 'hat18',  // Tasto '7'
    '56': 'perc22',  // Tasto '8'
    '57': 'kick11',   // Tasto '9'
    '48': 'clap15',   // Tasto '0'
    '81': 'hat19',  // Tasto 'Q'
    '87': 'perc23',  // Tasto 'W'
    '69': 'kick12',  // Tasto 'E'
    '82': 'clap16',  // Tasto 'R'
    '84': 'hat20',  // Tasto 'T'
    '89': 'perc24',  // Tasto 'Y'
};


document.addEventListener('keydown', (event) => {
    const key = event.keyCode.toString();
    const soundName = keyToNoteMap[key];
    if (soundName) {
        const audioElement = new Audio(`./audio/${soundName}.wav`);
        audioElement.play();

        // Aggiorna il display con il nome del suono corrente
        const displayElement = document.getElementById("display");
        displayElement.textContent = soundName.toUpperCase();
    }
});

/*const playButton2 = document.getElementById("play");
let isPlaying = false;

playButton.addEventListener("click", () => {
    if (isPlaying) {


        document.querySelectorAll('.container-drums, .container-drums2, .container-drums3, .container-drums4').forEach(container => {

            container.innerHTML = '';

            playButton.classList.remove('playing');


        });
    } else {

        playButton.classList.add('playing');
    }

    isPlaying = !isPlaying;
});*/


const playButton2 = document.getElementById("play"); // Assumo che tu abbia dichiarato il pulsante con l'ID "playButton2"
let isPlaying = false;

playButton2.addEventListener("click", () => {
    const displayElement = document.getElementById("display");
    const titoloElement = document.getElementById("titolo");
    const nomeElement = document.getElementById("nome");

    if (isPlaying) {

        document.querySelectorAll('.container-drums, .container-drums2, .container-drums3, .container-drums4').forEach(container => {

            container.innerHTML = '';

            playButton.classList.remove('playing');


        });




        // Sostituisci il contenuto dell'elemento con l'ID "display"
        displayElement.textContent = '';

        // Rimuovi la classe 'playing' dal pulsante
        playButton2.classList.remove('playing');

        // Reimposta lo stato di riproduzione su false
        isPlaying = false;
    } else {

        // Sostituisci il contenuto dell'elemento con l'ID "display"
        displayElement.textContent = 'SELECT A DRUM';

        // Aggiungi la classe 'playing' al pulsante
        playButton2.classList.add('playing');

        // Imposta lo stato di riproduzione su true
        isPlaying = true;
    }
});






