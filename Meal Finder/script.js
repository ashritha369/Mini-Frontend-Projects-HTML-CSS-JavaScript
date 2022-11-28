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
//-1- EVENT LISTENERS

submit.addEventListener("submit", searchMeal);
