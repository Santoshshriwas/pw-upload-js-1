let name = "Santosh Shriwas";
let email = "santosh@gmail.com";
let age = "22";

if (typeof name !== "string") {
  console.log(`Name Should Be A String..`);
} else if (typeof email !== "string") {
  console.log(`Email Should Be A String..`);
} else if (typeof age !== "number") {
  console.log(`Age Should Be A Number..`);
} else {
  console.log(`Yahh!!! All the fields are proper.`);
}
