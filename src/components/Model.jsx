import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

const Model = () => {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    // Crear y entrenar un modelo simple
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

    // Datos de entrenamiento simples (X, Y)
    const xs = tf.tensor([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor([1, 2, 3, 4], [4, 1]);

    // Entrenar el modelo
    model.fit(xs, ys, { epochs: 10 }).then(() => {
      // Hacer una predicción
      const output = model.predict(tf.tensor([5], [1, 1]));
      setPrediction(output.dataSync()[0]);
    });
  }, []);

  return (
    <div>
      <h2>Predicción de IA:</h2>
      {prediction !== null ? (
        <p>El modelo predice el valor: {prediction}</p>
      ) : (
        <p>Entrenando el modelo...</p>
      )}
    </div>
  );
};

export default Model;
