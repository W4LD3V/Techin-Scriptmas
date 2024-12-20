const morseAlphabet = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
};

function convertToMorse(text) {
    let morseText = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        if (morseAlphabet.hasOwnProperty(char)) {
            morseText += morseAlphabet[char] + ' ';
        } else {
            morseText += char + ' ';
        }
    }
    return morseText.trim();
}

function elfMorse(morse) {
    let elfMorseText = [];
    for (let i = 0; i < morse.length; i++) {
        const char = morse[i];
        if (char === '.') {
            elfMorseText.push('ho ');
        } else if (char === '-') {
            elfMorseText.push('hoho ');
        }
    }
    return elfMorseText.join('');
}

const text = "MERRY";
const morseCode = convertToMorse(text);
const elfMorseCode = elfMorse(morseCode.replace(/\s+/g, ''));
console.log(elfMorseCode);
