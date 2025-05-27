from flask import Flask, request, jsonify
from flask_cors import CORS # Importe a extensão

app = Flask(__name__)
CORS(app)

# Lista para simular um armazenamento temporário dos dados do formulário
# Em um projeto real, esses dados iriam para um banco de dados (MongoDB, PostgreSQL, etc.)
dados_recebidos_historico = []

# Rota para receber os dados do formulário
@app.route('/receber-dados', methods=['POST'])
def receber_dados():
    if request.is_json:
        dados_json = request.get_json()
        
        nome = dados_json.get('nome')
        email = dados_json.get('email')
        mensagem = dados_json.get('mensagem')
        
        # Adiciona os dados recebidos à nossa lista de histórico
        dados_recebidos_historico.append(dados_json)
        
        print(f"Dados recebidos do formulário e armazenados:")
        print(f"Nome: {nome}")
        print(f"Email: {email}")
        print(f"Mensagem: {mensagem}")
        
        return jsonify({"mensagem": "Dados recebidos com sucesso!", "dados": dados_json}), 200
    else:
        return jsonify({"erro": "A requisição deve ser JSON"}), 400

# ---

# NOVA ROTA: Endpoint para VISUALIZAR TODOS os dados que foram recebidos
@app.route('/visualizar-historico', methods=['GET'])
def visualizar_historico():
    # Retorna todos os dados que foram armazenados na lista
    return jsonify(dados_recebidos_historico), 200

# ---

if __name__ == '__main__':
    app.run(debug=True)