function printUserInfo(name: string, age: number, email?: string) {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}
console.log("Task - 4");
printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");

export function taskFour() {
  return {};
}
