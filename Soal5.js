// SOAL 5

function getSplitName(personName){
    if (typeof personName !== "string"){
        return "ERROR : Nama harus berupa string"
    }
    let counter_kata = 0
    for (let i = 0; i < personName.length; i++){
    	if (personName[i] == " " && personName[i - 1] !== " " && personName[i - 1] !== undefined){
            counter_kata++
        }
    } 
    let last = personName.length - 1
    if (personName[last] !== " "){
        counter_kata++
        // console.log(counter_kata)
    } if (counter_kata > 3){
        return "Error : This function is only for 3 characters name"
    } else if (personName == ""){
        return {firstName : null, middleName : null ,lastName : null}
    } else if (counter_kata == 3){
        return {firstName : personName.split(" ")[0], middleName : personName.split(" ")[1],lastName : personName.split(" ")[2]}
    } else if (counter_kata == 2){
        return {firstName : personName.split(" ")[0], middleName : null,lastName : personName.split(" ")[1]}
    } else if (counter_kata == 1){
        return {firstName : personName.split(" ")[0], middleName : null ,lastName : null}
  	} else if (counter_kata == 0){
        return {firstName : null, middleName : null ,lastName : null}
    }
} 


// EXPECTED RESULT
// Ketika Function tersebut dipanggil

console.log(getSplitName("Aldi Dabiela Pranata"))
// EXPECTED RESULT
// { firstName: 'Aldi', middleName: 'Dabiela', lastName: 'Pranata'}

console.log(getSplitName("Dwi Kuncoro"))
// EXPECTED RESULT
// { firstName: 'Dwi', middleName: 'null', lastName: 'Kuncoro'}

console.log(getSplitName("Aurora"))
// EXPECTED RESULT
// { firstName: 'Aurora', middleName: 'null', lastName: 'null'}

console.log(getSplitName("Aurora Aureliya Sukma Darma"))
// EXPECTED RESULT
// Error : This function is only for 3 characters name

console.log(getSplitName(0))
// EXPECTED RESULT
// "ERROR : (Teman-teman jelasin ini error nya apa dan kenapa)"