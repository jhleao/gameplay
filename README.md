![cover](.github/cover.png?style=flat)

<p align="center">
  <p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-1D2766" alt="License MIT">
  </a>
  
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/jhleao/gameplay?color=1D2766">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jhleao/gameplay?color=1D2766">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jhleao/gameplay?color=1D2766">
  
  <a href="https://github.com/jhleao/gameplay/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jhleao/gameplay?color=1D2766">
  </a>

  <a href="https://github.com/jhleao/gameplay/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/jhleao/gameplay?color=1D2766">
  </a>
</p>
</p>


## 💻 Projeto
Este projeto foi desenvolvido inicialemnte durante a NLW#6, evento realizado pela [Rocksetseat](https://rocketseat.com.br/). As aulas foram ministradas pelo instrutor [Rodrigo Gonçalves](https://www.linkedin.com/in/rodrigo-gon%C3%A7alves-santana/).

O GamePlay é um aplicativo criado para lhe ajudar a organizar suas jogatinas com seus amigos. Com ele, você pode agendar e administrar partidas de jogos de forma integrada ao Discord.

## 📃 TODO
-   [ ] Notificações ao se aproximar de uma data marcada;
-   [ ] Separação de lista de partidas passadas e partidas futuras;
-   [ ] Integração com a API RAWG.io para acessar dados de jogos;
-   [ ] Adaptar o funcionamento dos agendamentos para incluírem o jogo selecionado;
-   [ ] Persistência de dados via backend;
-   [ ] Compartilhamento de agendamento com Deep Link;

## 🧪 Tecnologias

-   [ ] React Native
-   [ ] Typescript
-   [ ] Expo
-   [ ] Context API
-   [ ] Async Storage
-   [ ] OAuth2

## :hammer_and_wrench: Features 

-   [ ] Autenticação Social OAuth2 com servidor do Discord.
-   [ ] Obtém perfil do usuário cadastro no Discord (username e avatar);
-   [ ] Lista os servidores do Discord que o usuário faz parte;
-   [ ] Permite realizar o agendamento de partidas;
-   [ ] Permite filtrar as partidas por categoria;
-   [ ] Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
-   [ ] Compartilha o convite para ingressar no servidor do usuário;
-   [ ] Permite redirecionar o usuário para o seu próprio servidor;
-   [ ] Disponibiliza a função de Logout.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/0kv33XYjvOgvKGKHBaiR07/GamePlay-NLW-Together?node-id=58913%3A83). É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.


## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
expo start
```

Lembre-se de criar o seu App no servidor do Discord para obter as credencias de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).
 
 ```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```


## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
