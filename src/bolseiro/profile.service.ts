import { Injectable } from "@nestjs/common";
import { CreateProfileDto } from "./dto/create-profile.dto";
import { UpdateProfileDto } from "./dto/update-profile.dto";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ProfileService {

    constructor(private prisma: PrismaService) {}

    async getAllUsers(name?: string) {
        return await this.prisma.user.findMany();
    }

    async getUser(id: number) {
        const user = await this.prisma.user.findUnique({
            where: {
                id_user: id,
            },
        });

        if(!user) {
            throw new Error("Usuário não foi achado.");
        }

        return user;
    }

    async createUser(data: CreateProfileDto) {
        const user = await this.prisma.user.create({
            data,
        })
        return user;
    }

    async updateUser(id: number, data: UpdateProfileDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                id_user: id,
            },
        });

        if(!user) {
            throw new Error("Livro não existe")
        }

        return await this.prisma.user.update({
            data,
            where: {
                id_user: id,
            },
        });
    }

    async deleteUser(id: number) {
        const userToRemove = await this.prisma.user.delete({
            where: {
                id_user: id,
            },
        })
        return userToRemove;
    }
}