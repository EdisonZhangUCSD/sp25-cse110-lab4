### 1. What was the bug?  
The inputs `num1` and `num2` come from `input.value` as **strings**, so in  
```js
let result = num1 + num2;
```
the + operator performs string concatenation (e.g. "3" + "4" === "34") instead of numeric addition.

### 2. How would you fix it?
Convert the input strings to numbers before adding. In calculateSum, change:
  let result = num1 + num2;

  into

  let result = Number(num1) + Number(num2);

perform number math rather than string math

