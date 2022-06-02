import supertest from "supertest";
import app from "../../..";

describe('No controller, ao executar função', () =>{

    describe('create', () =>{
       
        test ('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post("/psicologos")
            .send({
                nome:"Nome Válido",
                email:"email.valido8@gmail.com",
                senha:"123456789",
                apresentacao:"Apresentação Válida",
                cep:"01001000"
            })

            expect(response.status).toBe(201)
        })
        
        test ('em caso de sucesso, retornar response do request', async () => {
            const response = await supertest(app)
                .post("/psicologos")
                .send({
                    nome:"Nome Válido",
                    email:"email.valido9@gmail.com",
                    senha:"123456789",
                    apresentacao:"Apresentação Válida",
                    cep:"01001000"
                })
            
            //Opção 1 para executar isso
            expect(JSON.parse(response.text)).toMatchObject({
                nome:"Nome Válido",
                email:"email.valido9@gmail.com",
                apresentacao:"Apresentação Válida",  
            })


            //----------------------------------------------

            //Opção 3 para executar isso
            expect(response.body).toMatchObject({
                nome:"Nome Válido",
                email:"email.valido9@gmail.com",
                apresentacao:"Apresentação Válida",  
            })

            
            //----------------------------------------------

            //Opção 4 para executar isso - Aqui só testamos se o campo existe
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    nome: expect.any(String),
                    email: expect.any(String),
                    senha: expect.any(String),
                    apresentacao: expect.any(String),
                    bairro: expect.any(String),
                    updatedAt: expect.any(String),
                    createdAt: expect.any(String),
                })
            )

            //----------------------------------------------

            //Opção 5 para executar isso - Checa os dados realmente
            expect(response.body).toEqual(
                expect.objectContaining({
                    nome:"Nome Válido",
                    email:"email.valido9@gmail.com",
                    apresentacao:"Apresentação Válida", 
                })
            )

        })

    })

    // describe('update', () =>{

    // })


})