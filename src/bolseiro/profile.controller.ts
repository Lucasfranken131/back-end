import { Controller, Get, Post, Put, Req, Param, Body, Query } from '@nestjs/common';
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
        return {
            profilePicture: createProfileDto.profilePicture,
            username: createProfileDto.username,
            email: createProfileDto.email,
            password: createProfileDto.password,
        }
    }

    @Put(":id")
    putUser(@Param("id") id: string , @Body() updateProfileDto: UpdateProfileDto) {
        return {
            id,
            profilePicture: UpdateProfileDto,
            username: UpdateProfileDto,
            email: UpdateProfileDto,
            password: UpdateProfileDto,
        };
    }
}