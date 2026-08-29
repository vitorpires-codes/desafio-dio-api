<div align="center">

  <img src="./.github/assets/F1-logo.png" alt="Logo" height="200">
  <h1 align="center"><strong>Formula 1 - Desafio da DIO</strong></h1>
  <p align="center">
    API REST simples de Formula 1 feita com <b>Node.js</b> + <b>Fastify</b>.<br>
    Simulação completa de CRUD (Create, Read, Update e Delete) de Times e Pilotos,<br>
    tudo em um único arquivo, pensado para iniciantes.
  </p>

</div>

---

## Sobre o Projeto

Este projeto é uma API REST que simula o gerenciamento de **Times** e **Pilotos** de Formula 1.

Conceitos usados:

- Criação de servidor com **Fastify**
- Rotas HTTP (GET, POST, PUT e DELETE)
- Manipulação de arrays em memória
- Retorno de status codes corretos
- CORS liberado para testes

---

## Funcionalidades

### Teams (Times)
- Listar todos os times
- Buscar um time pelo ID
- Criar um novo time
- Atualizar um time existente
- Remover um time

### Drivers (Pilotos)
- Listar todos os pilotos
- Buscar um piloto pelo ID
- Criar um novo piloto
- Atualizar um piloto existente
- Remover um piloto

> **Importante:** Os dados ficam apenas na memória do servidor.  
> Quando o servidor é reiniciado, tudo volta ao estado original.

---

## Tecnologias Utilizadas

- **Node.js**
- **Fastify** (servidor HTTP)
- **@fastify/cors** (liberação de CORS)
- **TypeScript** (ou JavaScript puro, dependendo da versão)

---