const { Firestore } = require("@google-cloud/firestore");

async function storeData(id, data) {
  const db = new Firestore({
    projectId: "submissionmlgc-adisatria",
    keyFilename: "submissionmlgc-adisatria-cdcd0ade1304.json",
    databaseId: "database",
  });
  
  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
