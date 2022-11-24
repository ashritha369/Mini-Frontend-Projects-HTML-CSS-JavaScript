# Here I am documenting the css i went through out this projects

## 1. box-sizing: border-box;

```
*{
  box-sizing: border-box;
 }
```

- Reference link: [https://www.w3schools.com/css/css3_box-sizing.asp](https://www.w3schools.com/css/css3_box-sizing.asp)

- Youtube Link: [https://youtu.be/\_0xs16gjsF4](https://youtu.be/_0xs16gjsF4)

## -If we give the **box-sizing: border-box;** No matter whatever padding we give, the initial div width and height given will remain same.

---

## 2. Creating variables in css using :root

- Reference link: [https://www.w3schools.com/css/css3_variables.asp](https://www.w3schools.com/css/css3_variables.asp)

```
:root {
  --success-color: rgb(109, 233, 87);
  --error-color: rgb(248, 133, 133);
}

.form-control.success input {
  border-color: var(--success-color);
}

.form-control.error input {
  border-color: var(--error-color);
}
```

---

## 3. Difference between visibility: hidden and display:none;

- Reference link: [https://www.geeksforgeeks.org/what-is-the-difference-between-visibilityhidden-and-displaynone/](https://www.geeksforgeeks.org/what-is-the-difference-between-visibilityhidden-and-displaynone/)

---
