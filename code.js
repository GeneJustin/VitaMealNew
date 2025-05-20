function sub() {
    let tulis = document.getElementById("result-section");
    const age = Number(document.getElementById("age").value);
    const tb = Number(document.getElementById("tb").value);
    const res = document.getElementById("stat");
    const needs = document.getElementById("needs");

    const bbi = (age * 2) + 8;
    let kaloriPerKg;

    if (age <= 1) {
        kaloriPerKg = 110; // rata-rata dari 90–120
    } else if (age <= 3) {
        kaloriPerKg = 100;
    } else if (age <= 5) {
        kaloriPerKg = 90;
    } else {
        needs.textContent = "Usia di luar rentang balita.";
        res.textContent = "-";
        return;
    }

    
    tulis.classList.remove("hidden");
    tulis.classList.add("result-section");

    const kebutuhanKalori = Math.round(bbi * kaloriPerKg);

    if(isNaN(tb) || isNaN(bb)){
        res.textContent = "Input tidak lengkap";
        needs.textContent = "Silahkan Masukkan Ulang";
        return;
    }

    res.textContent = `Berat Badan Ideal Anak Balita usia ${age} tahun, dengan tinggi ${tb} cm adalah ${bbi} kg.`;
    needs.textContent = `Kebutuhan kalori harian ideal untuk anak anda : ${kebutuhanKalori} kkal.`;
}
