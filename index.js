// Code your solutions in this file
function writeCards(name, value) {
    let messageNames = []
    for (let i = 0; i < name.length; i++) {
        messageNames.push(`Thank you, ${name[i]}, for the wonderful ${value} gift!`);
    }
    return messageNames;
}
function countDown(num) {
    num > 0;
    let i = num;
    while (i > -1) {
        console.log(num--);
        i--;
}
    return num;
}
