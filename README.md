# Couch Surfing Website from Scrimba

This is a project from the [Learn Typescript](https://scrimba.com/learn/typescript) course from [Scrimba](https://scrimba.com/).

## Table of contents

- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Screenshot

![]()

## Links

- [View Code](https://www.example.com)
- [Live Preview](https://www.example.com)

## Built with

- HTML
- CSS
- TypeScript

## What I learned

I completed this project on Scrimba back in September 2023 when I was first learning TypeScript and wanted to include it here for reference. I made slight modifications with generics and non-null assertion operators to get rid of some errors, I used innerText instead of innerHTML, opted for an ```article``` element instead of a ```div``` element for the card component, and refactored some of the code.

Here are the things I learned from completing this project:

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

Since it's been a long time since I completed this project before adding it to GitHub, I wanted to complete W3S's TypeScript tutorial for a refresher and actually ended up learning a lot more about TypeScript. Here are the additional things I learned from W3S's TypeScript tutorial (this kind of turned into my personal note-taking space about TypeScript and I believe I will be revisiting these notes and links when working with TypeScript in the future):

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
- Non-null assertion operator (defined with !.)
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
  - ```public``` - (default) allows access to the class member from anywhere
  - ```private``` - only allows access to the class member from within the class
  - ```protected``` - allows access to the class member from itself and any classes that inherit it

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

- Apart from TypeScript, I learned that standard attributes of HTML elements are available as properties on the HTML element object, so dot notation can be used for standard attributes instead of ```setAttribute()``` / ```getAttribute()``` methods in DOM manipulation. (from JavaScript: The Definitive Guide (7th edition) by David Flanagan)

## Useful resources

- [W3S's TypeScript tutorial](https://www.w3schools.com/typescript/) - I completed this tutorial as a refresher but ended up learning about more things in TypeScript. It is a simple tutorial that includes a lot of concepts.
- [enums](https://www.typescriptlang.org/docs/handbook/enums.html) - TypeScript documentation for enums. Enums are used to define a set of named constants for purposes such as categorization of data.
- [Do's and Don'ts of TypeScript from the documentation](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [use cases for named tuples](https://stackoverflow.com/a/63629353)
- [Index Signatures](https://www.typescriptlang.org/glossary/#index-signatures) - Index signatures can be used for an object type with an unknown key value. 
- [Shape](https://www.typescriptlang.org/glossary/#shape) - "The term “shape” is used to describe the fields and values on a JavaScript object."
- [Generics](https://www.youtube.com/watch?v=EcCTIExsqmI) - Explanation of generics from WDS (YouTube).
- [Utility Types](https://www.w3schools.com/typescript/typescript_utility_types.php) - Explains most popular utility types: Partial, Required, Record, Omit, Pick, Exclude, ReturnType, Parameters, Readonly
- [Non-null assertion operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator)