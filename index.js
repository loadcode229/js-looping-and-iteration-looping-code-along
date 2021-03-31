// Code your solutions in this file
function writeCards(names, string) {
    const newArr = [];
    for (let i = 0; i < names.length; i++ ) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${string} gift!`)
    }
    return newArr;
}

function countDown(posInt) {
    while (posInt >= 0) {
        console.log(posInt--)
    }
}