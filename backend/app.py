from flask import Flask, request, jsonify
from flask_cors import CORS
import gensim
import random

model = gensim.models.KeyedVectors.load_word2vec_format('modele.bin', binary=True, unicode_errors='ignore')

app = Flask(__name__)
CORS(app)

def get_similar_words(word, topn=200):
    try:
        similar_words = model.most_similar(word, topn=topn)
        return [(w, float(score)) for w, score in similar_words]
    except KeyError:
        return None

def calculate_similarity(word1, word2):
    try:
        return float(model.similarity(word1, word2))
    except KeyError:
        return None

@app.route('/api/similar_words', methods=['GET'])
def similar_words():
    word = request.args.get('word')
    topn = request.args.get('topn', default=200, type=int)
    if not word:
        return jsonify({"error": "Le paramètre 'word' est requis."})
    result = get_similar_words(word, topn)
    if result is None:
        return jsonify({"error": f"Le mot '{word}' n'existe pas dans le vocabulaire."})
    return jsonify({"word": word, "similar_words": result})

@app.route('/api/distant_words', methods=['GET'])
def distant_words():
    word = request.args.get('word')
    topn = request.args.get('topn', default=200, type=int)
    if not word:
        return jsonify({"error": "Le paramètre 'word' est requis."}), 
    try:
        all_words = model.most_similar(word, topn=len(model.key_to_index))
        distant_words = sorted(all_words, key=lambda x: x[1])[:topn]
        return jsonify({"word": word, "distant_words": [(w, float(score)) for w, score in distant_words]})
    except KeyError:
        return jsonify({"error": f"Le mot '{word}' n'existe pas dans le vocabulaire."})

@app.route('/api/word_similarity', methods=['GET'])
def word_similarity():
    word1 = request.args.get('word1')
    word2 = request.args.get('word2')
    if not word1 or not word2:
        return jsonify({"error": "Les paramètres 'word1' et 'word2' sont requis."})
    result = calculate_similarity(word1, word2)
    if result is None:
        return jsonify({"error": f"Un ou les deux mots ('{word1}', '{word2}') n'existent pas dans le vocabulaire."})
    return jsonify({"word1": word1, "word2": word2, "similarity": result})

@app.route('/api/random_word', methods=['GET'])
def random_word():
    word_list = list(model.key_to_index.keys())
    random_word = random.choice(word_list)
    return jsonify({"random_word": random_word})

@app.route('/api/word_identical', methods=['GET'])
def word_identical():
    word1 = request.args.get('word1')
    word2 = request.args.get('word2')
    if not word1 or not word2:
        return jsonify({"error": "Les paramètres 'word1' et 'word2' sont requis."})

    if word1 == word2:
        return jsonify({"word1": word1, "word2": word2, "identical": True, "reason": "Les mots sont des chaînes identiques."})

    try:
        vector1 = model[word1]
        vector2 = model[word2]
        if (vector1 == vector2).all():
            return jsonify({"word1": word1, "word2": word2, "identical": True, "reason": "Les mots ont des vecteurs identiques."})
    except KeyError:
        return jsonify({"error": f"Un ou les deux mots ('{word1}', '{word2}') n'existent pas dans le vocabulaire."})

    return jsonify({"word1": word1, "word2": word2, "identical": False})

if __name__ == '__main__':
    app.run(debug=True, port=8000)
