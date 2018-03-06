import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serviceFilter'
})
export class ServiceFilterPipe implements PipeTransform {

  transform(objects: any): object {
    if (objects) {
      return objects.filter(objectVal => {
          return objectVal['id'] <= 1;
      });
    }
  }
}
