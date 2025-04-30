# Part 2. A Little More of a Challenge…

## Q1. What will happen at line 12 and why?
**Output:**
3
**Explanation:**  
Because `i` is declared with `var`, it’s function-scoped. After the loop finishes (when `i === prices.length === 3`), `console.log(i)` prints `3`.

---

## Q2. What will happen at line 13 and why?
**Output:**
150
**Explanation:**  
`discountedPrice` is declared with `var` inside the loop, so it’s still in scope afterward. Its last value is `300 * (1 - 0.5) = 150`, so `console.log(discountedPrice)` prints `150`.

---

## Q3. What will happen at line 14 and why?
**Output:**
150
**Explanation:**  
`finalPrice` is declared with `var` and updated on each iteration; after the loop it holds the last computed value `150`, so `console.log(finalPrice)` prints `150`.

---

## Q4. What will this function return? Give a brief explanation why.
**Console Output:**  
*(none — no `console.log` for any variables)*  
**Return Value (if logged with a console.log()):**  
[0, 0, 0]
**Explanation:**  
We never assign to `finalPrice` inside the loop (the assignment was removed), so it remains `0` and we push `0` three times. There is no console.log, so nothing is ever outputted though.

---

## Q5. What will happen at line 12 and why?
**Output:**
ReferenceError: i is not defined
**Explanation:**  
Here `i` is declared with `let` in the loop, so it’s block-scoped and not visible outside that block—causing a ReferenceError.

---

## Q6. What will happen at line 13 and why?
**Output:**
ReferenceError: discountedPrice is not defined
**Explanation:**  
`discountedPrice` is declared with `let` inside the loop. Outside the loop it doesn’t exist, so logging it throws a ReferenceError.

---

## Q7. What will happen at line 14 and why?
**Output:**
150
**Explanation:**  
`finalPrice` is declared with `let` in the function body (not inside the loop), so it’s still in scope after the loop and holds the last computed value `150`.

---

## Q8. What will this function return? Give a brief explanation.
**Console Output:**  
*(none — no `console.log` for any variables)*  
**Return Value (if logged):**  
[50, 100, 150]
**Explanation:**  
We compute each discounted price (100→50, 200→100, 300→150) and push it into the array, so that array is returned. No console.log though, so it is never logged and so there is no output.

---

## Q9. What will happen at line 11 and why?
**Output:**
ReferenceError: i is not defined
**Explanation:**  
`i` is declared with `let` inside the loop, so it isn’t defined when we try to log it afterward.

---

## Q10. What will happen at line 12 and why?
**Output:**
3
**Explanation:**  
`length` was declared with `const` at the top of the function, so it remains in scope and holds `prices.length === 3`, which is what gets logged.
---

## Q11. What will this function return? Give a brief explanation.
**Console Output:**  
*(none — no `console.log` for any variables)*  
**Return Value (if logged):**  
[50, 100, 150]
**Explanation:**  
The function loops over the three prices, computes each discounted price (`100→50`, `200→100`, `300→150`), pushes them into the `discounted` array, and then returns that array. The commented-out console.logs don’t affect the return.


## Q12. JavaScript Object Property Access

Given the object:

```js
let student = {
  name: 'Sarah',
  major: 'Computer Science',
  'Grad Year': '2022',
  greeting: function() { console.log('Hello!'); },
  'Favorite Teacher': {
    name: 'Thomas Powell',
    course: 'CSE 110'
  },
  courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};
```

1. **Access the `name` property in `student`**  
   ```js
   student.name
   ```

2. **Access the `Grad Year` property in `student`**  
   ```js
   student['Grad Year']
   ```

3. **Call the `greeting` method in `student`**  
   ```js
   student.greeting();
   ```

4. **Access the `name` of the favorite teacher**  
   ```js
   student['Favorite Teacher'].name
   ```

5. **Access the first course in the `courseLoad` array**  
   ```js
   student.courseLoad[0]
   ```
---

## Q13. Arithmetic & Type Conversion

For each expression, the output and why it occurs:

1. **`'3' + 2`**  
   **Output:** `'32'`  
   **Explanation:** The `+` with a string triggers string concatenation, so `2` is converted to `'2'` and joined to `'3'`.

2. **`'3' - 2`**  
   **Output:** `1`  
   **Explanation:** The `-` operator forces both operands to numbers, so `'3'`→`3`, then `3 - 2 = 1`.

3. **`3 + null`**  
   **Output:** `3`  
   **Explanation:** `null` converts to `0`, so `3 + 0 = 3`.

4. **`'3' + null`**  
   **Output:** `'3null'`  
   **Explanation:** The presence of a string with `+` makes everything a string: `null`→`'null'`, concatenated to `'3'`.

5. **`true + 3`**  
   **Output:** `4`  
   **Explanation:** `true` converts to `1`, so `1 + 3 = 4`.

6. **`false + null`**  
   **Output:** `0`  
   **Explanation:** `false`→`0`, `null`→`0`, so `0 + 0 = 0`.

7. **`'3' + undefined`**  
   **Output:** `'3undefined'`  
   **Explanation:** With `+` and a string, `undefined`→`'undefined'`, concatenated to `'3'`.

8. **`'3' - undefined`**  
   **Output:** `NaN`  
   **Explanation:** `-` forces numeric conversion: `'3'`→`3`, `undefined`→`NaN`, so `3 - NaN = NaN`.

---

## Q14. Comparisons

1. **`'2' > 1`**  
   **Output:** `true`  
   **Explanation:** `'2'`→`2`, and `2 > 1` is `true`.

2. **`'2' < '12'`**  
   **Output:** `false`  
   **Explanation:** Both are strings, so lexicographical compare: `'2'` > `'1'`, thus `'2' < '12'` is `false`.

3. **`2 == '2'`**  
   **Output:** `true`  
   **Explanation:** Loose equality (`==`) coerces `'2'`→`2`, so `2 == 2`.

4. **`2 === '2'`**  
   **Output:** `false`  
   **Explanation:** Strict equality (`===`) does not coerce types, and number `2` ≠ string `'2'`.

5. **`true == 2`**  
   **Output:** `false`  
   **Explanation:** `true`→`1`, so `1 == 2` is `false`.

6. **`true === Boolean(2)`**  
   **Output:** `true`  
   **Explanation:** `Boolean(2)`→`true`, so both sides are boolean `true` and strictly equal.

---

## Q15. Difference between `==` and `===`

- **`==` (loose equality)** converts operands to the same type before comparison.
- **`===` (strict equality)** requires both value and type to match exactly, with no coercion.

---

## Q17. Callback Functions

```js
// part2-question17.js
function modifyArray(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}

function doSomething(num) {
  return num * 2;
}

// Running:
console.log(modifyArray([1, 2, 3], doSomething));
// → [2, 4, 6]

```
Return Value:
[2, 4, 6]

Explanation:
modifyArray iterates through each element in the input array and applies the callback function (doSomething) to it. Since doSomething(num) returns num * 2, each original element (1, 2, 3) is doubled, producing the new array [2, 4, 6].

---

## Q19. Event-loop Ordering

```js
function printNums() {
  console.log(1);
  setTimeout(function() { console.log(2); }, 1000);
  setTimeout(function() { console.log(3); }, 0);
  console.log(4);
}

printNums();
```

Output Order:
1
4
3
2

Explanation:

1 logs immediately.

The setTimeout(..., 0) callback (3) is queued and runs only after the current call stack completes.

4 logs before either callback.

The zero-delay callback logs 3.

After 1000 ms, the second callback logs 2.

