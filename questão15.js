let salario = 2000; 
let Pagamento;

if (salario >= 3000) {
    Pagamento = "Alto";
} else if (salario >= 1500) {
    Pagamento = "Médio";
} else {
    Pagamento = "Baixo";
}

console.log(Pagamento);