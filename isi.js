// Ambil semua input quantity
const quantityInputs = document.querySelectorAll('.quantity');
// Ambil elemen total amount
const totalAmountElement = document.querySelector('#totalAmount');

// Fungsi buat ngitung total
function calculateTotal() {
    // Di awal, total adalah 0
    let total = 0;
    
    // Loop setiap item
    quantityInputs.forEach((input) => {
        // Ambil quantity value
        const quantity = parseInt(input.value) || 0;
        // Ambil elemen parent (div item)
        const itemDiv = input.closest('.yanas, .satuan, .enak, .minum');
        // Ambil harga dari span.price
        const priceText = itemDiv.querySelector('.price').textContent;
        // Ambil hanya angka dari harga (hapus tanda bukan angka, kek ", / Rp")
        const price = parseInt(priceText.replace(/\D/g, '')) || 0;
        
        // Tambahkan ke total (quantity x price)
        total += quantity * price;
    });
    
    // Update tampilan total pake format Rupiah Indonesia
    totalAmountElement.textContent = total.toLocaleString('id-ID');
}

// Tambah event listener pada setiap input quantity
quantityInputs.forEach((input) => {
    // Setiap kali input berubah, hitung ulang totalnya
    input.addEventListener('change', calculateTotal);
    // Juga buat input saat user mengetik
    input.addEventListener('input', calculateTotal);
});

// Panggil fungsi sekali saat page load
calculateTotal();


function showalert(){
    alert("Pesanan sudah diterima, bayar dikasir!");
    window.open('index.html');
}
