import axios, { AxiosInstance } from "axios";
import { GeoApiInterface } from "./GeoApiInterface"; //precisamos ter uma opção (um caminho alternativo) caso a ViaCep deixe de funcionar ou falhe. Precisamos ter uma API de backup. Criamos uma interface para atender esses dois caminhos - "GeoApiInterface.ts" >> essa opção chama fallback


 export class ViaCep implements GeoApiInterface {
     endpoint: string = "https://viacep.com.br/" //como esse valor não muda, não precisamos colocar no constructor
     private api: AxiosInstance //essa variável recebe a inicialização do Axios. Utilizamos uma variável, por que vamos querer reutilizá-la em outros momentos em que formos chamar uma API externa. 


    //precisaremos consumir uma API no backend. No frontend, costumamos usar os métodos do fetch (funciona a camada do DOM). No backend, usamos a biblioteca Axios.
    //o Axios exige uma espécia de instância, uma preparação prévia. Por isso, usamos o constructor para configurar o Axios. 

    constructor(){
        this.api= axios.create({
            baseURL: this.endpoint //baseURL é o padrão de objeto para ser passado para o método create do Axios
        })
    }

    //precisamos usar async/await por que se trata de algo que pode demorar para retornar. É uma promessa. E usando async/await, é necessário alocar em uma variável
     async getAddress(bodyValue: string) {
         let response = await this.api.get(`ws/${bodyValue}/json`)
         return response.data //data é uma propriedade do Axios
     }
    
 
 }