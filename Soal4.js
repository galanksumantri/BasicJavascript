// SOAL 4
    
function isValidPassword(givenPassword){
    if (typeof givenPassword != "string"){
        return "ERROR : Password harus sebuah string"
    } else if (givenPassword == givenPassword.toLowerCase() || givenPassword == givenPassword.toUpperCase() || givenPassword.length <= 8){
        return false
    } else if (givenPassword.match(/[0-9]/)) {
        return true
    } else
        return false
}

// EXPECTED RESULT

// Ketika function tersebut dipanggil
console.log(isValidPassword('Meong2021'))
// EXPECTED OUTPUT => true

// (Karena memenuhi requirement, Meong2021 terdiri dari 8 huruf, ada huruf besar, ada huruf kecil, dan ada angka)

console.log(isValidPassword('meong2021'))
// EXPECTED OUTPUT => false (Karena meong2021 tidak ada huruf besar)

console.log(isValidPassword('@eong'))
// EXPECTED OUTPUT => false (Karena @eong tidak ada angka dan terdiri hanya 5 huruf)

console.log(isValidPassword('Meong2'))
// EXPECTED OUTPUT => false (Karena Meong2 hanya 6 huruf)

console.log(isValidPassword(0))
// EXPECTED OUTPUT => ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)

console.log(isValidPassword())
// EXPECTED OUTPUT => ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)