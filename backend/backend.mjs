import PocketBase from "pocketbase" ;
const pb = new PocketBase('http://127.0.0.1:8090') ;


export async function getArtistesByDate() {
  const records = await pb.collection('representation').getFullList({
    sort: "date_heure",
    expand: "artiste",
  });
  return records
}

export async function getScenesByNom() {
  const records = await pb.collection("scene").getFullList({
    sort: "nom",
  });
  return records;
}

export async function getArtistesAlpha() {
  const records = await pb.collection("artiste").getFullList({
    sort: "nom",
  });
  return records;
}

export async function getArtisteById(id) {
  const records = await pb.collection("artiste").getOne(id);
  return records;
}

export async function getSceneById(id) {
  const records = await pb.collection("scene").getOne(id);
  return records;
}

export async function getArtistesBySceneId(sceneId) {
  const records = await pb.collection("representation").getFullList({
    filter: 'scene = "' + sceneId + '"',
    sort: "date_heure",
    expand: "artiste",
  });
  return records;
}

export async function getArtistesBySceneNom(nomScene) {
    const records = await pb.collection("representation").getFullList({
        filter: 'scene = "' + nomScene + '"',
        sort: "date_heure",
        expand: "artiste",
    });
    return records;
}

export async  function upsertArtiste(data, id) {
    if (id) {
        const records = await pb.collection("artiste").update(id, data);
        return records;
    } else {
    const records = await pb.collection("artiste").create(data);
    return records;
  }
}

export async function upsertScene(data, id) {
  if (id) {
    const records = await pb.collection("scene").update(id, data);
    return records;
  } else {
    const records = await pb.collection("scene").create(data);
    return records;
  }
}