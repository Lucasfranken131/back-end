import { Controller, Get, Post, Put, Req, Param, Body, Query } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}
    @Post()
    postProfile(@Body() createProfileDto: CreateProfileDto) {
        return {
            profilePicture: createProfileDto.profilePicture,
            username: createProfileDto.username,
            email: createProfileDto.email,
            password: createProfileDto.password,
        }
    }

    @Get("/getAll")
    getAll(): string {
        return "Visualizando todos os perfis 😜😎";
    }

    @Get()
    getUsers(@Query ("name") name: string) {
        return this.profileService.getUsers(name);
    }

    @Get(":id")
    getProfile(@Param('id') id: string) {
        return this.profileService.getUser(+id);
    }

    @Put(":id")
    putProfile(@Param("id") id: string , @Body() updateProfileDto: UpdateProfileDto) {
        return {
            id,
            profilePicture: UpdateProfileDto,
            username: UpdateProfileDto,
            email: UpdateProfileDto,
            password: UpdateProfileDto,
        };
    }
}