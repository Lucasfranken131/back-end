import { Injectable } from "@nestjs/common";
import { error } from "console";

@Injectable()
export class ProfileService {
    private users = [
        { id_user: 1, profile_picture: "https://i.pinimg.com/236x/f6/aa/ed/f6aaed6ab5d33cffba26c588745b673f.jpg", first_name: "Dwayne", last_name: "Johnson", username: "TheRock", email: "rock11@gmail.com", password: "BigGuy11@"},
        { id_user: 2, profile_picture: "https://media.tenor.com/ueieoXbgrMsAAAAM/kevinhart-kevin-hart-meme.gif", first_name: "Kevin", last_name: "Hart", username: "HartedGuy", email: "LilKevin@gmail.com", password: "TheRealBigGuy1@"},        
    ];

    getUsers(name?: string) {
        if(name) {
            return this.users.filter((user) => user.username === name);
        }    
        return this.users;
    }

    getUser(id: number) {
        const user = this.users.find((user) => user.id_user === id);
        if(!user) {
            throw new Error("Usuário não foi achado.");
        }
        return user;
    }
}