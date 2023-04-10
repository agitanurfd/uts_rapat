import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel, isiTabelJamRapat, isiTabelLokasi, isiTabelRuangan, isiTabelTamu, isiTabelUniversitas } from "../temp/tabel.js";
export function isiTablePresensi(results) {
    results.forEach(isiRow);
}
export function TabelJamRapat(results) {
    results.forEach(isiRowJamRapat);
}
export function TabelLokasi(results) {
    results.forEach(isiRowLokasi);
}
export function TabelRuangan(results) {
    results.forEach(isiRowRuangan);
}
export function TabelTamu(results) {
    results.forEach(isiRowTamu);
}
export function TabelUniversitas(results) {
    results.forEach(isiRowUniversitas);
}

function isiRow(value) {
    let content =
        isiTabel.replace("#LOKASI#", value.lokasi)
            .replace("#NOHP#", value.phone_number)
            .replace("#TAMU#", value.biodata.nama)
            .replace("#NO_HP_TAMU#", value.biodata.phone_number)
            .replace("#JURUSAN#", value.prodi.jurusan)
            .replace("#DATETIME#", value.datetime)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabel", content);
}
function isiRowJamRapat(value) {
    let content =
        isiTabelJamRapat.replace("#DURASI#", value.durasi)
            .replace("#JAM_RAPAT#", value.jam_rapat)
            .replace("#HARI#", value.hari)
            .replace("#TANGGAL#", value.tanggal)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelJamRapat", content);
}
function isiRowLokasi(value) {
    let content =
        isiTabelLokasi.replace("#LOKASI#", value.lokasi)
            .replace("#ALAMAT#", value.alamat)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelLokasi", content);
}
function isiRowRuangan(value) {
    let content =
        isiTabelRuangan.replace("#NO_RUANGAN#", value.no_ruangan)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelRuangan", content);
}
function isiRowTamu(value) {
    let content =
        isiTabelTamu.replace("#NAMA#", value.nama)
            .replace("#PHONE_NUMBER#", value.phone_number)
            .replace("#JABATAN#", value.jabatan)
            .replace("#JAM_KERJA#", value.jam_kerja)
            .replace("#HARI_KERJA#", value.hari_kerja)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelTamu", content);
}
function isiRowUniversitas(value) {
    let content =
        isiTabelUniversitas.replace("#JURUSAN#", value.jurusan)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
    addInner("iniTabelUniversitas", content);
}