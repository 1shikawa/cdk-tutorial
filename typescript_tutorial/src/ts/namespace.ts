namespace User {
  export class User10 {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    show() {
      console.log(`名前は${this.name}で年齢は(${this.age})です by namespace`);
    }
  }
}

const user10 = new User.User10("ishikawa", 30);
user10.show();
