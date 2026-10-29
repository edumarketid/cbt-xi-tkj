// ==========================================
// 1. MASTER BANK SOAL (50 SOAL)
// ==========================================
const MASTER_BANK_SOAL = [
    { id: 1, q: "Berapakah jumlah total IP Address yang ada pada subnet mask /24?", a: ["256 IP", "128 IP", "64 IP", "32 IP", "512 IP"], c: 0 },
    { id: 2, q: "Berapakah jumlah host usable (dapat dipakai) pada prefix /24?", a: ["254 host", "255 host", "256 host", "252 host", "128 host"], c: 0 },
    { id: 3, q: "Subnet mask desimal dari CIDR /25 adalah...", a: ["255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.0"], c: 0 },
    { id: 4, q: "Jumlah host yang dapat digunakan pada subnet mask /25 adalah...", a: ["126 host", "128 host", "254 host", "62 host", "30 host"], c: 0 },
    { id: 5, q: "Subnet mask desimal untuk prefix CIDR /26 adalah...", a: ["255.255.255.192", "255.255.255.128", "255.255.255.224", "255.255.255.248", "255.255.255.252"], c: 0 },
    { id: 6, q: "Berapakah jumlah host usable pada CIDR /26?", a: ["62 host", "64 host", "126 host", "30 host", "14 host"], c: 0 },
    { id: 7, q: "Subnet mask desimal dari CIDR /27 adalah...", a: ["255.255.255.224", "255.255.255.192", "255.255.255.240", "255.255.255.248", "255.255.255.252"], c: 0 },
    { id: 8, q: "Berapakah jumlah host usable pada prefix /27?", a: ["30 host", "32 host", "62 host", "14 host", "6 host"], c: 0 },
    { id: 9, q: "Subnet mask desimal untuk prefix CIDR /28 adalah...", a: ["255.255.255.240", "255.255.255.224", "255.255.255.248", "255.255.255.252", "255.255.255.192"], c: 0 },
    { id: 10, q: "Berapakah jumlah host usable pada CIDR /28?", a: ["14 host", "16 host", "30 host", "6 host", "2 host"], c: 0 },
    { id: 11, q: "Subnet mask desimal dari CIDR /29 adalah...", a: ["255.255.255.248", "255.255.255.240", "255.255.255.252", "255.255.255.224", "255.255.255.192"], c: 0 },
    { id: 12, q: "Berapakah jumlah host usable pada prefix /29?", a: ["6 host", "8 host", "14 host", "2 host", "30 host"], c: 0 },
    { id: 13, q: "Subnet mask desimal dari CIDR /30 adalah...", a: ["255.255.255.252", "255.255.255.248", "255.255.255.240", "255.255.255.224", "255.255.255.128"], c: 0 },
    { id: 14, q: "Berapakah jumlah host usable pada prefix /30?", a: ["2 host", "4 host", "6 host", "14 host", "1 host"], c: 0 },
    { id: 15, q: "Prefix manakah yang paling efisien untuk koneksi Point-to-Point antar 2 router?", a: ["/30", "/29", "/28", "/27", "/24"], c: 0 },
    { id: 16, q: "Jika dibutuhkan 50 IP untuk host, prefix manakah yang paling efisien?", a: ["/26", "/27", "/25", "/28", "/29"], c: 0 },
    { id: 17, q: "Jika dibutuhkan 100 IP untuk host, prefix manakah yang paling efisien?", a: ["/25", "/26", "/24", "/27", "/28"], c: 0 },
    { id: 18, q: "Jika dibutuhkan 20 IP untuk host, prefix manakah yang paling tepat?", a: ["/27", "/28", "/26", "/29", "/30"], c: 0 },
    { id: 19, q: "Jika dibutuhkan 10 IP untuk host, prefix manakah yang paling tepat?", a: ["/28", "/29", "/27", "/30", "/26"], c: 0 },
    { id: 20, q: "Jika dibutuhkan 5 IP untuk host, prefix manakah yang paling tepat?", a: ["/29", "/30", "/28", "/27", "/26"], c: 0 },
    { id: 21, q: "Network Address dari IP 192.168.10.35/26 adalah...", a: ["192.168.10.32", "192.168.10.0", "192.168.10.64", "192.168.10.128", "192.168.10.16"], c: 0 },
    { id: 22, q: "Broadcast Address dari IP 192.168.10.35/26 adalah...", a: ["192.168.10.63", "192.168.10.31", "192.168.10.127", "192.168.10.255", "192.168.10.64"], c: 0 },
    { id: 23, q: "IP usable pertama pada network 192.168.1.0/24 adalah...", a: ["192.168.1.1", "192.168.1.0", "192.168.1.2", "192.168.1.254", "192.168.1.255"], c: 0 },
    { id: 24, q: "IP usable terakhir pada network 192.168.1.0/24 adalah...", a: ["192.168.1.254", "192.168.1.255", "192.168.1.253", "192.168.1.1", "192.168.1.128"], c: 0 },
    { id: 25, q: "Network Address dari IP 192.168.1.70/26 adalah...", a: ["192.168.1.64", "192.168.1.0", "192.168.1.128", "192.168.1.32", "192.168.1.96"], c: 0 },
    { id: 26, q: "Broadcast Address dari IP 192.168.1.70/26 adalah...", a: ["192.168.1.127", "192.168.1.63", "192.168.1.95", "192.168.1.255", "192.168.1.79"], c: 0 },
    { id: 27, q: "Network Address dari IP 192.168.1.100/27 adalah...", a: ["192.168.1.96", "192.168.1.64", "192.168.1.128", "192.168.1.32", "192.168.1.0"], c: 0 },
    { id: 28, q: "Broadcast Address dari IP 192.168.1.100/27 adalah...", a: ["192.168.1.127", "192.168.1.95", "192.168.1.159", "192.168.1.255", "192.168.1.111"], c: 0 },
    { id: 29, q: "Network Address dari IP 192.168.1.20/28 adalah...", a: ["192.168.1.16", "192.168.1.0", "192.168.1.32", "192.168.1.8", "192.168.1.24"], c: 0 },
    { id: 30, q: "Broadcast Address dari IP 192.168.1.20/28 adalah...", a: ["192.168.1.31", "192.168.1.15", "192.168.1.47", "192.168.1.63", "192.168.1.25"], c: 0 },
    { id: 31, q: "Network Address dari IP 192.168.1.10/29 adalah...", a: ["192.168.1.8", "192.168.1.0", "192.168.1.16", "192.168.1.4", "192.168.1.12"], c: 0 },
    { id: 32, q: "Broadcast Address dari IP 192.168.1.10/29 adalah...", a: ["192.168.1.15", "192.168.1.7", "192.168.1.23", "192.168.1.31", "192.168.1.11"], c: 0 },
    { id: 33, q: "Network Address dari IP 192.168.1.5/30 adalah...", a: ["192.168.1.4", "192.168.1.0", "192.168.1.8", "192.168.1.2", "192.168.1.6"], c: 0 },
    { id: 34, q: "Broadcast Address dari IP 192.168.1.5/30 adalah...", a: ["192.168.1.7", "192.168.1.3", "192.168.1.11", "192.168.1.15", "192.168.1.5"], c: 0 },
    { id: 35, q: "Rentang IP usable untuk network 192.168.1.32/27 adalah...", a: ["192.168.1.33 - 192.168.1.62", "192.168.1.32 - 192.168.1.63", "192.168.1.33 - 192.168.1.63", "192.168.1.34 - 192.168.1.62", "192.168.1.1 - 192.168.1.30"], c: 0 },
    { id: 36, q: "Rentang IP usable untuk network 192.168.1.16/28 adalah...", a: ["192.168.1.17 - 192.168.1.30", "192.168.1.16 - 192.168.1.31", "192.168.1.17 - 192.168.1.31", "192.168.1.18 - 192.168.1.30", "192.168.1.1 - 192.168.1.14"], c: 0 },
    { id: 37, q: "Apa kepanjangan dari konsep VLSM dalam pengalamatan jaringan?", a: ["Variable Length Subnet Mask", "Very Large Subnet Mask", "Virtual Local Subnet Mask", "Variable Local Subnet Mode", "Vector Length Subnet Mask"], c: 0 },
    { id: 38, q: "Apakah tujuan utama dari penerapannya teknik VLSM?", a: ["Menghemat alokasi IP Address", "Meningkatkan kecepatan bandwith", "Mengganti fungsi dari Router", "Menghubungkan beda domain", "Mengamankan jaringan dari virus"], c: 0 },
    { id: 39, q: "Aturan utama dalam pengalokasian blok IP dengan VLSM adalah...", a: ["Urutkan kebutuhan host terbesar", "Urutkan kebutuhan host terkecil", "Acak seluruh kebutuhan host", "Bagi blok IP secara merata", "Gunakan subnet mask /24 saja"], c: 0 },
    { id: 40, q: "STUDI KASUS 1: Lab Komputer butuh 60 host dari 192.168.1.0/24. Subnet pertama adalah...", a: ["192.168.1.0/26", "192.168.1.0/27", "192.168.1.0/25", "192.168.1.0/28", "192.168.1.0/29"], c: 0 },
    { id: 41, q: "STUDI KASUS 2: Setelah alokasi 60 host (192.168.1.0/26), IP Network berikutnya yang siap dipakai...", a: ["192.168.1.64", "192.168.1.65", "192.168.1.32", "192.168.1.128", "192.168.1.100"], c: 0 },
    { id: 42, q: "STUDI KASUS 3: Ruang Guru butuh 25 host. Dari IP sisa 192.168.1.64, prefix yang dipakai adalah...", a: ["/27", "/28", "/26", "/29", "/30"], c: 0 },
    { id: 43, q: "STUDI KASUS 4: Alokasi 25 host memakai 192.168.1.64/27. IP Network berikutnya yang siap dipakai...", a: ["192.168.1.96", "192.168.1.95", "192.168.1.128", "192.168.1.80", "192.168.1.100"], c: 0 },
    { id: 44, q: "STUDI KASUS 5: Server sekolah butuh 12 host. Dari IP sisa 192.168.1.96, prefix yang tepat...", a: ["/28", "/29", "/27", "/30", "/26"], c: 0 },
    { id: 45, q: "STUDI KASUS 6: Alokasi 12 host memakai 192.168.1.96/28. IP Network berikutnya yang siap dipakai...", a: ["192.168.1.112", "192.168.1.111", "192.168.1.128", "192.168.1.104", "192.168.1.120"], c: 0 },
    { id: 46, q: "STUDI KASUS 7: Link PTP Router Utama ke Router Gedung B butuh 2 IP. Dari 192.168.1.112, prefix...", a: ["/30", "/29", "/28", "/27", "/26"], c: 0 },
    { id: 47, q: "STUDI KASUS 8: Broadcast Address untuk blok PTP 192.168.1.112/30 adalah...", a: ["192.168.1.115", "192.168.1.113", "192.168.1.114", "192.168.1.116", "192.168.1.119"], c: 0 },
    { id: 48, q: "Diberikan IP 192.168.1.195/27. Termasuk ke dalam urutan subnet ke berapakah IP ini?", a: ["Subnet ke-7", "Subnet ke-6", "Subnet ke-5", "Subnet ke-4", "Subnet ke-3"], c: 0 },
    { id: 49, q: "Berapakah nilai Wildcard Mask (kebalikan Subnet Mask) untuk CIDR /28?", a: ["0.0.0.15", "0.0.0.31", "0.0.0.7", "0.0.0.63", "0.0.0.255"], c: 0 },
    { id: 50, q: "Jika sebuah Interface MikroTik diberi IP 192.168.1.254/30, manakah IP pasangan router-nya?", a: ["192.168.1.253", "192.168.1.252", "192.168.1.255", "192.168.1.250", "192.168.1.248"], c: 0 }
];

// ==========================================
// 2. MODUL UTILS (NORMALISASI USERNAME S017)
// ==========================================
const Utils = {
    normalizeUsername(input) {
        if(!input) return '';
        let clean = String(input).trim().toUpperCase();
        let match = clean.match(/^S?0*(\d+)$/i);
        if(match) {
            let num = parseInt(match[1], 10);
            let pad = num < 10 ? '00' + num : (num < 100 ? '0' + num : '' + num);
            return 'S' + pad;
        }
        return clean;
    },
    shuffle(array) {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};

// ==========================================
// 3. MODUL QUIZ ENGINE (PENGACAKAN SOAL & KUNCI)
// ==========================================
const QuizEngine = {
    activeSoal: [],
    answers: {},
    ragu: {},
    currentIndex: 0,
    timer: null,
    timeRemaining: 45 * 60,

    mulaiUjian() {
        let shuffledSoal = Utils.shuffle(MASTER_BANK_SOAL).slice(0, 25);
        this.activeSoal = shuffledSoal.map(item => {
            let textKunciBenar = item.a[item.c];
            let shuffledOpsi = Utils.shuffle(item.a);
            let newIndexKunci = shuffledOpsi.indexOf(textKunciBenar);
            return {
                id: item.id,
                q: item.q,
                a: shuffledOpsi,
                c: newIndexKunci
            };
        });

        this.answers = {};
        this.ragu = {};
        this.currentIndex = 0;
        this.timeRemaining = 45 * 60;

        App.showView('view-exam');
        this.renderQuestion();
        this.renderNavigator();
        this.startTimer();
    },

    startTimer() {
        if(this.timer) clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.timeRemaining--;
            let m = Math.floor(this.timeRemaining / 60);
            let s = this.timeRemaining % 60;
            document.getElementById('txt-timer').innerText = `${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
            if(this.timeRemaining <= 0) {
                clearInterval(this.timer);
                alert("Waktu habis!");
                this.prosesSelesai();
            }
        }, 1000);
    },

    renderQuestion() {
        const current = this.activeSoal[this.currentIndex];
        document.getElementById('txt-nomor-soal').innerText = `Soal No. ${this.currentIndex + 1} dari 25`;
        document.getElementById('box-soal-konten').innerText = current.q;

        const boxOpsi = document.getElementById('box-opsi-jawaban');
        boxOpsi.innerHTML = '';
        const labels = ['A', 'B', 'C', 'D', 'E'];

        current.a.forEach((optText, idx) => {
            const isSelected = this.answers[this.currentIndex] === idx;
            const btn = document.createElement('div');
            btn.className = `p-4 rounded-2xl border cursor-pointer text-sm flex items-center gap-3.5 transition duration-150 ${
                isSelected 
                ? 'bg-indigo-600/15 border-indigo-500 text-indigo-200 font-semibold shadow-inner' 
                : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-slate-300'
            }`;
            btn.onclick = () => {
                this.answers[this.currentIndex] = idx;
                this.renderQuestion();
                this.renderNavigator();
            };
            btn.innerHTML = `
                <span class="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900 border border-slate-700 text-slate-400'
                }">${labels[idx]}</span>
                <span class="leading-relaxed">${optText}</span>
            `;
            boxOpsi.appendChild(btn);
        });

        document.getElementById('chk-ragu').checked = !!this.ragu[this.currentIndex];
        document.getElementById('btn-prev').disabled = this.currentIndex === 0;
        document.getElementById('btn-next').disabled = this.currentIndex === 24;
    },

    toggleRagu() {
        this.ragu[this.currentIndex] = document.getElementById('chk-ragu').checked;
        this.renderNavigator();
    },

    soalPrev() { if(this.currentIndex > 0) { this.currentIndex--; this.renderQuestion(); } },
    soalNext() { if(this.currentIndex < 24) { this.currentIndex++; this.renderQuestion(); } },

    renderNavigator() {
        const grid = document.getElementById('grid-navigator');
        grid.innerHTML = '';
        for(let i=0; i<25; i++) {
            const isCurrent = i === this.currentIndex;
            const isAnswered = this.answers[i] !== undefined;
            const isRagu = this.ragu[i];

            let bgClass = "bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700";
            if(isRagu) bgClass = "bg-amber-500 text-slate-950 font-bold border-amber-400";
            else if(isAnswered) bgClass = "bg-indigo-600 text-white font-bold border-indigo-500";
            if(isCurrent) bgClass += " ring-2 ring-white ring-offset-2 ring-offset-slate-900";

            const btn = document.createElement('button');
            btn.className = `h-10 rounded-xl text-xs flex items-center justify-center border transition ${bgClass}`;
            btn.innerText = i + 1;
            btn.onclick = () => { this.currentIndex = i; this.renderQuestion(); };
            grid.appendChild(btn);
        }
    },

    konfirmasiSelesai() {
        if(confirm(`Yakin ingin mengakhiri ujian?`)) this.prosesSelesai();
    },

    prosesSelesai() {
        clearInterval(this.timer);
        let benar = 0;
        this.activeSoal.forEach((soal, idx) => {
            if(this.answers[idx] === soal.c) benar++;
        });
        let salah = 25 - benar;
        let score = Math.round((benar / 25) * 100);
        let status = score >= 75 ? "LULUS" : "REMIDI";

        const payload = {
            username: App.activeUser.username,
            nama: App.activeUser.nama,
            benar: benar,
            salah: salah,
            score: score,
            status: status,
            waktu: new Date().toLocaleString('id-ID')
        };

        App.rekapNilai = App.rekapNilai.filter(r => Utils.normalizeUsername(r.username) !== Utils.normalizeUsername(App.activeUser.username));
        App.rekapNilai.push(payload);
        localStorage.setItem('cbt_rekap', JSON.stringify(App.rekapNilai));

        let sObj = App.daftarSiswa.find(s => Utils.normalizeUsername(s.username) === Utils.normalizeUsername(App.activeUser.username));
        if(sObj) {
            sObj.status = "Selesai (" + score + ")";
            localStorage.setItem('cbt_siswa', JSON.stringify(App.daftarSiswa));
        }

        document.getElementById('txt-nilai-akhir').innerText = score;
        document.getElementById('txt-status-lulus').innerText = status;
        document.getElementById('txt-total-benar').innerText = benar;
        document.getElementById('txt-total-salah').innerText = salah;

        const codeStr = btoa(JSON.stringify(payload));
        document.getElementById('txt-code-hasil').value = codeStr;

        document.getElementById('qrcode-box').innerHTML = '';
        new QRCode(document.getElementById('qrcode-box'), { text: codeStr, width: 140, height: 140 });

        App.showView('view-hasil');
    },

    downloadHasilJSON() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(App.rekapNilai.find(r => Utils.normalizeUsername(r.username) === Utils.normalizeUsername(App.activeUser.username))));
        const a = document.createElement('a');
        a.href = dataStr;
        a.download = `Hasil_CBT_${App.activeUser.username}.json`;
        a.click();
    }
};

// ==========================================
// 4. MODUL PRINT SERVICE
// ==========================================
const PrintService = {
    previewKop(e) {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = function(evt) {
                App.kopSekolahImg = evt.target.result;
                localStorage.setItem('cbt_kop_sekolah', App.kopSekolahImg);
                document.getElementById('box-preview-kop').classList.remove('hidden');
                document.getElementById('img-preview-kop').src = App.kopSekolahImg;
            };
            reader.readAsDataURL(file);
        }
    },

    executePrint(htmlContent) {
        const printArea = document.getElementById('print-area');
        printArea.innerHTML = htmlContent;
        window.print();
        printArea.innerHTML = '';
    },

    getKopHTML() {
        return App.kopSekolahImg ? `<div style="text-align:center; margin-bottom:15px;"><img src="${App.kopSekolahImg}" style="max-height:90px; width:auto; display:inline-block;"></div>` : '';
    },

    cetakKartuSiswa() {
        const html = `
            <div style="padding:10px; font-family:sans-serif;">
                ${this.getKopHTML()}
                <h2 style="text-align:center; font-weight:bold; font-size:14px; margin-bottom:15px; border-bottom:2px solid #000; padding-bottom:5px;">KARTU PESERTA SUMATIF AKHIR TP</h2>
                <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px;">
                    ${App.daftarSiswa.map(s => `
                        <div style="border:1px solid #000; padding:8px; font-size:11px;">
                            <div style="font-weight:bold; border-bottom:1px solid #000; padding-bottom:2px; margin-bottom:4px;">SMK NEGERI 1 WAKATOBI</div>
                            <div>Nama: <strong>${s.nama}</strong></div>
                            <div>Username: <strong style="font-family:monospace;">${s.username}</strong></div>
                            <div>Password: <strong>${s.password}</strong></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        this.executePrint(html);
    },

    cetakDaftarHadir() {
        const html = `
            <div style="padding:10px; font-family:sans-serif;">
                ${this.getKopHTML()}
                <h2 style="text-align:center; font-weight:bold; font-size:14px; margin-bottom:5px;">DAFTAR HADIR PESERTA UJIAN SUMATIF AKHIR TP</h2>
                <table style="width:100%; border-collapse:collapse; font-size:11px; margin-top:10px;" border="1" cellpadding="6">
                    <thead><tr style="background:#eee;"><th>No</th><th>Username</th><th>Nama Lengkap</th><th>Status Kehadiran</th><th>Tanda Tangan</th></tr></thead>
                    <tbody>
                        ${App.daftarSiswa.map((s, i) => `
                            <tr>
                                <td style="text-align:center;">${i+1}</td>
                                <td style="font-family:monospace; font-weight:bold;">${s.username}</td>
                                <td>${s.nama}</td>
                                <td style="text-align:center;">${s.kehadiran || 'Belum Hadir'}</td>
                                <td style="width:100px;">${i+1}.</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        this.executePrint(html);
    },

    cetakArsipSoal() {
        const labels = ['A', 'B', 'C', 'D', 'E'];
        const html = `
            <div style="padding:10px; font-family:sans-serif; font-size:11px; line-height:1.4;">
                ${this.getKopHTML()}
                <h2 style="text-align:center; font-weight:bold; font-size:14px; margin-bottom:10px;">MASTER BANK SOAL & KUNCI JAWABAN</h2>
                ${MASTER_BANK_SOAL.map((s, i) => `
                    <div style="margin-bottom:10px; page-break-inside:avoid;">
                        <strong>${i+1}. ${s.q}</strong>
                        <div style="margin-left:15px;">
                            ${s.a.map((opt, idx) => `
                                <div style="${idx===s.c ? 'font-weight:bold; text-decoration:underline;' : ''}">${labels[idx]}. ${opt} ${idx===s.c ? '✓' : ''}</div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        this.executePrint(html);
    },

    cetakRekapNilai() {
        const html = `
            <div style="padding:10px; font-family:sans-serif;">
                ${this.getKopHTML()}
                <h2 style="text-align:center; font-weight:bold; font-size:14px; margin-bottom:10px;">REKAPITULASI NILAI SUMATIF AKHIR TP</h2>
                <table style="width:100%; border-collapse:collapse; font-size:11px;" border="1" cellpadding="5">
                    <thead><tr style="background:#eee;"><th>No</th><th>Username</th><th>Nama Siswa</th><th>Benar</th><th>Salah</th><th>Nilai</th><th>Status</th></tr></thead>
                    <tbody>
                        ${App.rekapNilai.map((r, i) => `
                            <tr>
                                <td style="text-align:center;">${i+1}</td>
                                <td style="font-family:monospace; font-weight:bold;">${r.username}</td>
                                <td>${r.nama}</td>
                                <td>${r.benar}</td><td>${r.salah}</td><td><strong>${r.score}</strong></td><td>${r.status}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        this.executePrint(html);
    }
};

// ==========================================
// 5. MODUL SCANNER SERVICE
// ==========================================
const ScannerService = {
    scannerObj: null,

    init() {
        if(!this.scannerObj) {
            this.scannerObj = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
            this.scannerObj.render((text) => this.prosesInput(text));
        }
    },

    prosesImportKodeTeks() {
        const txt = document.getElementById('txt-import-code').value.trim();
        if(txt) this.prosesInput(txt);
    },

    prosesInput(rawInput) {
        let parsed = null;
        try { parsed = JSON.parse(atob(rawInput)); } 
        catch(e) {
            try { parsed = JSON.parse(rawInput); } 
            catch(err) { parsed = { username: rawInput }; }
        }

        if(parsed && parsed.username) {
            const targetNorm = Utils.normalizeUsername(parsed.username);
            let s = App.daftarSiswa.find(x => Utils.normalizeUsername(x.username) === targetNorm);

            if(s) {
                s.kehadiran = "Hadir (" + new Date().toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'}) + ")";
                localStorage.setItem('cbt_siswa', JSON.stringify(App.daftarSiswa));

                if(parsed.score !== undefined) {
                    App.rekapNilai = App.rekapNilai.filter(r => Utils.normalizeUsername(r.username) !== targetNorm);
                    App.rekapNilai.push({
                        username: s.username,
                        nama: s.nama,
                        benar: parsed.benar,
                        salah: parsed.salah,
                        score: parsed.score,
                        status: parsed.status,
                        waktu: parsed.waktu || new Date().toLocaleString('id-ID')
                    });
                    localStorage.setItem('cbt_rekap', JSON.stringify(App.rekapNilai));
                    s.status = "Selesai (" + parsed.score + ")";
                    localStorage.setItem('cbt_siswa', JSON.stringify(App.daftarSiswa));
                    alert(`BERHASIL: Absensi & Nilai Siswa ${s.nama} (${s.username}) [Nilai: ${parsed.score}] Dientri!`);
                } else {
                    alert(`BERHASIL: Absensi Kehadiran Siswa ${s.nama} (${s.username}) Dicatat!`);
                }
                document.getElementById('txt-import-code').value = '';
                App.renderAdminTables();
            } else {
                alert(`Siswa dengan Username "${parsed.username}" (Format: ${targetNorm}) tidak ditemukan!`);
            }
        } else {
            alert("Format tidak valid!");
        }
    }
};

// ==========================================
// 6. MAIN APP CONTROLLER
// ==========================================
const App = {
    daftarSiswa: JSON.parse(localStorage.getItem('cbt_siswa')) || [],
    rekapNilai: JSON.parse(localStorage.getItem('cbt_rekap')) || [],
    kopSekolahImg: localStorage.getItem('cbt_kop_sekolah') || '',
    activeUser: null,

    init() {
        if(this.daftarSiswa.length === 0) this.generateAuto36Siswa(false);
    },

    showView(viewId) {
        ['view-login', 'view-konfirmasi', 'view-exam', 'view-hasil', 'view-admin-login', 'view-admin-dashboard'].forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });
        document.getElementById(viewId).classList.remove('hidden');
    },

    handleLoginSiswa(e) {
        e.preventDefault();
        const uInput = document.getElementById('login-username').value;
        const pInput = document.getElementById('login-password').value.trim();
        const targetNorm = Utils.normalizeUsername(uInput);

        const found = this.daftarSiswa.find(s => Utils.normalizeUsername(s.username) === targetNorm && s.password === pInput);
        if(!found) return alert(`Username (${targetNorm}) atau Password salah!`);

        const rekapExist = this.rekapNilai.find(r => Utils.normalizeUsername(r.username) === targetNorm);
        if(rekapExist) return alert("Anda sudah menyelesaikan ujian ini dengan nilai: " + rekapExist.score);

        this.activeUser = found;
        this.activeUser.kehadiran = "Hadir (" + new Date().toLocaleTimeString('id-ID', {hour:'2-digit', minute:'2-digit'}) + ")";
        localStorage.setItem('cbt_siswa', JSON.stringify(this.daftarSiswa));

        document.getElementById('konf-nama').innerText = this.activeUser.nama;
        document.getElementById('konf-user').innerText = this.activeUser.username;
        this.showView('view-konfirmasi');
    },

    handleLoginAdmin(e) {
        e.preventDefault();
        if(document.getElementById('admin-pass').value === 'admin123') {
            this.showView('view-admin-dashboard');
            this.renderAdminTables();
            if(this.kopSekolahImg) {
                document.getElementById('box-preview-kop').classList.remove('hidden');
                document.getElementById('img-preview-kop').src = this.kopSekolahImg;
            }
        } else alert("Password Admin Salah!");
    },

    switchAdminTab(tabId) {
        ['tab-rekap', 'tab-siswa', 'tab-import', 'tab-pengaturan'].forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });
        document.getElementById(tabId).classList.remove('hidden');
        this.renderAdminTables();
        if(tabId === 'tab-import') ScannerService.init();
    },

    // Render Tabel di Dashboard Admin (Sudah ditambahkan tombol Reset & Hapus Per Siswa)
    renderAdminTables() {
        const tbodyRekap = document.getElementById('tbl-body-rekap');
        tbodyRekap.innerHTML = this.rekapNilai.length === 0 ? `<tr><td colspan="8" class="text-center p-6 text-slate-500">Belum ada data nilai tersimpan.</td></tr>` : '';
        this.rekapNilai.forEach((r, i) => {
            tbodyRekap.innerHTML += `
                <tr class="hover:bg-slate-950 border-b border-slate-800/60 transition">
                    <td class="p-3 text-slate-400">${i+1}</td>
                    <td class="p-3 font-mono font-bold text-indigo-400">${r.username}</td>
                    <td class="p-3 font-semibold text-slate-200">${r.nama}</td>
                    <td class="p-3 text-emerald-400 font-bold">${r.benar}</td>
                    <td class="p-3 text-rose-400 font-bold">${r.salah}</td>
                    <td class="p-3 font-black text-sm text-white">${r.score}</td>
                    <td class="p-3"><span class="px-2.5 py-1 rounded-lg text-[10px] font-bold ${r.score>=75?'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20':'bg-rose-500/10 text-rose-400 border border-rose-500/20'}">${r.status}</span></td>
                    <td class="p-3 text-center"><button onclick="App.resetUjian('${r.username}')" title="Hapus Hasil Ujian" class="text-rose-400 hover:text-rose-300 transition"><i class="fa-solid fa-trash"></i></button></td>
                </tr>
            `;
        });

        const tbodySiswa = document.getElementById('tbl-body-siswa');
        tbodySiswa.innerHTML = this.daftarSiswa.length === 0 ? `<tr><td colspan="7" class="text-center p-6 text-slate-500">Belum ada data siswa. Silakan unggah CSV atau generate otomatis.</td></tr>` : '';
        this.daftarSiswa.forEach((s, i) => {
            tbodySiswa.innerHTML += `
                <tr class="hover:bg-slate-950 border-b border-slate-800/60 transition">
                    <td class="p-3 text-slate-400">${i+1}</td>
                    <td class="p-3 font-mono font-bold text-indigo-400">${s.username}</td>
                    <td class="p-3 font-mono text-slate-500">${s.password}</td>
                    <td class="p-3 font-semibold text-slate-200">${s.nama}</td>
                    <td class="p-3 text-center"><span class="px-2.5 py-1 rounded-lg text-[10px] font-bold ${s.kehadiran&&s.kehadiran!=='Belum Hadir'?'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20':'bg-slate-800 text-slate-400'}">${s.kehadiran || 'Belum Hadir'}</span></td>
                    <td class="p-3 text-center"><span class="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-slate-800 text-slate-300">${s.status || 'Belum Ujian'}</span></td>
                    <td class="p-3 text-center flex justify-center gap-1.5">
                        <button onclick="App.resetUjian('${s.username}')" title="Reset Ujian" class="bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-400 px-2 py-1 rounded-lg text-[10px] font-bold transition">
                            Reset
                        </button>
                        <button onclick="App.hapusSiswaPerSiswa('${s.username}')" title="Hapus Akun Siswa" class="bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 px-2 py-1 rounded-lg text-[10px] font-bold transition">
                            <i class="fa-solid fa-trash-can"></i> Hapus
                        </button>
                    </td>
                </tr>
            `;
        });
    },

    // 1. Fungsi Hapus Data Per Siswa
    hapusSiswaPerSiswa(uname) {
        const norm = Utils.normalizeUsername(uname);
        if(confirm(`Yakin ingin menghapus akun siswa ${norm}? Data rekap nilai siswa ini juga akan terhapus.`)) {
            // Hapus dari daftar siswa
            this.daftarSiswa = this.daftarSiswa.filter(s => Utils.normalizeUsername(s.username) !== norm);
            localStorage.setItem('cbt_siswa', JSON.stringify(this.daftarSiswa));

            // Hapus juga rekap nilainya jika ada
            this.rekapNilai = this.rekapNilai.filter(r => Utils.normalizeUsername(r.username) !== norm);
            localStorage.setItem('cbt_rekap', JSON.stringify(this.rekapNilai));

            this.renderAdminTables();
        }
    },

    // 2. Fungsi Hapus Semua Data Siswa sekaligus
    hapusSemuaSiswa() {
        if(this.daftarSiswa.length === 0) return alert("Daftar siswa sudah kosong!");
        if(confirm("PERINGATAN: Yakin ingin menghapus SELURUH data siswa? Semua akun siswa dan rekap nilai terkait akan dihapus permanen.")) {
            this.daftarSiswa = [];
            this.rekapNilai = [];
            localStorage.removeItem('cbt_siswa');
            localStorage.removeItem('cbt_rekap');
            this.renderAdminTables();
            alert("Semua data siswa berhasil dibersihkan!");
        }
    }

    generateAuto36Siswa(confirmReq = true) {
        if(!confirmReq || confirm("Generate ulang default 36 siswa (S001 - S036)?")) {
            this.daftarSiswa = [];
            for(let i=1; i<=36; i++) {
                let pad = i < 10 ? '00' + i : (i < 100 ? '0' + i : '' + i);
                this.daftarSiswa.push({
                    username: 'S' + pad,
                    password: 'pass' + i,
                    nama: 'Siswa Peserta ' + i,
                    kehadiran: 'Belum Hadir',
                    status: 'Belum Ujian'
                });
            }
            localStorage.setItem('cbt_siswa', JSON.stringify(this.daftarSiswa));
            if(confirmReq) this.renderAdminTables();
        }
    },

    unggahSiswaCSV() {
        const file = document.getElementById('file-siswa-csv').files[0];
        if(!file) return alert("Pilih file CSV!");
        const reader = new FileReader();
        reader.onload = (e) => {
            const lines = e.target.result.split(/\r\n|\n/);
            let count = 0;
            lines.forEach((line, idx) => {
                if(idx===0 || !line.trim()) return;
                const cols = line.split(',');
                if(cols.length>=3) {
                    const u = Utils.normalizeUsername(cols[0].replace(/"/g,''));
                    const p = cols[1].replace(/"/g,'').trim();
                    const n = cols[2].replace(/"/g,'').trim();
                    if(u && p && n) {
                        this.daftarSiswa = this.daftarSiswa.filter(s => Utils.normalizeUsername(s.username) !== u);
                        this.daftarSiswa.push({ username: u, password: p, nama: n, kehadiran: 'Belum Hadir', status: 'Belum Ujian' });
                        count++;
                    }
                }
            });
            localStorage.setItem('cbt_siswa', JSON.stringify(this.daftarSiswa));
            alert(`BERHASIL: Memproses ${count} data siswa dari CSV!`);
            this.renderAdminTables();
        };
        reader.readAsText(file);
    },

    resetUjian(uname) {
        const norm = Utils.normalizeUsername(uname);
        if(confirm(`Reset ujian untuk ${norm}?`)) {
            this.rekapNilai = this.rekapNilai.filter(r => Utils.normalizeUsername(r.username) !== norm);
            localStorage.setItem('cbt_rekap', JSON.stringify(this.rekapNilai));
            let s = this.daftarSiswa.find(s => Utils.normalizeUsername(s.username) === norm);
            if(s) s.status = "Belum Ujian";
            localStorage.setItem('cbt_siswa', JSON.stringify(this.daftarSiswa));
            this.renderAdminTables();
        }
    }
};

// Inisialisasi Aplikasi Saat Halaman Siap
document.addEventListener("DOMContentLoaded", () => App.init());