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