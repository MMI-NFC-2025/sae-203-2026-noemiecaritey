import {getArtistesByDate, getScenesByNom, getArtistesAlpha, getArtisteById, getSceneById, getArtistesBySceneId, getArtistesBySceneNom, upsertArtiste, upsertScene} from "./backend.mjs" ;


try {
const records = await getArtistesByDate() ;
console.table((records)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await getScenesByNom() ;
console.table((records)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await getArtistesAlpha() ;
console.table((records)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await getArtisteById('kjk1536r7891mt2') ;
console.table((records)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await getSceneById('0xrhhbmjzosg2z6') ;
console.table((records)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await getArtistesBySceneId('39omep6ja35o2tt') ;
console.table((records)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await getArtistesBySceneNom('0xrhhbmjzosg2z6') ;
console.table((records)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await upsertArtiste({Nom: "test"}) ;
console.table((records)) ;
} catch (e) {
console.error(e) ;
}

try {
const records = await upsertScene({Nom: "test"}) ;
console.table((records)) ;
} catch (e) {
console.error(e) ;
}
