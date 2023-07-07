const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");

const mealsEl = document.getElementById("meals");

const resultHeading = document.getElementById("result-heading");

const single_mealEl = document.getElementById("single-meal");

//-2- SEARCH THE MEAL AND DISPLAY LIST OF SEARCHED MEAL , FETCH FROM API
function searchMeal(e) {
  //preventing the default behavior on submit
  e.preventDefault();
  // Clear single meal
  single_mealEl.innerHTML = "";
  // get search term
  const term = search.value;
  // to make sure if form is submitted, check for empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}' :</h2>`;
        // if there is no data, in api json data we get null, based on that we can write below one
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again!</p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (eachMeal) => `
            <div class="meal">
                <img src="${eachMeal.strMealThumb}" alt="${eachMeal.strMeal}"/>
                <div class="meal-info" data-mealId="${eachMeal.idMeal}">
                     <h3>${eachMeal.strMeal}</h3>
                 </div>
            </div>`
            )
            .join("");
        }
      });
    //   CLEAR THE SEARCH TEXT FIELD
    search.value = "";
  } else {
    alert("Please enter a search term");
  }
}
// -4- FETCH MEAL BY ID- THAT IS SEARCH SPECIFIC MEAL BY ITS ID
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // because console.log(data) gives o/p like below:

      /*data= 

      { meals: 
        [0: 
          {idMeal: '53014', strMeal: 'Pizza Express Margherita', strDrinkAlternate: null, strCategory: 'Miscellaneous', strArea: 'Italian', …}
        ], 
        [[Prototype]]: Object}

      */
      const selectedMeal = data.meals[0];
      // now calling and  passing this details to another function named addMealToDOM
      addMealToDOM(selectedMeal);
    });
}

// -7- FETCH AND GENRATE RANDOM MEAL
function getRandomMeal() {
  // if there is already a meal items, heading and info present, then clear it up
  mealsEl.innerHTML = "";
  resultHeading.innerHTML = "";
  // then make a request to an API
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      const randomMeal = data.meals[0];
      // now calling addMealToDOM and passing randomMeal data as below
      addMealToDOM(randomMeal);
    });
}
// -5- ADD MEAL TO DOM

function addMealToDOM(selectedMeal) {
  // check index.js for the selectedMeal data format
  // so we are making new user readable customised array , so that it becomes easy to iterate and map from selectedMeal
  const ingredients = [];
  ////////////iterating over 20 ingredients///////////////////////
  for (let i = 1; i <= 20; i++) {
    // check if there is an ingredient present, using bracket syntax instead of dot syntax
    if (selectedMeal[`strIngredient${i}`]) {
      ingredients.push(
        `${selectedMeal[`strIngredient${i}`]}-${selectedMeal[`strMeasure${i}`]}`
      );
    } else {
      // if the ingredients is not present, then break out the for loop
      break;
    }
  }
  ///////////////////////
  single_mealEl.innerHTML = `
  <div class="single-meal">
      <h1>${selectedMeal.strMeal}</h1>
      <img src="${selectedMeal.strMealThumb}" alt="${selectedMeal.strMeal}"/>
          <div class="single-meal-info">${
            selectedMeal.strCategory ? `<p>${selectedMeal.strCategory}</p>` : ""
          }${selectedMeal.strArea ? `<p>${selectedMeal.strArea}</p>` : ""}
          </div>

          <div class="main">
            <p>${selectedMeal.strInstructions}</p> 
                <h2>Ingredients</h2>
                  <ul>
                  ${ingredients
                    .map((eachIng) => `<li>${eachIng}</li>`)
                    .join("")}
                  
                  </ul>
          </div>
  </div>
  `;
}
//-1- EVENT LISTENERS

submit.addEventListener("submit", searchMeal);

//-6-
random.addEventListener("click", getRandomMeal);

// -3-

mealsEl.addEventListener("click", (e) => {
  const mealsInfo = e.path.find((item) => {
    // check it the class is present
    if (item.classList) {
      //returning the div consisting of classname meal-info
      return item.classList.contains("meal-info");
    } else {
      return false;
    }
  });
  // check for mealinfo class
  if (mealsInfo) {
    // getting the ID of clicked meal
    const mealID = mealsInfo.getAttribute("data-mealid");
    // console.log(mealID);
    // Now calling the function and passing id to it as
    getMealById(mealID);
  }
});
