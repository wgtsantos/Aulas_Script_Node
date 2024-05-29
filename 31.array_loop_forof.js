// Exibir valores do Array com Objetos e Loop For Of

let feedbacks = [
    { nome: "Feijoada", avaliacao: ["Excelente", "Bom" , "Bom", "Ótimo", "Excelente"] },
    { nome: "Pizza", avaliacao: ["Excelente", "Bom", "Bom", "Ruim", "Ruim"] },
    { nome: "Sushi", avaliacao: ["Ótimo", "Ótimo", "Bom", "Bom", "Péssimo"] },
    { nome: "Hamburguer", avaliacao: ["Ótimo", "Bom", "Bom", "Ruim", "Péssimo"] },
    { nome: "Salada", avaliacao: ["Bom", "Bom", "Bom", "Ruim", "Ruim"] },
    { nome: "Churrasco", avaliacao: ["Excelente", "Ótimo", "Ótimo", "Ruim", "Ruim"] },
    { nome: "Lasanha", avaliacao: ["Ótimo", "Bom", "Bom", "Ruim", "Ruim"] },
    { nome: "Macarrão", avaliacao: ["Ótimo", "Ótimo", "Bom", "Ruim", "Péssimo"] },
    { nome: "Sopa", avaliacao: ["Bom", "Bom", "Bom", "Bom", "Ruim"] },
    { nome: "Tacos", avaliacao: ["Excelente", "Ótimo", "Ótimo", "Bom", "Péssimo"] },
    { nome: "Sanduíche", avaliacao: ["Ótimo", "Bom", "Bom", "Bom", "Ruim"] },
    { nome: "Frango Assado", avaliacao: ["Bom", "Bom", "Bom", "Ruim", "Péssimo"] },
    { nome: "Cachorro-quente", avaliacao: ["Excelente", "Ótimo", "Ótimo", "Bom", "Ruim"] },
    { nome: "Ensopado", avaliacao: ["Bom", "Bom", "Bom", "Ruim", "Péssimo"] },
    { nome: "Peixe Grelhado", avaliacao: ["Ótimo", "Bom", "Bom", "Bom", "Ruim"] }
];

// Exibir o prato e a porcentagem de feedbacks conforme escolha
let f = "Bom";
for (let feedback of feedbacks) {
    let total_feed = feedback.avaliacao.filter(feed => feed === f).length;
    let percent = (total_feed / feedback.avaliacao.length) * 100;
    console.log(`=> ${feedback.nome} tem ${percent.toFixed(2)}% das avaliações como ${f}`);
}
