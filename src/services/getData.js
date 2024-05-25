const { Firestore } = require("@google-cloud/firestore");

async function getData() {
  const db = new Firestore({
    projectId: "submissionmlgc-adisatria",
    keyFilename: "submissionmlgc-adisatria-cdcd0ade1304.json",
    databaseId: "database",
  });
  const snapshot = await db.collection("predictions").get();

  const data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}

module.exports = { getData };
