import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('profile')
export class ProfileController {
    @Post("/post")
    postProfile(): string {
        return "Testando POST";
    }

    @Get("/get")
    getProfile(): string {
        return "Testando GET";
    }

}