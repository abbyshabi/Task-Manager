export class Employee {
    public showDescription : boolean;
    constructor (public id : number, public name: string, public task:string,){
        this.showDescription = false
    }
}
  