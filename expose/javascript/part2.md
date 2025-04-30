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
