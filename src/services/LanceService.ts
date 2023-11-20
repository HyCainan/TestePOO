import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {
    constructor(){

    }

    async listLances(id?: string){
        try{
            if(id){
                const Lance = await prisma.Lance.findUnique({
                    where: {
                        id
                    }
                });
                return Lance;
            }else{
                const lance = await prisma.Lance.findMany();
                return this.listLances;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLance(){
        try{
            const newLance = await prisma.lance.create({
                data: this.createLance
            });
            return newLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLance(id: string){
        try{
            const updatedLance = await prisma.lance.update({
                where: {
                    id
                },
                data: Prisma
            });

            return this.updateLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLance(id: string){
        try{
            const deletedLance = await prisma.lance.delete({
                where: {
                    id
                }
            });

            return deletedLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

}

export default new LanceService();