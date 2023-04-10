import { get } from "https://bukulapak.github.io/api/process.js";
import { isiTablePresensi, isiTabelJamRapat, isiTabelLokasi, isiTabelRuangan, isiTabelTamu, isiTabelUniversitas } from "./controller/get.js";
import { urlAPI, urlAPIJamRapat, urlAPILokasi, urlAPIRuangan, urlAPITamu, urlAPIUniversitas } from "./config/url.js";
get(urlAPI, isiTablePresensi);
get(urlAPIJamRapat, isiTabelJamRapat);
get(urlAPILokasi, isiTabelLokasi);
get(urlAPIRuangan, isiTabelRuangan);
get(urlAPITamu, isiTabelTamu );
get(urlAPIUniversitas, isiTabelUniversitas);