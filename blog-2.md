# The significance of union and intersection types in Typescript.

## Solution:

Union and intersection are an important feature of typescript.As typescript needs to define types of any variable by writing type or interface, some times it is necessary to define one or several types to themselves. In this case, **Union** and **Intersection** are the obvious.

### Union:

It defines any type of union. This works as logical **or** or **||**.But it is written in **|** notation.

```typescript
type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};
const calculateShapeArea = (value: Circle | Rectangle): number => {
  //some codes here
};
```

In this example, the calculateShapeArea function takes a parameter named value with the type of Circle and Rectangle type. It made the code simpler, clean and more efficient to coders.

### Intersection:

This works as logical **and** or **&&**.But it is written in **&** notation.

```typescript
type FrontendDeveloper = {
  skills: string[];
  designation1: "FrontendDeveloper";
};
type BackendDeveloper = {
  skills: string[];
  designation2: "BackendDeveloper";
};

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
  skills: ["HTML", "Js", "Express"],
  designation1: "FrontendDeveloper",
  designation2: "BackendDeveloper",
};
```

In this example, the FullStackDeveloper type is the combination of the type FrontendDeveloper and BackendDeveloper. Thus it has all the information of those two.
