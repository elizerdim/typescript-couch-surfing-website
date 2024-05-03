# Couch Surfing Website from Scrimba

This is a project from the [Learn Typescript](https://scrimba.com/learn/typescript) course from [Scrimba](https://scrimba.com/).

### Screenshot

![]()

### Links

- [View Code](https://www.example.com)
- [Live Preview](https://www.example.com)

### Built with

- HTML
- CSS
- TypeScript

### What I learned

JavaScript is a dynamically typed high-level language. TypeScript is a syntactic superset of JavaScript that adds static typing. Here are the things I learned from completing this project:

- Primitive types (number, string, boolean)
- Union types
- Dynamic types (any)
- Enums
- Type Aliases
- Array and object types
- Tuples
- Interfaces
- Classes in TypeScript
- Functions (types of parameters and return values can be specified)

Additional things I learned from W3S's TypeScript tutorial:

- Type inference and explicit vs. implicit type assignment
- Capitalized versions of primitive types (e.g. Number, String, Boolean, etc.) shouldn't be used except for very specific cases.
- unknown type
- never type
- undefined & null types
- ```readonly``` keyword
- Tuples only have strongly defined types for the assigned values - there is no type safety for additional elements unless the tuple is created with readonly
- named tuples
- Optional properties in object types (defined with ?:)
- Optional parameters in functions (also defined with ?:)
- Default parameters in functions - the default value goes after the type annotation:

```js
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}
```
- Index signatures

```js
const nameAgeMap: { 
  [index: string]: number,
} = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
```

- Enums come in two flavors: string and numeric. By default, enums will initialize the first value to 0 and add 1 to each additional value:

```js
enum CardinalDirections {
  North,
  East,
  South,
  West
}
let currentDirection = CardinalDirections.North;
console.log(currentDirection); // logs 0
currentDirection = CardinalDirections.South;
console.log(currentDirection); // logs 2
```
- If the value of the first numeric enum is set, it will auto increment the rest from that

```js
enum CardinalDirections {
  North = 1,
  East,
  South,
  West
}
console.log(CardinalDirections.North); // logs 1
console.log(CardinalDirections.West); // logs 4
```

- Enums can also be fully initialized:

```js
export enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER'
}
```

- Interfaces can be extended

```js
interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};
```

- Destructuring with TypeScript

```js
function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}
f([1, 2]);

function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

const { name, age }: { name: string; age: number } = person;
```

- Casting - the process of overriding a type - syntax is (x as string) or (&lt;string&gt;x)

- Visibility modifiers in TypeScript classes
  * ```public``` - (default) allows access to the class member from anywhere
  * ```private``` - only allows access to the class member from within the class
  * ```protected``` - allows access to the class member from itself and any classes that inherit it

- Similar to arrays, the readonly keyword can prevent class members from being changed.

```js
class Person {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
```

- Interfaces can be used to define the type a class must follow through the ```implements``` keyword.

```js
interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public getArea(): number {
    return this.width * this.height;
  }
}
```

### Useful resources

- [W3S's TypeScript tutorial](https://www.w3schools.com/typescript/) - I completed this tutorial as a refresher but ended up learning about more things in TypeScript. It is a simple tutorial that includes a lot of concepts.
- [enums](https://www.typescriptlang.org/docs/handbook/enums.html) - TypeScript documentation for enums. Enums are used to define a set of named constants for purposes such as categorization of data.
- [Do's and Don'ts of TypeScript from the documentation](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [use cases for named tuples](https://stackoverflow.com/a/63629353)
- [Index Signatures](https://www.typescriptlang.org/glossary/#index-signatures) - Index signatures can be used for an object type with an unknown key value. 
- [Shape](https://www.typescriptlang.org/glossary/#shape) - "The term “shape” is used to describe the fields and values on a JavaScript object."
- [Generics](https://www.youtube.com/watch?v=EcCTIExsqmI) - Explanation of generics from WDS (YouTube).
- [Utility Types](https://www.w3schools.com/typescript/typescript_utility_types.php)