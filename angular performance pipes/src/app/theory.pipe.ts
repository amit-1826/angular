import { Pipe, PipeTransform } from '@angular/core';
import { TheoryService } from './theories.service';

@Pipe({
  name: 'theory',
})
export class TheoryPipe implements PipeTransform {

  constructor(private theoryService: TheoryService) {

  }

  transform(userId: number, ...args: unknown[]): unknown {
    console.log(userId);
    return this.theoryService.getTheory(userId)?.title
  }

}
