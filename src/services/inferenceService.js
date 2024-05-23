const tf = require("@tensorflow/tfjs-node");
const { InputError } = require("../exceptions/InputError");

async function predictClassification(model, image) {
  try {
    const tensor = tf.node
      .decodeJpeg(image)
      .resizeNearestNeighbor([224, 224])
      .expandDims()
      .toFloat();

    const prediction = model.predict(tensor);

    const classes = ["Non-cancer", "Cancer"];

    const classResult = prediction.dataSync()[0] > 0.5 ? 1 : 0;
    const label = classes[classResult];

    let suggestion;

    if (label === "Cancer") {
      suggestion = "Anda terkena penyakit kanker. Silahkan lakukan pemeriksaan khusus";
    }

    if (label === "Non-cancer") {
      suggestion = "Anda tidak terkena penyakit kanker";
    }

    return { label, suggestion };
  } catch (error) {
    throw new InputError("Terjadi kesalahan dalam melakukan prediksi");
  }
}

module.exports = { predictClassification };
