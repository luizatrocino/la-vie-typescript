import { viaCepApi } from "../../../infrastructure/externals/viaCep";
import { Psicologos } from "../models/psicologos";
import bcrypt from "bcryptjs"

export class PsicologoService {
    
    async registerPsicologo(data:any){
        const { senha, cep } = data  
        
        const newPsicologo = await Psicologos.create({
          ...data,
          senha: this.cripSenha(senha),
          bairro: await this.getBairro(cep)
        });

        return newPsicologo
    }

    async getBairro(cep:string){
        const fullAddress = await viaCepApi.getAddress(cep)
        return fullAddress.bairro
    }

    cripSenha(senha:string):string{
        const newSenha:string = bcrypt.hashSync(senha, 10);
        return newSenha
    }

}

    