/*
Rot13 in Javascript
Encodes the string using Rot13. Rot13 works by replacing each upper and lower case letters with the letter 13 positions ahead or behind it in the alphabet.

*/


var s="Fraq hf gur pbqr lbh hfrq gb qrpbqr guvf zrffntr";
var decodedArray=[];
 
 function incrementChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 13);
}
function decrementChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 13);
}
 for (var i = 0; i < s.length; i++) {
            var c = s.charAt(i);
            if       (c >= 'a' && c <= 'm'){c=incrementChar(c);}
            else if  (c >= 'A' && c <= 'M'){ c=incrementChar(c);}
            else if  (c >= 'n' && c <= 'z'){ c=decrementChar(c);}
            else if  (c >= 'N' && c <= 'Z'){ c=decrementChar(c);}
            decodedArray.push(c);
        }
        
decodedArray=decodedArray.join().replace(/,/g, '').toString();
console.log(decodedArray);
