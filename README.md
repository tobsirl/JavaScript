# JavaScript
## Primitive Types
string

number

boolean

undefined

null

symbol

## Object Types
function

Objects

Arrays

Maps

Sets

JavaScript is a loosely typed language

## typeof
The `typeof` operator returns a string indicating what type the value is

## Converting data types
### Explicit type conversion
```js
String(42)
Number('42')
parseInt('42')
```

### Implicit type conversion (coercion)
```js
'1' * '2' = 2 // number
'10' + 20 = '1020' // string
```

### Conditionals
JavaScript will convert any value passed in an if, else if, while or switch statement
```js
if(converts to boolean) {
  // if true, do something
}

if(Boolean(value) === true) {
  // if true, do something
}
```

### truthy (true) or falsy (false)
#### falsy values
```js
false
0
''
null
undefined
NaN
```
### Tips to avoid issues with falsy values
1. Avoid direct comparisons in conditionals
```js
const username = '';

if (username === false) {
  console.log('no user');
}

// better way
if (!username) {
  console.log('no user');
}
```
2. Use the triple equals === (strict equals operator)
  

```js 
// Will log equals because == equals will allow coercion
if (null == undefined) {
  console.log('equals');
} else {
  console.log('not equals');
}

// This will also check the type of each value
if (null == undefined) {
  console.log('equals');
} else {
  console.log('not equals');
}
```
3. Convert to real Boolean values where needed
```js
if (NaN === NaN) {
    console.log('equal')
} else {
    console.log('not equals')
}

// convert both NaNs
if (Boolean(NaN) === Boolean(NaN)) {
    console.log('equal')
} else {
    console.log('not equals')
}
```