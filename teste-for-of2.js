let estacionamento = [
    {
        marca:"Chevrolet",
        modelo:"Chevette",
        ano: 1997,
        cor:"Desbotado",

    },
    {
        marca: "ford",
        modelo:"escort xr3",
        ano: 1993,
        cor: "Vermelhor",
    },
    {
        marca:"Volkswagen",
        modelo:"fusca",
        ano: 1965,
        cor: Azul
    }
];

//console.log(estacionamento);
//console.log("Carro escolhido",estacionamento[1]);
for (const carro of estacionamento.entries){
    console.log(carro)
}