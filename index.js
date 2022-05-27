const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded());

const imagens = [
    "https://i.pinimg.com/736x/cb/44/f9/cb44f97292e5b62c2eba9d6e1dbd5c8f.jpg",
    "https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg",
    "https://media.moneytimes.com.br/uploads/2020/06/gatinho-computador.jpg",
    "https://noticias.buscavoluntaria.com.br/wp-content/uploads/2019/03/kitten-solid-white-cat-motherless-child.jpg"
];
let src = imagens[0];
app.post(`/trocar`, (req, res)=>{
const corpo = req.body
const indice = corpo.indice
src = imagens[indice]
console.log('indice', indice)
res.redirect(`/index`)
})

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get(`/index`,(req, res) =>{
    res.render("index", {src});
})

app.listen(3000, ()=>{
    console.log(`The server is runing`)
})