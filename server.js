import express from "express";
import routes from "./src/routes/postsRoutes.js";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato fazendo yoga",
    imagem: "https://placecats.com/millie/400/300",
  },
  {
    id: 3,
    descricao: "Gatinho dormindo",
    imagem: "https://placecats.com/millie/200/200",
  },
  {
    id: 4,
    descricao: "Gato explorando a caixa",
    imagem: "https://placecats.com/millie/300/250",
  },
  {
    id: 5,
    descricao: "Gato comendo ração",
    imagem: "https://placecats.com/millie/500/400",
  },
  {
    descricao: "Gato brincando com um novelo de lã",
    imagem: "https://placecats.com/millie/400/350",
  },
];

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
  console.log("Servidor Escutando...");
});



