package com.aoh.ghumdim.bm25;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CosineSimilarityService {

  public double cosineSimilarity(List<Double> vectorA, List<Double> vectorB) {
    // Compute dot product
    double dotProduct = dotProduct(vectorA, vectorB);

    // Compute magnitude of vector A
    double magnitudeA = magnitude(vectorA);

    // Compute magnitude of vector B
    double magnitudeB = magnitude(vectorB);

    // Compute cosine similarity
    if (magnitudeA != 0 && magnitudeB != 0) {
      return dotProduct / (magnitudeA * magnitudeB);
    } else {
      return 0.0; // Handle division by zero
    }
  }

  // Method to compute dot product of two vectors
  private double dotProduct(List<Double> vectorA, List<Double> vectorB) {
    double result = 0.0;
    int n = Math.min(vectorA.size(), vectorB.size());
    for (int i = 0; i < n; i++) {
      result += vectorA.get(i) * vectorB.get(i);
    }
    return result;
  }

  // Method to compute magnitude of a vector
  private double magnitude(List<Double> vector) {
    double sum = 0.0;
    for (Double value : vector) {
      sum += Math.pow(value, 2);
    }
    return Math.sqrt(sum);
  }
}
