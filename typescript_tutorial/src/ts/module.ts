// Userモジュール
export class User10 {
  name: string;
  age: number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`名前は${this.name}で年齢は(${this.age})です by Class`);
    }
}
