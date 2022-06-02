import { ViaCep } from "./ViaCep"

describe('Via Cep', () =>{

    //para fazer testes dessa API, precisamos antes instaciar a classe
    const viaCep = new ViaCep()
    const cepGenerico = '01001000'
    const expectedResponse = {
            "cep": "01001-000",
            "logradouro": "Praça da Sé",
            "complemento": "lado ímpar",
            "bairro": "Sé",
            "localidade": "São Paulo",
            "uf": "SP",
            "ibge": "3550308",
            "gia": "1004",
            "ddd": "11",
            "siafi": "7107" 
    }

    describe('method getAddress', () =>{
        //podemos testar se o método existe. Isso é mto comum com TDD(test-driven development), que é quando você vai desenvolvendo conforme vai criando os testes

        test('deve ser do type function', () => {
            expect(typeof viaCep.getAddress).toBe("function")
        })
        
        //aqui se usassemos o toBe daria errado, por que não podemos dizer que dois objetos (retorno da API) são iguais ("==="). Por isso usamos o toEqual
        test('deve retornar o endereço compeleto', async () =>{
            expect(await viaCep.getAddress(cepGenerico)).toEqual(expectedResponse)
        })


    })

//se tivessemos outros métodos dentro da classe viaCep, teríamos outros 'describe' aqui dentro 

})