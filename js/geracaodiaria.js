
/* let resposta = document.getElementById('resposta') */

function principal(){
    
/*     let potencia = 305, radiacaoRegiao = 3.1 */

    let potencia = Number(document.getElementById('potencia').value)
    let radiacaoRegiao = Number(document.getElementById('radiacaoRegiao').value)
    producaoDiaria = potencia * radiacaoRegiao / 1000
    producaoMensal = producaoDiaria * 30

    console.log(`Sua produção diária é de ${producaoDiaria} kWh`)
    console.log(`Sua produção diária é de ${producaoMensal} kWh`)


    resposta.innerHTML = ``
    resposta.innerHTML += `A produção diária é ${producaoDiaria.toFixed(2)} kW<br>`
    resposta.innerHTML += `A produção mensal é ${producaoMensal.toFixed(2)} kW<br>`

    let quantidadeProducaoMensal = Number(document.getElementById('quantidadeProducaoMensal').value)
    let quantidadePlacas = 1
    
    producaoMensalTotal = producaoMensal

    while(producaoMensalTotal < quantidadeProducaoMensal){
        producaoMensalTotal += producaoMensal
        quantidadePlacas++
    }

    console.log(`para produzir em torno de ${quantidadeProducaoMensal} kWh mensalmente é necessário ${quantidadePlacas} que geram ${producaoMensalTotal}`)
    resposta.innerHTML += `para produzir em torno de ${quantidadeProducaoMensal} kWh mensalmente é necessário ${quantidadePlacas} placas que geram ${producaoMensalTotal}`
    
}
