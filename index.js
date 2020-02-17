const http = require("http");
const petshop = require("./petshop");
const url = require("url");

const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type":"text/plain; charset=UTF-8"})
    let urlCompleta = url.parse(req.url, true);
    let queryString = urlCompleta.query;
    let rota = urlCompleta.pathname;
    
    //console.log(urlCompleta);
    

    switch(rota){
        case "/pets":
            let conteudo = petshop.listarPets();
            if (conteudo.length > 0) {
                res.write(conteudo);
            }else{
                res.write("Nenhum pet cadastrado :( ");
            }
            break;
        case "/pets/add":
            let novoPet = queryString;
            if (petshop.adicionarPet(novoPet)) {
                res.write(`${novoPet.nome} foi adicionado a nossa lista!`);
            }else{
                console.log("Não foi possivel adicionar");
            }           
            break;
        case "/pets/buscar":
            let nomePet = queryString.nome;
            let petsEncontrados = petshop.buscarPet(nomePet);
            if (petsEncontrados.length > 0) {
                res.write(`Pet: ${petsEncontrados.length} pets com o nome ${nomePet}`);
            }else{
                res.write(`Pet nao encontrado`);
            }
            
            break;
        default:
            res.write("tô perdido");
            break;      
    }
    res.end();

    // let result = url.parse(request.url,true);
    // let urlP = result.pathname;
    // fs.readFile(__dirname + urlP + ".html", (erro,html) =>{
    //     response.writeHead(200,{"Content-Type" : "text/html"});
    //     response.end(html);
    // });
});

server.listen(3000, "localhost", ()=> {
    console.log("Servidor rodando");
})

