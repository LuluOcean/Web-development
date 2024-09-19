// A simple caaser cipher encryption code. 

let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ .,/!@#$%^&*()=+-''abcdefghijklmnopqrstuvwxyz()[]{}";
let text = "This is a JavaScript file shhh! Don't tell nobody.";
let key = 3;                             // secret key used to cipher the given text
let ciphered_text = '';
let deciphered_text = '';
let newPosition = [];
let DePosition = [];


function cipher(text, key) {             //function find postion of each letter of the text to cipher, referencing from char
    for (var i = 0; i < text.length; i++) {        
        let pos = char.indexOf(text[i]);
        let newPos = (pos + key) % char.length;
        newPosition.push(newPos);
    }
    Ciphered_Text()
}

function Ciphered_Text() {               // Returns the encrypted text
    for (var j = 0; j < newPosition.length; j++) {
        ciphered_text += char[newPosition[j]];
    }
    return console.log("Ciphered Text:", ciphered_text)
}

function decipher(ciphered_text, key) {
    for (var i = 0; i < ciphered_text.length; i++){
        var pos = char.indexOf(ciphered_text[i]);
        var newPos = (pos - key) % char.length;

        DePosition.push(newPos);
    }
    Deciphered_Text()    
}

function Deciphered_Text() {
    for (var j = 0; j < DePosition.length; j++) {
        deciphered_text += char[DePosition[j]];
    }
    return console.log("Text Deciphered:",deciphered_text);
}

cipher(text, key);
decipher(ciphered_text, key);




