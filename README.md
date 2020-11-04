# Blog do Código

[![Javascript](https://i.ibb.co/cgMc4Vc/javascript.png)](https://i.ibb.co/cgMc4Vc/javascript.png)

## Características principais

* API REST feita em Javascript para Node.js
* Sistema de autenticação com JSON Web tokens (JWT)
* Implementa refresh tokens que atualizam os JSON Web tokens  
* Utiliza um banco de dados chave-valor em memória.
* Documentação interativa com Swagger
* Multiplataforma
  - Preparado para Windows, macOS e Linux.

## Como usar

Para executar este aplicativo, você precisará do [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) (que vem com o [npm](http://npmjs.com)) e [Redis](https://redis.io/download) instalados no seu computador. Na linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/stanycruz/blog-do-codigo.git

# Vá para o repositório
$ cd blog-do-codigo

# Instale as dependências
$ npm install

# Execute o aplicativo
$ npm start
```

Observação: se você estiver usando Windows, existe uma versão do [Redis](https://github.com/microsoftarchive/redis/releases) que funciona como um Serviço do Windows.

## Créditos

Este software usa os seguintes pacotes de código aberto:

- [Node.js](https://nodejs.org/)
- [Redis](https://redis.io/download)
- [Redis para Windows](https://github.com/microsoftarchive/redis/releases)
- [Swagger](https://swagger.io/)