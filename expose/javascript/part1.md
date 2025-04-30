# Part 1. A Quick Introduction…

## Q1. What is printed by line 9?
**Output:**  
values added: 20
**Explanation:**  
`var result` is hoisted to the top of the `sumValues` function. After executing `result = num1 + num2`, `result` holds `20`, so line 9 logs `values added: 20`.

---

## Q2. What is printed by line 13?
**Output:**  
final result: 20
**Explanation:**  
Because `var` is function-scoped (not block-scoped), the same `result` variable is still in scope at line 13, so it logs `final result: 20`.

---

## Q3. Why should you not use `var`?
`var` is function-scoped and hoisted, which can cause variables to leak out of blocks and overwrite each other, leading to hard-to-find bugs. Prefer `let` and `const` (block-scoped) for clearer, safer code.

---

## Q4. (let) What is printed by line 9?
**Output:**  
values added: 20
**Explanation:**  
`let result` is block-scoped and lives inside the `if` block. After `result = num1 + num2`, line 9 logs `values added: 20`.

---

## Q5. (let) What is printed by line 13?
**Output:**  
Uncaught ReferenceError: result is not defined
**Explanation:**  
Because `let` is block-scoped, `result` only exists inside the `if` block. Line 13, outside that block, throws a ReferenceError.

---

## Q6. (const) What is printed by line 9?
**Output:**  
Uncaught TypeError: Assignment to constant variable.
**Explanation:**  
`const result` cannot be reassigned. The statement `result = num1 + num2` throws a TypeError before the `console.log` can run.

---

## Q7. (const) What is printed by line 13?
**Output:**  
(nothing — execution halted earlier)
**Explanation:**  
Because the reassignment to `result` threw a TypeError, execution never reaches line 13. If that assignment were removed, then `result` (being block-scoped) would be undefined outside the `if` block, causing a ReferenceError at line 13.

