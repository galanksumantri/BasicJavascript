// SOAL 7

const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
]

function hitungTotalPenjualan(dataPenjualan){
    let totalPenjualan = 0
    for (i = 0; i < dataPenjualan.length; i++){
        if (typeof dataPenjualan[i].totalTerjual == "number"){
            totalPenjualan += dataPenjualan[i].totalTerjual
        } else {
        	console.log(`Data ke ${i+1} bukan "number"`)
        }
    }
    return totalPenjualan
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil dengan variabel dataPenjualanPakAldi

console.log(hitungTotalPenjualan(dataPenjualanPakAldi))
// EXPECTED OUTPUT
// 307 dari mana? dari setiap value property 'totalTerjual', yaitu 90 + 37 + 90 + 98