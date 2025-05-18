function sub() {
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
        return;
    }

    const kebutuhanKalori = Math.round(bbi * kaloriPerKg);

    res.textContent = `Berat Badan Ideal Anak Balita usia ${age} tahun, dengan tinggi ${tb} cm adalah ${bbi} kg.`;
    needs.textContent = `Kebutuhan kalori harian ideal untuk anak anda : ${kebutuhanKalori} kkal.`;
}
