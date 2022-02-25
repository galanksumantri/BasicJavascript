// SOAL 3

function checkEmail(email){
    const format = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if (!email){
        return "ERROR : Email belum dimasukkan"
    } else if (typeof email != "string"){
        return "ERROR : Email harus sebuah string"
    } else if (format.test(email)){
        return "VALID"
    } else {
        const at = /=?@/
        if (!at.test(email)){
            return "ERROR : Email harus menggunakan tanda '@'"
        } else
            return "INVALID"
    }
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkEmail('apranata@binar.co.id')) // OUTPUT yang keluar => "VALID"
console.log(checkEmail('apranata@binar.com')) // OUTPUT yang keluar => "VALID"
console.log(checkEmail('apranata@binar')) // OUTPUT yang keluar => "INVALID"
console.log(checkEmail('apranata')) // ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)
console.log(checkEmail(3322)) // ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)
console.log(checkEmail()) // ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)