import { Controller, Get, Post, Put, Param, Body, Query, Delete } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Get("/findName/:name")
    getUsers(@Query ("name") name: string) {
        return this.profileService.getUsername(name);
    }

    @Get("/findAll")
    getAllUsers() {
        return this.profileService.getAllUsers();
    }

    @Get("/findUser/:id")
    getUser(@Param('id') id: string) {
        return this.profileService.getUser(+id);
    }

    @Post("/createUser")
    postUser(@Body() data: CreateProfileDto) {
        return this.profileService.createUser(data);
    }

    @Put("/updateUser/:id")
    putUser(@Param("id") id: string , @Body() data: UpdateProfileDto) {
        return this.profileService.updateUser(+id, data);
    }

    @Delete("/deleteUser/:id")
    deleteUser(@Param("id") id: string) {
        return this.profileService.deleteUser(+id);
    }
}