import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi, TabelJamRapat, TabelLokasi, TabelRuangan, TabelTamu, TabelUniversitas } from "./controller/get.js";
import { urlAPI, urlAPIJamRapat, urlAPILokasi, urlAPIRuangan, urlAPITamu, urlAPIUniversitas } from "./config/url.js";
get(urlAPI, isiTablePresensi);
get(urlAPIJamRapat, TabelJamRapat);
get(urlAPILokasi, TabelLokasi);
get(urlAPIRuangan, TabelRuangan);
get(urlAPITamu, TabelTamu );
get(urlAPIUniversitas, TabelUniversitas);