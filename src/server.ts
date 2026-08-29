import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

// Dados iniciais
let teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 7, name: "Williams", base: "Grove, United Kingdom" },
  { id: 8, name: "Racing Bulls", base: "Faenza, Italy" },
  { id: 9, name: "Haas", base: "Kannapolis, United States" },
  { id: 10, name: "Audi", base: "Hinwil, Switzerland" },
  { id: 11, name: "Cadillac", base: "Fishers, Indiana, United States" },
];

let drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Isack Hadjar", team: "Red Bull Racing" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
  { id: 4, name: "Oscar Piastri", team: "McLaren" },
  { id: 5, name: "George Russell", team: "Mercedes" },
  { id: 6, name: "Kimi Antonelli", team: "Mercedes" },
  { id: 7, name: "Charles Leclerc", team: "Ferrari" },
  { id: 8, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin" },
  { id: 11, name: "Pierre Gasly", team: "Alpine" },
  { id: 12, name: "Franco Colapinto", team: "Alpine" },
  { id: 13, name: "Alexander Albon", team: "Williams" },
  { id: 14, name: "Carlos Sainz", team: "Williams" },
  { id: 15, name: "Esteban Ocon", team: "Haas" },
  { id: 16, name: "Oliver Bearman", team: "Haas" },
  { id: 17, name: "Nico Hülkenberg", team: "Audi" },
  { id: 18, name: "Gabriel Bortoleto", team: "Audi" },
  { id: 19, name: "Sergio Pérez", team: "Cadillac" },
  { id: 20, name: "Valtteri Bottas", team: "Cadillac" },
  { id: 21, name: "Liam Lawson", team: "Racing Bulls" },
  { id: 22, name: "Arvid Lindblad", team: "Racing Bulls" },
];

// ==================== TEAMS ====================

// GET - Listar todos os times
server.get("/teams", async (request, reply) => {
  reply.code(200).send({ teams });
});

// GET - Buscar um time pelo id
server.get("/teams/:id", async (request, reply) => {
  const id = Number(request.params.id);
  const team = teams.find((t) => t.id === id);

  if (!team) {
    return reply.code(404).send({ message: "Time não encontrado" });
  }

  return reply.code(200).send({ team });
});

// POST - Criar um novo time
server.post("/teams", async (request, reply) => {
  const { name, base } = request.body;

  if (!name || !base) {
    return reply.code(400).send({ message: "Name e base são obrigatórios" });
  }

  const newId = teams.length > 0 ? Math.max(...teams.map((t) => t.id)) + 1 : 1;

  const newTeam = {
    id: newId,
    name,
    base,
  };

  teams.push(newTeam);

  return reply.code(201).send({ team: newTeam });
});

// PUT - Atualizar um time
server.put("/teams/:id", async (request, reply) => {
  const id = Number(request.params.id);
  const { name, base } = request.body;

  const index = teams.findIndex((t) => t.id === id);

  if (index === -1) {
    return reply.code(404).send({ message: "Time não encontrado" });
  }

  if (name) teams[index].name = name;
  if (base) teams[index].base = base;

  return reply.code(200).send({ team: teams[index] });
});

// DELETE - Remover um time
server.delete("/teams/:id", async (request, reply) => {
  const id = Number(request.params.id);
  const index = teams.findIndex((t) => t.id === id);

  if (index === -1) {
    return reply.code(404).send({ message: "Time não encontrado" });
  }

  teams.splice(index, 1);

  return reply.code(200).send({ message: "Time removido com sucesso" });
});

// ==================== DRIVERS ====================

// GET - Listar todos os pilotos
server.get("/drivers", async (request, reply) => {
  reply.code(200).send({ drivers });
});

// GET - Buscar um piloto pelo id
server.get("/drivers/:id", async (request, reply) => {
  const id = Number(request.params.id);
  const driver = drivers.find((d) => d.id === id);

  if (!driver) {
    return reply.code(404).send({ message: "Piloto não encontrado" });
  }

  return reply.code(200).send({ driver });
});

// POST - Criar um novo piloto
server.post("/drivers", async (request, reply) => {
  const { name, team } = request.body;

  if (!name || !team) {
    return reply.code(400).send({ message: "Name e team são obrigatórios" });
  }

  const newId = drivers.length > 0 ? Math.max(...drivers.map((d) => d.id)) + 1 : 1;

  const newDriver = {
    id: newId,
    name,
    team,
  };

  drivers.push(newDriver);

  return reply.code(201).send({ driver: newDriver });
});

// PUT - Atualizar um piloto
server.put("/drivers/:id", async (request, reply) => {
  const id = Number(request.params.id);
  const { name, team } = request.body;

  const index = drivers.findIndex((d) => d.id === id);

  if (index === -1) {
    return reply.code(404).send({ message: "Piloto não encontrado" });
  }

  if (name) drivers[index].name = name;
  if (team) drivers[index].team = team;

  return reply.code(200).send({ driver: drivers[index] });
});

// DELETE - Remover um piloto
server.delete("/drivers/:id", async (request, reply) => {
  const id = Number(request.params.id);
  const index = drivers.findIndex((d) => d.id === id);

  if (index === -1) {
    return reply.code(404).send({ message: "Piloto não encontrado" });
  }

  drivers.splice(index, 1);

  return reply.code(200).send({ message: "Piloto removido com sucesso" });
});

// Iniciar o servidor
server.listen({ port: 3333 }, () => {
  console.log("Servidor rodando em http://localhost:3333");
});