package com.aoh.ghumdim.cosineSim;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Component
public class TextToVectorConverter {

  private Map<String, Integer> vocabulary;
  private int totalDocuments;

  public TextToVectorConverter() {
    this.vocabulary = new HashMap<>();
    this.totalDocuments = 0;
  }

  // Add a document to the vocabulary
  public void addDocument(String[] document) {
    for (String word : document) {
      vocabulary.put(word, vocabulary.getOrDefault(word, 0) + 1);
    }
    totalDocuments++;
  }

  // Convert a document to its TF-IDF vector representation
  public List<Double> documentToVector(String[] document) {
    List<Double> vector = new ArrayList<>();
    for (String term : vocabulary.keySet()) {
      double tf = termFrequency(term, document);
      double idf = inverseDocumentFrequency(term);
      vector.add(tf * idf);
    }
    return vector;
  }

  // Calculate term frequency of a term in a document
  private double termFrequency(String term, String[] document) {
    double frequency = 0;
    for (String word : document) {
      if (term.equalsIgnoreCase(word)) {
        frequency++;
      }
    }
    return frequency / document.length;
  }

  // Calculate inverse document frequency of a term in the corpus
  private double inverseDocumentFrequency(String term) {
    if (vocabulary.containsKey(term)) {
      int documentFrequency = vocabulary.get(term);
      return Math.log((double) totalDocuments / (double) (documentFrequency + 1)) + 1; // add 1 to avoid zero division
    }
    return 0; // Term not found in vocabulary
  }
}
