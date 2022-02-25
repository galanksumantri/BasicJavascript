// SOAL 8

const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
];

function getInfoPenjualan(dataPenjualan){
    if (Array.isArray(dataPenjualan)){
        let totalKeuntungan = 0;
        let totalModal = 0;

        for (let i = 0; i < dataPenjualan.length; i++){
            if (typeof dataPenjualan[i] == "object"){
                totalKeuntungan += dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli
                totalModal += dataPenjualan[i].hargaBeli * (dataPenjualan[i].sisaStok + dataPenjualan[i].totalTerjual)
            } else
                return "Tipe data harus 'object'"
        }
        const max = dataPenjualan.reduce(function(x, y){
            return x.totalTerjual > y.totalTerjual ? x : y
        })
        return{
            totalKeuntungan: `Rp. ${totalKeuntungan.toLocaleString("id-ID")}`,
            totalModal: `Rp. ${totalModal.toLocaleString("id-ID")}`,
            persentaseKeuntungan: `${((totalKeuntungan / totalModal) * 100).toFixed(2)}%`,
            produkBukuTerlaris: max.namaProduk,
            penulisTerlaris: max.penulis,
        }
    }
}

// EXPECTED RESULT
// Ketika Function tersebut dipanggil dengan variabel dataPenjualanPakAldi

console.log(getInfoPenjualan(dataPenjualanNovel))
// EXPECTED OUTPUT => OBJECT dengan dengan format seperti yang disebutkan diatas