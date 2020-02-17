let pets = [
    {nome: "Dogao"},
    {nome: "Dogao2"}
];

const listarPets = () => {
    let conteudo = "";
    for(let pet of pets){
        conteudo+= `
        ------------
        Nome: ${pet.nome}
        ------------`;
    }
    return conteudo
}

const adicionarPet = (novoPet) => {
    return pets.push(novoPet);
};

const buscarPet = (nomePet) => {
    let petsEncontrados = pets.filter(pet => pet.nome == nomePet);

    return petsEncontrados;
}

module.exports = { listarPets, adicionarPet, buscarPet };