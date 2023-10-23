import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('profile')
export class ProfileController {
    @Post("/post")
    postProfile(): string {
        return "Postou o perfil";
    }

    @Get("/getAll")
    getAll(): string {
        return "Visualizando todos os perfis";
    }

    @Get()
    getProfile(): string {
        return "Aqui é o perfil";
    }

}