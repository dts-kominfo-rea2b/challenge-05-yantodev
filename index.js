const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (data, x) => {
  const list = []; //untuk menampung hasil
  let result = x(data); //untuk mengambil hasil dari fungsi sortAscending atau sortDescending

  for (let a = 0; a < result.length; a++) {
    b = a + 1 + ". " + result[a]; //untuk menambahkan nomor
    list.push(b); //untuk menambahkan hasil
  }

  return list; //untuk mengembalikan hasil

};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (data) => {
  let result = data.sort((a, b) => (a > b ? 1 : -1)); //untuk mengurutkan secara ascending
  return result; //untuk mengembalikan hasil
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (data) => {
  let result = data.sort((a, b) => (a > b ? -1 : 1)); //untuk mengurutkan secara descending
  return result; //untuk mengembalikan hasil
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log("\n=== Sort Ascending ===");
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log("\n=== Sort Descending ===");
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};