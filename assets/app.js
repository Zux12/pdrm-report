document.addEventListener("DOMContentLoaded", () => {
  const negeriData = [
    "Johor",
    "Kedah",
    "Kelantan",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Perak",
    "Perlis",
    "Pulau Pinang",
    "Sabah",
    "Sarawak",
    "Selangor",
    "Terengganu",
    "Kuala Lumpur",
    "Putrajaya",
    "Labuan"
  ];

  // Starter list only. This is where you can expand later into a much larger master list.
  const balaiPolisData = [
    "Balai Polis Ampang",
    "Balai Polis Brickfields",
    "Balai Polis Cheras",
    "Balai Polis Dang Wangi",
    "Balai Polis Hulu Klang",
    "Balai Polis Ipoh",
    "Balai Polis Johor Bahru Selatan",
    "Balai Polis Kajang",
    "Balai Polis Klang Selatan",
    "Balai Polis Kota Bharu",
    "Balai Polis Kuching",
    "Balai Polis Miri",
    "Balai Polis Pandan Indah",
    "Balai Polis Petaling Jaya",
    "Balai Polis Sentul",
    "Balai Polis Seremban",
    "Balai Polis Shah Alam",
    "Balai Polis Wangsa Maju"
  ];

  const jenisKesData = [
    "Kecurian",
    "Penipuan",
    "Pecah Rumah",
    "Pencerobohan",
    "Ugutan",
    "Gangguan",
    "Mendatangkan Cedera",
    "Kehilangan Barang",
    "Kemalangan Jalan Raya",
    "Pecah Amanah",
    "Khianat",
    "Samun",
    "Ragut",
    "Laporan Maklumat",
    "Penyalahgunaan Dadah",
    "Gangguan Seksual",
    "Fitnah",
    "Pemalsuan Dokumen",
    "Penganiayaan",
    "Lain-lain"
  ];

  const seksyenData = [
    "Seksyen 323 Kanun Keseksaan",
    "Seksyen 324 Kanun Keseksaan",
    "Seksyen 325 Kanun Keseksaan",
    "Seksyen 341 Kanun Keseksaan",
    "Seksyen 379 Kanun Keseksaan",
    "Seksyen 380 Kanun Keseksaan",
    "Seksyen 403 Kanun Keseksaan",
    "Seksyen 406 Kanun Keseksaan",
    "Seksyen 409 Kanun Keseksaan",
    "Seksyen 417 Kanun Keseksaan",
    "Seksyen 419 Kanun Keseksaan",
    "Seksyen 420 Kanun Keseksaan",
    "Seksyen 425 Kanun Keseksaan",
    "Seksyen 427 Kanun Keseksaan",
    "Seksyen 441 Kanun Keseksaan",
    "Seksyen 447 Kanun Keseksaan",
    "Seksyen 448 Kanun Keseksaan",
    "Seksyen 452 Kanun Keseksaan",
    "Seksyen 454 Kanun Keseksaan",
    "Seksyen 457 Kanun Keseksaan",
    "Seksyen 506 Kanun Keseksaan",
    "Seksyen 509 Kanun Keseksaan",
    "Akta Dadah Berbahaya 1952",
    "Lain-lain"
  ];

  const jenisKesToSeksyen = {
    "Kecurian": "Seksyen 379 Kanun Keseksaan",
    "Penipuan": "Seksyen 420 Kanun Keseksaan",
    "Pecah Rumah": "Seksyen 457 Kanun Keseksaan",
    "Pencerobohan": "Seksyen 447 Kanun Keseksaan",
    "Ugutan": "Seksyen 506 Kanun Keseksaan",
    "Gangguan": "Seksyen 509 Kanun Keseksaan",
    "Mendatangkan Cedera": "Seksyen 323 Kanun Keseksaan",
    "Kehilangan Barang": "Lain-lain",
    "Kemalangan Jalan Raya": "Lain-lain",
    "Pecah Amanah": "Seksyen 406 Kanun Keseksaan",
    "Khianat": "Seksyen 427 Kanun Keseksaan",
    "Samun": "Lain-lain",
    "Ragut": "Lain-lain",
    "Laporan Maklumat": "Lain-lain",
    "Penyalahgunaan Dadah": "Akta Dadah Berbahaya 1952",
    "Gangguan Seksual": "Seksyen 509 Kanun Keseksaan",
    "Fitnah": "Lain-lain",
    "Pemalsuan Dokumen": "Lain-lain",
    "Penganiayaan": "Seksyen 323 Kanun Keseksaan",
    "Lain-lain": "Lain-lain"
  };

  const negeriList = document.getElementById("negeriList");
  const balaiPolisList = document.getElementById("balaiPolisList");
  const jenisKesList = document.getElementById("jenisKesList");
  const seksyenList = document.getElementById("seksyenList");

  const jenisKes = document.getElementById("jenisKes");
  const seksyen = document.getElementById("seksyen");

  const formNotice = document.getElementById("formNotice");
  const reportContent = document.getElementById("reportContent");

  const generateBtn = document.getElementById("generateBtn");
  const copyBtn = document.getElementById("copyBtn");
  const printBtn = document.getElementById("printBtn");
  const resetBtn = document.getElementById("resetBtn");

  function populateDatalist(element, items) {
    element.innerHTML = items
      .map((item) => `<option value="${item}"></option>`)
      .join("");
  }

  populateDatalist(negeriList, negeriData);
  populateDatalist(balaiPolisList, balaiPolisData);
  populateDatalist(jenisKesList, jenisKesData);
  populateDatalist(seksyenList, seksyenData);

  function setCurrentDateTime() {
    const now = new Date();

    const dateString = now.toISOString().split("T")[0];

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const timeString = `${hours}:${minutes}`;

    const tarikhLaporan = document.getElementById("tarikhLaporan");
    const masaLaporan = document.getElementById("masaLaporan");

    if (tarikhLaporan && !tarikhLaporan.value) tarikhLaporan.value = dateString;
    if (masaLaporan && !masaLaporan.value) masaLaporan.value = timeString;
  }

  function formatDateMalay(dateValue) {
    if (!dateValue) return "tarikh tidak dinyatakan";

    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return dateValue;

    return new Intl.DateTimeFormat("ms-MY", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  function formatTimeMalay(timeValue) {
    if (!timeValue) return "masa tidak dinyatakan";
    return timeValue.replace(":", ".");
  }

  function cleanText(value, fallback = "tiada maklumat dinyatakan") {
    return value && value.trim() ? value.trim() : fallback;
  }

  function smartChronology(jenis, kronologiRaw, lokasi, tarikh, masa) {
    const base = cleanText(kronologiRaw, "");
    const datePart = formatDateMalay(tarikh);
    const timePart = formatTimeMalay(masa);
    const locationPart = cleanText(lokasi, "lokasi yang dinyatakan");

    if (!base) {
      return `Pengadu memaklumkan bahawa satu kejadian telah berlaku pada ${datePart} sekitar jam ${timePart} di ${locationPart}.`;
    }

    const lowerJenis = (jenis || "").toLowerCase();

    if (lowerJenis.includes("kecurian")) {
      return `Pengadu menyatakan bahawa pada ${datePart}, sekitar jam ${timePart}, semasa berada di ${locationPart}, pengadu mendapati bahawa ${base}. Berdasarkan keadaan tersebut, pengadu percaya kejadian berkenaan mempunyai unsur kecurian oleh pihak yang tidak diketahui.`;
    }

    if (lowerJenis.includes("penipuan")) {
      return `Pengadu menyatakan bahawa pada ${datePart}, sekitar jam ${timePart}, berkaitan kejadian di ${locationPart}, pengadu memaklumkan bahawa ${base}. Selepas menilai keadaan tersebut, pengadu percaya dirinya telah menjadi mangsa penipuan.`;
    }

    if (lowerJenis.includes("ugutan") || lowerJenis.includes("gangguan")) {
      return `Pengadu menyatakan bahawa pada ${datePart}, sekitar jam ${timePart}, di ${locationPart}, pengadu telah mengalami situasi di mana ${base}. Keadaan tersebut telah menimbulkan rasa takut, tidak selamat, dan gangguan kepada pengadu.`;
    }

    if (lowerJenis.includes("pecah rumah")) {
      return `Pengadu menyatakan bahawa pada ${datePart}, sekitar jam ${timePart}, di ${locationPart}, pengadu mendapati bahawa ${base}. Berdasarkan pemerhatian pengadu, kejadian tersebut dipercayai berkaitan dengan kes pecah rumah.`;
    }

    if (lowerJenis.includes("pencerobohan")) {
      return `Pengadu menyatakan bahawa pada ${datePart}, sekitar jam ${timePart}, di ${locationPart}, pengadu mendapati bahawa ${base}. Pengadu percaya kejadian tersebut melibatkan unsur pencerobohan ke atas kawasan atau premis berkenaan.`;
    }

    if (lowerJenis.includes("cedera") || lowerJenis.includes("penganiayaan")) {
      return `Pengadu menyatakan bahawa pada ${datePart}, sekitar jam ${timePart}, di ${locationPart}, telah berlaku insiden di mana ${base}. Akibat kejadian tersebut, pengadu memaklumkan telah mengalami kecederaan atau kesan fizikal.`;
    }

    return `Pengadu menyatakan bahawa pada ${datePart}, sekitar jam ${timePart}, di ${locationPart}, ${base}.`;
  }

  function buildReport() {
    const balaiPolis = cleanText(document.getElementById("balaiPolis").value, "balai tidak dinyatakan");
    const negeri = cleanText(document.getElementById("negeri").value, "negeri tidak dinyatakan");
    const namaPegawai = cleanText(document.getElementById("namaPegawai").value, "tidak dinyatakan");
    const noBadan = cleanText(document.getElementById("noBadan").value, "tidak dinyatakan");
    const tarikhLaporan = document.getElementById("tarikhLaporan").value;
    const masaLaporan = document.getElementById("masaLaporan").value;

    const namaPengadu = cleanText(document.getElementById("namaPengadu").value, "tidak dinyatakan");
    const noIc = cleanText(document.getElementById("noIc").value, "tidak dinyatakan");
    const telefon = cleanText(document.getElementById("telefon").value, "tidak dinyatakan");
    const alamat = cleanText(document.getElementById("alamat").value, "tidak dinyatakan");

    const tarikhKejadian = document.getElementById("tarikhKejadian").value;
    const masaKejadian = document.getElementById("masaKejadian").value;
    const lokasiKejadian = cleanText(document.getElementById("lokasiKejadian").value, "lokasi tidak dinyatakan");
    const jenisKesValue = cleanText(document.getElementById("jenisKes").value, "Lain-lain");
    const seksyenValue = cleanText(document.getElementById("seksyen").value, "Lain-lain");
    const kronologi = document.getElementById("kronologi").value.trim();
    const suspek = cleanText(document.getElementById("suspek").value, "Tiada maklumat suspek diperolehi setakat laporan ini dibuat.");
    const saksi = cleanText(document.getElementById("saksi").value, "Tiada maklumat saksi diperolehi setakat laporan ini dibuat.");
    const kerugian = cleanText(document.getElementById("kerugian").value, "tiada kerugian dinyatakan");
    const tindakanDipohon = cleanText(
      document.getElementById("tindakanDipohon").value,
      "pengadu memohon agar pihak polis menjalankan siasatan lanjut dan mengambil tindakan yang sewajarnya"
    );

    if (!document.getElementById("namaPengadu").value.trim() || !kronologi) {
      formNotice.textContent = "Sila lengkapkan sekurang-kurangnya Nama Pengadu dan Kronologi Ringkas sebelum menjana draf.";
      return;
    }

    formNotice.textContent = "Draf laporan berjaya dijana.";

    const chronologyText = smartChronology(
      jenisKesValue,
      kronologi,
      lokasiKejadian,
      tarikhKejadian,
      masaKejadian
    );

    const reportText =
`Butiran Balai / Pegawai
Laporan ini direkodkan di ${balaiPolis}, ${negeri}. Pegawai bertugas yang merekodkan maklumat ini ialah ${namaPegawai} dengan No. Badan / ID ${noBadan}. Tarikh laporan direkodkan pada ${formatDateMalay(tarikhLaporan)} sekitar jam ${formatTimeMalay(masaLaporan)}.

Butiran Pengadu
Nama pengadu ialah ${namaPengadu}, nombor kad pengenalan / passport ${noIc}, boleh dihubungi melalui talian ${telefon}, dan beralamat di ${alamat}.

Butiran Kejadian
Kejadian yang dilaporkan adalah berkaitan dengan ${jenisKesValue}. Kejadian tersebut dikatakan berlaku pada ${formatDateMalay(tarikhKejadian)} sekitar jam ${formatTimeMalay(masaKejadian)} di ${lokasiKejadian}.

Kronologi Kejadian
${chronologyText}

Maklumat Suspek / Saksi
Maklumat suspek: ${suspek}
Maklumat saksi: ${saksi}

Kerugian / Kesan
Pengadu memaklumkan bahawa kerugian atau kesan akibat kejadian ini adalah ${kerugian}.

Peruntukan Undang-Undang
Berdasarkan maklumat awal yang diberikan, kejadian ini berkemungkinan melibatkan ${seksyenValue}.

Permohonan / Tindakan
Sehubungan itu, ${tindakanDipohon}.

Catatan
Draf ini dijana secara automatik berdasarkan maklumat input dan tertakluk kepada semakan lanjut oleh pegawai bertugas sebelum dimuktamadkan.`;

    reportContent.textContent = reportText;
    reportContent.classList.remove("empty-state");
    copyBtn.disabled = false;
    printBtn.disabled = false;
  }

  function resetForm() {
    const confirmReset = window.confirm("Adakah anda pasti ingin reset semua maklumat?");
    if (!confirmReset) return;

    document.getElementById("reportForm").reset();
    reportContent.textContent = 'Draf laporan akan dipaparkan di sini selepas anda menekan butang Jana Draf.';
    reportContent.classList.add("empty-state");
    formNotice.textContent = "Semua maklumat telah direset.";
    copyBtn.disabled = true;
    printBtn.disabled = true;
    setCurrentDateTime();
  }

  async function copyReport() {
    const text = reportContent.textContent.trim();
    if (!text || reportContent.classList.contains("empty-state")) return;

    try {
      await navigator.clipboard.writeText(text);
      formNotice.textContent = "Laporan berjaya disalin.";
    } catch (error) {
      formNotice.textContent = "Tidak berjaya menyalin laporan. Sila cuba semula.";
    }
  }

  function printReport() {
    if (reportContent.classList.contains("empty-state")) return;
    window.print();
  }

  jenisKes.addEventListener("input", () => {
    const selectedJenisKes = jenisKes.value.trim();
    if (jenisKesToSeksyen[selectedJenisKes]) {
      seksyen.value = jenisKesToSeksyen[selectedJenisKes];
    }
  });

  generateBtn.addEventListener("click", buildReport);
  copyBtn.addEventListener("click", copyReport);
  printBtn.addEventListener("click", printReport);
  resetBtn.addEventListener("click", resetForm);

  setCurrentDateTime();
});
