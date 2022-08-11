import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
    users = [
        {userId: 1, name: 'Neil Bohr'},
        {userId: 2, name: 'Albert bro'},
    ]

    constructor() {}
}