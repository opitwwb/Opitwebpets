<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contato - Opitweb | Rastreador de Preços Pet</title>
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
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            padding: 60px 20px 40px;
            color: white;
            animation: fadeInDown 1s ease-out;
        }

        header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        header .subtitle {
            font-size: 1.4em;
            opacity: 0.95;
        }

        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
            animation: fadeInUp 1s ease-out;
        }

        .info-section, .form-section {
            background: white;
            border-radius: 20px;
            padding: 40px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .info-section h2, .form-section h2 {
            color: #667eea;
            font-size: 1.8em;
            margin-bottom: 20px;
        }

        .info-section p {
            font-size: 1.05em;
            color: #555;
            margin-bottom: 25px;
            line-height: 1.7;
        }

        .contact-methods {
            display: flex;
            flex-direction: column;
            gap: 20px;
            margin-bottom: 25px;
        }

        .contact-item {
            display: flex;
            align-items: start;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 10px;
            transition: all 0.3s ease;
        }

        .contact-item:hover {
            background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
            transform: translateX(5px);
        }

        .contact-icon {
            font-size: 1.8em;
            margin-right: 15px;
            flex-shrink: 0;
        }

        .contact-details h3 {
            color: #667eea;
            font-size: 1.1em;
            margin-bottom: 5px;
        }

        .contact-details p {
            color: #666;
            font-size: 1em;
            margin-bottom: 0;
        }

        .contact-details a {
            color: #667eea;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .contact-details a:hover {
            color: #764ba2;
        }

        .hours-box {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }

        .hours-box p {
            color: white;
            margin-bottom: 0;
            font-size: 1.05em;
        }

        .form-section form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            font-weight: 600;
            color: #333;
            margin-bottom: 8px;
            font-size: 1em;
        }

        .form-group label .required {
            color: #e74c3c;
        }

        .form-group input,
        .form-group textarea {
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1em;
            font-family: inherit;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group textarea {
            min-height: 120px;
            resize: vertical;
        }

        .submit-btn {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 40px;
            border: none;
            border-radius: 10px;
            font-size: 1.1em;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .submit-btn:active {
            transform: translateY(0);
        }

        footer {
            background: white;
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            margin-top: 30px;
        }

        footer p {
            color: #666;
            font-size: 1.05em;
            line-height: 1.6;
        }

        footer .brand {
            color: #667eea;
            font-weight: 600;
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

        @media (max-width: 968px) {
            .content-wrapper {
                grid-template-columns: 1fr;
            }

            header h1 {
                font-size: 2.2em;
            }

            header .subtitle {
                font-size: 1.2em;
            }

            .info-section, .form-section {
                padding: 30px 25px;
            }
        }

        @media (max-width: 480px) {
            header h1 {
                font-size: 1.8em;
            }

            .info-section, .form-section {
                padding: 25px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>🐾 Conecte-se com a Equipe Opitweb</h1>
            <p class="subtitle">Estamos aqui para ajudar você a economizar!</p>
        </header>

        <div class="content-wrapper">
            <!-- Seção de Informações -->
            <div class="info-section">
                <h2>Fale com a OpitWeb</h2>
                <p>Quer saber mais sobre como economizar nas suas próximas compras na Amazon? A equipe da OpitWeb está pronta para te ajudar!</p>
                <p>Se você tiver dúvidas, sugestões, ou encontrou algum problema com um alerta de preço, entre em contato conosco pelo formulário ao lado. Responderemos o mais rápido possível.</p>

                <div class="contact-methods">
                    <div class="contact-item">
                        <span class="contact-icon">📧</span>
                        <div class="contact-details">
                            <h3>E-mail Principal</h3>
                            <p><a href="mailto:opitweb@gmail.com">opitweb@gmail.com</a></p>
                            <p style="font-size: 0.9em; color: #888; margin-top: 3px;">Para dúvidas gerais e comerciais</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <span class="contact-icon">📱</span>
                        <div class="contact-details">
                            <h3>Telefone</h3>
                            <p><a href="tel:+5511961017230">+55 (11) 96101-7230</a></p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <span class="contact-icon">🛠️</span>
                        <div class="contact-details">
                            <h3>Suporte Técnico</h3>
                            <p><a href="mailto:opitweb@gmail.com">opitweb@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                <div class="hours-box">
                    <p><strong>⏰ Horário de Atendimento</strong></p>
                    <p>Segunda a Sexta-feira, das 9h às 18h</p>
                </div>
            </div>

            <!-- Seção do Formulário -->
            <div class="form-section">
                <h2>Formulário de Contato</h2>
                <form id="contactForm" action="#" method="POST">
                    <div class="form-group">
                        <label for="firstName">Primeiro Nome <span class="required">*</span></label>
                        <input type="text" id="firstName" name="firstName" required placeholder="Digite seu primeiro nome">
                    </div>

                    <div class="form-group">
                        <label for="email">Endereço de E-mail <span class="required">*</span></label>
                        <input type="email" id="email" name="email" required placeholder="seu@email.com">
                    </div>

                    <div class="form-group">
                        <label for="message">Mensagem <span class="required">*</span></label>
                        <textarea id="message" name="message" required placeholder="Como podemos ajudar você?"></textarea>
                    </div>

                    <button type="submit" class="submit-btn">Enviar Mensagem</button>
                </form>
            </div>
        </div>

        <footer>
            <p><span class="brand">A OpitWeb</span> é um rastreador de preços gratuito da Amazon. Receba alertas e economize em produtos pet que você ama — sem precisar ficar caçando ofertas.</p>
            <p style="margin-top: 15px; font-size: 0.9em;">&copy; 2025 Opitweb - Feito com ❤️ para você e seu pet</p>
        </footer>
    </div>

    <script>
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica para enviar o formulário
            // Por exemplo, usando fetch para enviar para um backend
            
            const formData = {
                firstName: document.getElementById('firstName').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };
            
            console.log('Formulário enviado:', formData);
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve. 🐾');
            
            // Limpar o formulário
            this.reset();
        });
    </script>
</body>
</html>
