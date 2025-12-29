<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre Nós - Opitweb | Rastreador de Preços Pet</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            padding: 60px 20px;
            color: white;
            animation: fadeInDown 1s ease-out;
        }

        header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        header .subtitle {
            font-size: 1.3em;
            opacity: 0.95;
            margin-bottom: 15px;
        }

        header .tagline {
            font-size: 1.1em;
            opacity: 0.9;
            font-style: italic;
        }

        .content {
            background: white;
            border-radius: 20px;
            padding: 50px;
            margin-bottom: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            animation: fadeInUp 1s ease-out;
        }

        .section {
            margin-bottom: 50px;
        }

        .section:last-child {
            margin-bottom: 0;
        }

        .section-header {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
        }

        .icon {
            font-size: 2.5em;
            margin-right: 15px;
        }

        .section h2 {
            color: #667eea;
            font-size: 2em;
            margin-bottom: 10px;
        }

        .section h3 {
            color: #764ba2;
            font-size: 1.5em;
            margin-bottom: 15px;
            margin-top: 20px;
        }

        .section p {
            font-size: 1.1em;
            color: #555;
            margin-bottom: 15px;
            text-align: justify;
        }

        .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }

        .value-card {
            background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
            padding: 25px;
            border-radius: 15px;
            border-left: 5px solid #667eea;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .value-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
        }

        .value-card h4 {
            color: #667eea;
            font-size: 1.3em;
            margin-bottom: 10px;
        }

        .value-card p {
            text-align: left;
            margin-bottom: 0;
        }

        .steps {
            display: flex;
            flex-direction: column;
            gap: 25px;
            margin-top: 30px;
        }

        .step {
            display: flex;
            align-items: start;
            background: #f8f9fa;
            padding: 25px;
            border-radius: 15px;
            transition: all 0.3s ease;
        }

        .step:hover {
            background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
            transform: translateX(10px);
        }

        .step-number {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5em;
            font-weight: bold;
            flex-shrink: 0;
            margin-right: 20px;
        }

        .step-content h4 {
            color: #667eea;
            font-size: 1.3em;
            margin-bottom: 8px;
        }

        .step-content p {
            text-align: left;
            margin-bottom: 0;
        }

        .highlight-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            margin: 30px 0;
            text-align: center;
        }

        .highlight-box p {
            color: white;
            font-size: 1.2em;
            margin-bottom: 0;
        }

        footer {
            text-align: center;
            padding: 30px;
            color: white;
            font-size: 0.9em;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            header h1 {
                font-size: 2em;
            }

            .content {
                padding: 30px 20px;
            }

            .section h2 {
                font-size: 1.6em;
            }

            .values-grid {
                grid-template-columns: 1fr;
            }

            .step {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .step-number {
                margin-right: 0;
                margin-bottom: 15px;
            }

            .step-content p {
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🐾 Opitweb</h1>
            <div class="subtitle">Seu Rastreador Gratuito de Preços Pet na Amazon</div>
            <div class="tagline">Nós unimos o amor pelos animais com a inteligência financeira. Nunca mais pague a mais por ração, brinquedos ou acessórios do seu pet favorito!</div>
        </header>

        <div class="content">
            <!-- Seção: O Que Somos -->
            <div class="section">
                <div class="section-header">
                    <span class="icon">🎯</span>
                    <div>
                        <h2>O Que Somos e a Nossa Missão</h2>
                        <h3>O Nosso Propósito</h3>
                    </div>
                </div>
                <p><strong>O Que Fazemos:</strong> A Opitweb é uma ferramenta gratuita de rastreamento de preços especializada em produtos para animais de estimação na Amazon. Nós monitoramos milhares de itens e te alertamos sobre as melhores ofertas no momento certo.</p>
                <p><strong>Missão:</strong> Simplificar a vida dos donos de pets, garantindo que eles economizem dinheiro sem comprometer a qualidade e o bem-estar dos seus companheiros.</p>
            </div>

            <!-- Seção: Nossa História -->
            <div class="section">
                <div class="section-header">
                    <span class="icon">📖</span>
                    <div>
                        <h2>Nossa História</h2>
                        <h3>A Conexão com os Pets</h3>
                    </div>
                </div>
                <p>A Opitweb nasceu quando percebemos o quão volátil é o preço dos produtos pet na Amazon. Como donos de animais de estimação, ficávamos frustrados por pagar preços diferentes pelo mesmo saco de ração toda semana.</p>
                <p>Decidimos criar uma solução que pudesse monitorar esses movimentos de mercado e notificar outros donos de pets. Hoje, somos uma comunidade dedicada a garantir que você tenha acesso aos melhores produtos com a máxima economia.</p>
            </div>

            <!-- Seção: Valores -->
            <div class="section">
                <div class="section-header">
                    <span class="icon">⭐</span>
                    <div>
                        <h2>Os Nossos Valores</h2>
                        <h3>Nossos Pilares</h3>
                    </div>
                </div>
                <div class="values-grid">
                    <div class="value-card">
                        <h4>💰 Economia Inteligente</h4>
                        <p>Foco em encontrar descontos reais, não apenas promoções superficiais.</p>
                    </div>
                    <div class="value-card">
                        <h4>🐕 Pet-First</h4>
                        <p>O bem-estar do seu animal é nossa prioridade; promovemos produtos de qualidade a preços justos.</p>
                    </div>
                    <div class="value-card">
                        <h4>🔍 Transparência</h4>
                        <p>Nosso serviço é gratuito. As ofertas são claras, sem pegadinhas.</p>
                    </div>
                </div>
            </div>

            <!-- Seção: Como Ajudamos -->
            <div class="section">
                <div class="section-header">
                    <span class="icon">🚀</span>
                    <div>
                        <h2>Como a Opitweb Ajuda Você</h2>
                        <h3>Seu Caminho para a Economia</h3>
                    </div>
                </div>
                <div class="steps">
                    <div class="step">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h4>Rastreie Seus Favoritos</h4>
                            <p>Você seleciona os produtos pet da Amazon que costuma comprar.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h4>Receba Alertas</h4>
                            <p>Nós te notificamos instantaneamente quando o preço atingir um valor ideal ou entrar em Oferta Relâmpago.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h4>Compre e Economize</h4>
                            <p>Clique, compre na Amazon e veja o dinheiro extra no seu bolso.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="highlight-box">
                <p>💚 Junte-se a milhares de donos de pets que já economizam com a Opitweb!</p>
            </div>
        </div>

        <footer>
            <p>&copy; 2025 Opitweb - Todos os direitos reservados</p>
            <p>Feito com ❤️ para você e seu pet</p>
        </footer>
    </div>
</body>
</html>
