//////////////////////////////////////////////////////////////////////
// types
let age: number = 30;
// age = "ishikawa" // error

//////////////////////////////////////////////////////////////////////
// 関数
const greet = (name: string) => "Hello, " + name;
console.log(greet("ishikawa"));

//////////////////////////////////////////////////////////////////////
// 型推論
const greet2 = (name2 = "ishikawa2") => "Hello, " + name2;
console.log(greet2());
// console.log(greet2(43)); // error

//////////////////////////////////////////////////////////////////////
// 変数
let height: number = 176;
height = 180;
console.log(height);

//////////////////////////////////////////////////////////////////////
// 定数
const weight: number = 70;
// weight = 80; // error

//////////////////////////////////////////////////////////////////////
// 型注釈関数
const add = (a: number, b: number): number => {
  return a + b;
}
console.log(add(5, 3));

const add2 = (a: number, b: number) => {
  return a + b;
}
// console.log(add2(5, "ishikawa"));

//////////////////////////////////////////////////////////////////////
// オブジェクト型
type User = {
  name: string;
  age: number;
}

const user: User = {
  name: "ishikawa",
  age: 30
}
console.log(user); // { name: 'ishikawa', age: 30 }
console.log(user.name); // ishikawa
console.log(user.age); // 30
// console.log(user.email); // error

//////////////////////////////////////////////////////////////////////
// 配列型
const numbers: number[] = [1, 2, 3];
const addNumber = (arr: number[], number: number): number[] => [...arr, number]
console.log(numbers[1]); // 2
console.log(addNumber(numbers, 4));
// console.log(addNumber(numbers, "ishikawa")); // error

const names: string[] = ["ishikawa", "suzuki", "tanaka"];
const addName = (arr: string[], name: string): string[] => [...arr, name]
console.log(names[1]);
console.log(addName(names, "yamada")); // ["ishikawa", "suzuki", "tanaka", "yamada"]
// console.log(addName(names, 3)); // error

//////////////////////////////////////////////////////////////////////
// タプル型
const book: [string, number, boolean] = ["JavaScript", 2000, true];
console.log(book); // [ 'JavaScript', 2000, true ]
// consst book2: [string, number, boolean] = ["TypeScript", 3000, "true"]; // error

//////////////////////////////////////////////////////////////////////
// インターフェース型
interface User2 {
  name: string;
  age: number;
}

const user2: User2 = {
  name: "ishikawa",
  age: 30
}
console.log(user2); // { name: 'ishikawa', age: 30 }

//////////////////////////////////////////////////////////////////////
// エイリアス型
type Address = {
  country: string;
  city: string;
}

type User3 = {
  name: string;
  age: number;
  address: Address;
}

//////////////////////////////////////////////////////////////////////
// ユニオン型
let value: number | string;
value = 1;
value = "ishikawa";

//////////////////////////////////////////////////////////////////////
// インターセクション型
interface User4 {
  name: string;
  age: number;
}

interface Admin {
  role: string;
}

type AdminUser = User4 & Admin;

const adminUser: AdminUser = {
  name: "ishikawa",
  age: 30,
  role: "admin"
}

//////////////////////////////////////////////////////////////////////
// リテラル型
let statusMode: "open" | "close" = "open";
statusMode = "close";
// statusMode = "progress"; // error

//////////////////////////////////////////////////////////////////////
// 定数型
const PI: 3.14 = 3.14;
// PI = 3.15; // error

//////////////////////////////////////////////////////////////////////
// デフォルト引数
const greet3 = (name: string, message: string = "Hello"): void => {
  console.log(message + ", " + name);
}
greet3("ishikawa33");

//////////////////////////////////////////////////////////////////////
// オプショナル引数
const displayInfo = (name: string, age?: number): void => {
  if (age === undefined) {
    console.log(`名前は${name}で、年齢不詳です`);
  }
  else {
    console.log(`名前は${name} で、年齢は${age}です`);
  }
}
displayInfo("ishikawa44");
displayInfo("ishikawa44", 30);

//////////////////////////////////////////////////////////////////////
// ジェネリック型
const mirror = <T>(value: T): T => {
  return value;
}

let number = mirror<number>(123);
console.log(typeof number);

let string = mirror<string>("ishikawa");
console.log(typeof string);

//////////////////////////////////////////////////////////////////////
// ユーティリティ型
type PartialUser = Partial<User>;

const partialUser: PartialUser = {
  name: "ishikawa"
  // role: "admin" // error
}

//////////////////////////////////////////////////////////////////////
// マップ型
interface User5 {
  name: string;
  age: number;
}

type User6type = {
  [key in keyof User5]: string | number;
}

const user6: User6type = {
  name: "ishikawa",
  age: 30
}

type readOnlyUser = {
  readonly [key in keyof User5]: User5[key];
}

const readOnlyUser: readOnlyUser = {
  name: "ishikawa",
  age: 30
}
// プロパティの変更できない
// readOnlyUser.name = "suzuki"; // error

//////////////////////////////////////////////////////////////////////
// 型チェック
const isString = (text: any): text is string => {
  return typeof text === "string";
}

const printText = (text: any): void => {
  if (isString(text)) {
    console.log(`文字列です：${text}`);
  }
  else {
    console.log(`文字列ではありません`);
  }
}

printText("ishikawa");
printText(123);

//////////////////////////////////////////////////////////////////////
// 条件型
type TypeName<T> = T extends string ? "文字列が来た" : T extends number ? "数値が来た" : T extends boolean ? "真偽値が来た" : "その他";

let typeName: TypeName<string> = "文字列が来た";
let typeName2: TypeName<number> = "数値が来た";
let typeName3: TypeName<boolean> = "真偽値が来た";

console.log(typeName);
console.log(typeName2);
console.log(typeName3);

//////////////////////////////////////////////////////////////////////
// 非同期処理
const sleep = (ms: number): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, ms);
  });
}

const main = async (): Promise<void> => {
  const result = await sleep(1000);
  console.log(result);
}

main();

//////////////////////////////////////////////////////////////////////
// 構造的部分型
interface User7 {
  name: string;
}

interface User8 {
  name: string;
  role: string;
}

let user7: User7 = { name: "ishikawa" };
let user8: User8 = { name: "suzuki", role: "admin" };

user7 = user8;
// user8 = user7; // error

//////////////////////////////////////////////////////////////////////
// any型
let anyValue: any = "ishikawa";
console.log(typeof anyValue); // string

anyValue = 30;
console.log(typeof anyValue); // number

anyValue = true;
console.log(typeof anyValue); // boolean

//////////////////////////////////////////////////////////////////////
// unknown型
let unknownValue: unknown = "unknown";
console.log(typeof unknownValue); // string

unknownValue = 1;
console.log(typeof unknownValue); // number

if (typeof unknownValue === "number") {
  console.log(unknownValue * 2);
}

//////////////////////////////////////////////////////////////////////
// never型
const error = (message: string): never => {
  throw new Error(message);
}

// 無限ループ（終わらない処理）
const infiniteLoop = (): never => {
  while (true) {
    console.log("無限ループ");
  }
}

//////////////////////////////////////////////////////////////////////
// クラス
class User9 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const userInstance = new User9("ishikawa", 30);
console.log(userInstance.greet());

//////////////////////////////////////////////////////////////////////
// モジュール
import { User10 } from "./module";
const user10 = new User10("ishikawa", 30);
user10.show();

// 名前空間
// -> namespace.ts

//////////////////////////////////////////////////////////////////////
// 型変換
let str: string = "1000";
let num: number = Number(str);
console.log(typeof num); // number

let num2: number = 2000;
let str2: string = num2.toString();
console.log(typeof str2); // string

//////////////////////////////////////////////////////////////////////
// エラーハンドリング
const divide = (a: number, b: number): number => {
  try {
    return a / b;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Infinity

//////////////////////////////////////////////////////////////////////
// 型注釈

/*
* 以下のように型注釈をつけることもできる
* @param {string} name
*/
const greet4: (name: string) => string = (name: string) => {
  return `Hello, ${name}`;
}
