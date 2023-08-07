# Animais Fantásticos 🦊
[Acesse o deploy da aplicação](#-acesse-o-deploy-da-aplicação) | [Sobre o projeto](#%EF%B8%8F-sobre-o-projeto) | [Funcionalidades](#%EF%B8%8F-funcionalidades) | [Processo de desenvolvimento e aprendizagem](#-processo-de-desenvolvimento-e-aprendizagem) | [Tecnologias](#%EF%B8%8F-tecnologias) | [Rodando o projeto localmente](#-rodando-o-projeto-localmente)

![Preview](/img/preview.png)

## 🔗 Acesse o deploy da aplicação
[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://welisonw.github.io/animais-fantasticos/)

## 🗒️ Sobre o projeto
Animais Fantásticos é um site de uma organização fictícia com informações de alguns animais que foi desenvolvido ao longo do curso de JavaScript Completo ES6 da Origamid, utilizando de conceitos como manipulação do DOM, consumo de APIs, modularização de scripts, aplicação de pacotes NPM, dentre outras _features_. O site é totalmente responsivo para vários tamanhos de telas e dispositivos!

## ⚙️ Funcionalidades
- **Scroll suave**\
Efeito para adicionar uma navegação mais suave pela página, garantindo que, ao clicar em um link interno, a página role suavemente até a seção desejada.

- **Dropdown menu**\
Efeito adicionado ao elemento Sobre, no menu principal, onde ao se passar o mouse por cima ou clicar abre-se um submenu com links para outras áreas do site relacionadas ao Sobre da aplicação.

- **Menu mobile**\
Menu hamburguer para dispositivos com resoluções menores.

- **Modal**\
Modal pop-up, que é exibido na tela quando o usuário clica em Login. Modal contém campo de login e senha.

- **CloseModal**\
Funcionalidade para fechar o modal sempre que o usuário clicar no X ou fora dele (modal) ou quando pressionar a tecla ESC.

- **Navegação por tabs**\
Utilizada na primeira seção do site, em que ao clicar na imagem de um animal o texto referente a ele é colocado em tela, ocultado o dos demais animais.

- **Animação ao scroll**\
Efeito para carregar na tela cada seção da página, de forma animada, somente quando estiver próxima de ser exibida.

- **Accordion list**\
Adicionado a seção FAQ, possibilitando exibir ou esconder uma resposta.

- **Carrossel de fotos**\
Criação de slide de fotos dos animais. Usuário pode passar de foto arrastando a foto atual ou clicando sobre o icone da foto do animal desejado.

- **Fetch número de animais**\
Funcionalidade para exercitar como se trabalha de forma assíncrona em momentos que se depende da resposta de uma API. Criou-se um JSON com informações sobre total de animais de cada espécie, que é carregado de forma assíncrona e exibido na seção Números.

- **Fetch de dados de bitcoin**\
Funcionalidade para exercitar requisições assíncronas. Criou-se uma área na seção de contato para solicitar doações. Para preencher esse campo, faz-se requsição à uma API externa que retorna o valor de um Bitcoin em Real. É sugerido o valor de R$ 100,00 para doação, sendo exibido na tela a quantia equivalente em Bitcoin.

- **Tooltip**\
Efeito de criar uma caixa de texto estilo pop-up, quando o mouse é passado por cima do mapa na seção de contatos.

## 📈 Processo de desenvolvimento e aprendizagem
A aplicação foi desenvolvida ao longo do curso conforme foram estudados os conceitos de JavaScript relevantes a cada uma dessas _features_, o que tornou o aprendizado enriquecedor, porque era possível linkar a teoria com a prática e ter real noção do que era produzido.

A consolidação de todo o aprendizado se deu ao final do curso no processo de refatoração do projeto, onde foi possível ver o código em sua estrutura inicial e como era possível melhorá-lo, de forma a possibilitar o reúso de código e deixá-lo mais legível.

## 🛠️ Tecnologias
- [HTML5](https://html.spec.whatwg.org/multipage/)
- [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en)
- [ESLint](https://eslint.org/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)

## 💻 Rodando o projeto localmente
```bash
# Clone este repositório
$ git clone https://github.com/welisonw/animais-fantasticos.git

# Entre na pasta do projeto
$ cd animais-fantasticos

# Instale as dependências
$ npm install  ou  yarn install

# Inicie o projeto no modo de desenvolvimento
$ npm run dev  ou  yarn run dev

# Rode o arquivo index.html em um servidor de desenvolvimento local (Ex.: Live Server)
```
