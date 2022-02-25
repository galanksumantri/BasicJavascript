// SOAL 6

function getAngkaTerbesarKedua(dataNumbers){
    if (Array.isArray(dataNumbers)){
        if(dataNumbers.length >= 2){
            let DeleteMaxNumber = dataNumbers.filter(number => number != Math.max(...dataNumbers)) 
            return Math.max(...DeleteMaxNumber)
        } else {
            return 'ERROR : Angka harus lebih dari 2'
        }
    } else {
        return 'ERROR : Data harus array'
    }
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka))
// EXPECTED RESULT
// 8

console.log(getAngkaTerbesarKedua(0))
// EXPECTED RESULT
// "ERROR : (Kamu jelasin ini error nya apa dan kenapa"

console.log(getAngkaTerbesarKedua())
// EXPECTED RESULT
// "ERROR : (Kamu jelasin ini error nya apa dan kenapa"