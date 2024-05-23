const { Firestore } = require("@google-cloud/firestore");

async function getData() {
  const db = new Firestore({
    projectId: "shaped-kite-424108-q5",
    databaseId: "pred-store",
    keyFilename: "shaped-kite-424108-q5-8413e08f464e.json",
  });
  const snapshot = await db.collection("predictions").get();

  const data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}

module.exports = { getData };
