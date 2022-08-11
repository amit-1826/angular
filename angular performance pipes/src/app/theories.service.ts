import { Injectable } from "@angular/core";

@Injectable()
export class TheoryService {
    readonly theories = [
        {userId: 1, title: 'Theory of Relativty'},
        {userId: 2, title: 'Quantum Theory'},
    ]

    constructor() {}

    getTheory(userId: number) {
        return this.theories.find((t) => t.userId === userId);
    }
}