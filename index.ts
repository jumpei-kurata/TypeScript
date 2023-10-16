let hello: string = "hello";
console.log(hello);

const firstName = "aaaaaaaa";
const nameLength = firstName.length;

console.log(nameLength);

let hasValue: boolean = true;
let hasValueF = false;

// 型推論　型注釈
let helloW;
helloW = 2;
helloW = "string";
helloW = true;

const person: { name: string; age: number } = {
  name: "jack",
  age: 21,
};

const fruits: string[] = ["apple", "banana"];
const book: [string, number, boolean] = ["business", 12, false];
book.push(21);
console.log(book);

const apple: "apple" = "apple"; //　リテラル型

// 関数の型注釈と関数を入ってる変数の型注釈

function error(message: string): never {
  throw new Error(message);
}
console.log(error("This is an error"));
