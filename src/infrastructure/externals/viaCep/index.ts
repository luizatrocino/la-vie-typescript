//esse arquivo é um exemplo de Singleton. Por que uma vez que ele é importado para outro arquivo, o "New" não é feito novamente. Ele já foi instanciado.

import { ViaCep } from "./ViaCep";


export const viaCepApi = new ViaCep()
