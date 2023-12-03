export class CreateProfileDto {
    profile_picture: string;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}