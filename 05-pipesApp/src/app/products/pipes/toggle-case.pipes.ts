import { Pipe, PipeTransform } from "@angular/core";

// fernando | toggleCase = 'FERNANDO'
// FERNANDO | toggleCase = 'fernando'
@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{

  transform(value: string):string {
    return value.toUpperCase();
  }
}
