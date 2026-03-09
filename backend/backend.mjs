import PocketBase from "pocketbase" ;
const pb = new PocketBase('http://127.0.0.1:8090') ;


export async function getArtistesByDate() {
  const records = await pb.collection('Representation').getFullList({
    sort: "date_heure",
    expand: "artistes",
  });
  return records
}

export async function getScenesByNom() {
  const records = await pb.collection("scenes").getFullList({
    sort: "Nom",
  });
  return records;
}

export async function getArtistesAlpha() {
  const records = await pb.collection("Artiste").getFullList({
    sort: "Nom",
  });
  return records;
}

export async function getArtisteById(id) {
  const records = await pb.collection("Artiste").getOne(id);
  return records;
}

export async function getSceneById(id) {
  const records = await pb.collection("Scenes").getOne(id);
  return records;
}

export async function getArtistesBySceneId(sceneId) {
  const records = await pb.collection("Representation").getFullList({
    filter: 'scene = "' + sceneId + '"',
    sort: "date_heure",
    expand: "artiste",
  });
  return records;
}

export async function getArtistesBySceneNom(nomScene) {
    const records = await pb.collection("Representation").getFullList({
        filter: 'scene = "' + nomScene + '"',
        sort: "date_heure",
        expand: "artistes",
    });
    return records;
}

export async  function upsertArtiste(data, id) {
    if (id) {
        const records = await pb.collection("Artiste").update(id, data);
        return records;
    } else {
    const records = await pb.collection("Artiste").create(data);
    return records;
  }
}

export async function upsertScene(data, id) {
  if (id) {
    const records = await pb.collection("Scenes").update(id, data);
    return records;
  } else {
    const records = await pb.collection("Scenes").create(data);
    return records;
  }
}