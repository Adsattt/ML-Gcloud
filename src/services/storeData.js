const { Firestore } = require("@google-cloud/firestore");

async function storeData(id, data) {
  const db = new Firestore({
    projectId: "shaped-kite-424108-q5",
    databaseId: "pred-store",
    keyFilename: "shaped-kite-424108-q5-8413e08f464e.json",
  });

  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
