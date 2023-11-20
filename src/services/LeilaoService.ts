import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
 
class LeilaoService {
    constructor(){
    }

async function job(id: string) {
    try{
        if(id){
            const job = await prisma.leilao.findUnique({
            where: {
                id
            }
        });
        return job;
    }

    }catch(error){
        console.log(error);
        return null;
    }
}
}