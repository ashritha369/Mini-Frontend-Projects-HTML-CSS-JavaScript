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

## 4. Centering background image using css

- Reference link :[https://stackoverflow.com/questions/2643305/centering-a-background-image-using-css](https://stackoverflow.com/questions/2643305/centering-a-background-image-using-css)

- Example:

```
body {
  background-color: #224941;
  background: url("./img/background.jpg") no-repeat center center/cover;
  min-height: 100vh;
}

```

---

## transform:scale(1); in CSS

- Reference link =[https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale)

- Example:

```
#circle{
  transform: scale(1);
}
```

---

## conic-gradient()

- Reference-Link -[https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient)
- The conic-gradient() CSS function creates an image consisting of a gradient with color transitions rotated around a center point (rather than radiating from the center).

- Example:

```
.gradient-circle {
  background: conic-gradient(
    pink 0%,
    rgb(253, 114, 138) 40%,
    white 40%,
    white 60%,
    rgb(230, 44, 75) 60%,
    rgb(212, 39, 68) 100%
  );
}


```

## animation in css

- Example:  
  animation: rotate 7.5s linear forwards infinite;

-

```
.pointer-container {
  animation: rotate 7.5s linear forwards infinite;
}
```

- Reference link [https://www.w3schools.com/cssref/css3_pr_animation.php](https://www.w3schools.com/cssref/css3_pr_animation.php)

- ## **CSS Syntax**
  - animation: name duration timing-function delay iteration-count direction fill-mode play-state;

---

## keyframes in css

- When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.

To get an animation to work, you must bind the animation to an element.

The following example binds the "example" animation to the <div> element. The animation will last for 4 seconds, and it will gradually change the background-color of the <div> element from "red" to "yellow":

```
/* The animation code */
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

- Reference link [https://www.w3schools.com/css/css3_animations.asp](https://www.w3schools.com/css/css3_animations.asp)

---

## CSS : transform-origin

- Reference [https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

- Example:

```
transform-origin: bottom center;
```

---

## CSS Animation grow and shrink

- Reference [https://codepen.io/edplo/pen/gvxRLp]()https://codepen.io/edplo/pen/gvxRLp

- Example:

```
.container.grow {
  animation: grow 3s linear forwards;
}

@keyframes grow {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}
```

```
.container.shrink {
  animation: shrink 3s linear forwards;
}
/* @keyframes shrink : here 'shrink' means it is of the '.container . shrink 's class' */
@keyframes shrink {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}

```

---
