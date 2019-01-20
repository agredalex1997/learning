let text = 'Alex Eduardo Agreda Magania';
let pad = '00000000'
let binaryStream = '';
let base64 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'];

function encode(str) {
    for (let letter of str) {
        let binary = letter.charCodeAt(0).toString(2);
        let tmp = (pad + binary).slice(-pad.length);
        binaryStream += tmp;
    }

    let base64table = [];

    let remainder = binaryStream.length % 6;
    if (remainder !== 0) {
        base64table.push('=');
        for (let i = 0; i < 6 - remainder; i++) {
            binaryStream += '0';
        }

        if (6 - remainder === 4) {
            base64table.push('=');
        }
    }

    let arrBinaryStream = binaryStream.split('');



    while (arrBinaryStream.length !== 0) {
        base64table.unshift(base64[parseInt(arrBinaryStream.slice(-6).join(''), 2)]);
        arrBinaryStream.splice(-6, 6);
    }

    console.log(base64table.join(''));
}

encode(text);