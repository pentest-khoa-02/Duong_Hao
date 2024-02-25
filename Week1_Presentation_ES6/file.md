# Presentation:let, var, const, scope, template string and multiple line ES6

## Var

> var is a variable, used for storing data.

**Example**

```js
var a = 10;
console.log(a); // 10
```

> Variables declared with no `var` or `let`
> always are `var`.

```js
{
  x = 10;
}
console.log(x); // 10;
```

> Variables declared with the `var` always have `Global Scope`.

**Example**

```js
{
  var a = 10;
}
// a can be used here
```

> Redeclaring Variables

```js
var a = 10;

var a = 20;

console.log(a); // 20
```

> Redeclaring a variable inside a block will also redeclare the variable outside the block.

```js
var a = 10;

{
  var a = 20;
  // a is 20 HERE
}

// a is 20 HERE
```

> var is hosted: This makes it possible to access the variable before the line it was declared, without errors

```js
carName = "Volvo";
var carName;
```

> var is reassigned

## Let

```js
let a = 10;
```

> Variables declared with the `let` always have `Block Scope`.

```js
{
  let x = 10;
  // x can be used HERE
}
// x can't be used HERE
```

> Variables declared with `let` must be Declared before use

```js
console.log(x); // ERROR
let x = 10;
```

> With `let`, redeclaring a variable in the same block is NOT allowed:

```js
var x = 2; // Allowed
let x = 3; // Not allowed

{
  let x = 2; // Allowed
  let x = 3; // Not allowed
}

{
  let x = 2; // Allowed
  var x = 3; // Not allowed
}
```

> `let` is NOT hosted

```js
carName = "Saab";
let carName = "Volvo"; // ERROR
```

## Const

> A variable defined with the `const` keyword cannot be reassigned:

```js
const PI = 3.14;
PI = 100; // ERROR
```

> Must be Assigned: JavaScript `const` variables must be assigned a value when they are declared:

```js
const PI = 3.14;
```

> `const` variables have `Block Scope`

```js
{
  const PI = 3.14;
  // PI can be used HERE
}
// PI can not used in HERE
```

> `const` is not hosted

**When to use JavaScript `const`?**

> Always declare a variable with const when you know that the value should not be changed.

## Scope

> Block Scope: Variables declared inside a { } (`let`, `const`) block cannot be accessed from outside the block

```js
{
  let x = 2;
}
// x can NOT be used here
```

> Function Scope: Variables defined inside a function are not accessible (visible) from outside the function.

```js
const a = "this is global scope";

function foo() {
  const b = "this is function scope";
  if (true) {
    const c = "this is in block scope";
  }

  for (let i = 0; i < 4; i++) {
    const d = "this is also in block scope but different to c";
  }
}
```

> Global Scope: Variables (`let`, `var`, `const`) declared Globally (outside any function, { }) have `Global Scope`. Global variables can be accessed from anywhere in a JavaScript program.

```js
let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}
```

## Template String

Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

```js
let text = `Hello World!`;
```

Template Strings allow both single and double quotes inside a string:

```js
let name = `He's often called "Hao"`;
```

**Multiline Strings**

`Template Strings` allow multiline strings:

```js
let name = `Duong Quang Hao
B22DCAT110
Ha Nam`;

console.log(name);
```

**Variable Substitutions**

Template Strings allow variables in strings:

```js
let name = "Hao";
console.log(`My name is ${name}`); // My name is Hao
```

**Expression Substitution**

Template Strings allow expressions in strings:

```js
console.log(`3 + 4 = ${3 + 4}`); // 3 + 4 = 7
```
