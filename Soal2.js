// SOAL 2

function checkTypeNumber(givenNumber) {
    if (!givenNumber){
        return "Bro where is the parameter"
    } else if (typeof givenNumber == "number"){
        if (givenNumber % 2 == 1){
            return "GANJIL"
        } else if (givenNumber % 2 == 0){
            return "GENAP"
        }
    } else
        return "Eror: Invalid data type"
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)) // OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)) // OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")) // OUTPUT yang keluar => "Eror: Invalid data type"
console.log(checkTypeNumber({})) // OUTPUT yang keluar => "Eror: Invalid data type"
console.log(checkTypeNumber([])) // OUTPUT yang keluar => "Eror: Invalid data type"
console.log(checkTypeNumber()) // OUTPUT yang keluar => "Eror: Bro where the parameter?"