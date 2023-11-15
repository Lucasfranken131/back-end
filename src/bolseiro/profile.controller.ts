import { Controller, Get, Post, Put, Param, Body, Query, Delete } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Get()
    getUsers(@Query ("name") name: string) {
        return this.profileService.getUsers(name);
    }

    @Get(":id")
    getUser(@Param('id') id: string) {
        return this.profileService.getUser(+id);
    }

    @Post()
    postUser(@Body() createProfileDto: CreateProfileDto) {
        return this.profileService.createUser(createProfileDto);
    }

    @Put(":id")
    putUser(@Param("id") id: string , @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.updateUser(+id, updateProfileDto);
    }

    @Delete(":id")
    deleteUser(@Param("id") id: string) {
        return this.profileService.deleteUser(+id);
    }
}