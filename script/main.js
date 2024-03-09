const recipeImage = document.querySelector("#recipeImage");
// const video = document.querySelector("#video"); // This feature will be implemented later
const recipeName = document.querySelector("#recipeName");
const recipeCategory = document.querySelector("#recipeCategory");
const recipeDescription = document.querySelector("#recipeDescription");
const ingredientOne = document.querySelector("#ingredientOne");
const ingredientTwo = document.querySelector("#ingredientTwo");
const ingredientThree = document.querySelector("#ingredientThree");
const ingredientFour = document.querySelector("#ingredientFour");
const ingredientFive = document.querySelector("#ingredientFive");
const ingredientSix = document.querySelector("#ingredientSix");
const ingredientEight = document.querySelector("#ingredientEight");
const ingredientNine = document.querySelector("#ingredientNine");
const ingredientTen = document.querySelector("#ingredientTen");

const handleFetch = (searchValue) => {
  const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.meals[0].strIngredient1);
      recipeImage.src = data.meals[0].strMealThumb;
      //   //   video.src = `${data.data.meals[0].strYouTube}`; // This feature will be implemented later
      recipeName.innerHTML = data.meals[0].strMeal;
      recipeCategory.innerHTML = `${data.meals[0].strCategory}`;
      recipeDescription.innerHTML = data.meals[0].strInstructions;
      ingredientOne.innerHTML = data.meals[0].strIngredient1;
      ingredientTwo.innerHTML = data.meals[0].strIngredient2;
      ingredientThree.innerHTML = data.meals[0].strIngredient3;
      ingredientFour.innerHTML = data.meals[0].strIngredient4;
      ingredientFive.innerHTML = data.meals[0].strIngredient5;
      ingredientSix.innerHTML = data.meals[0].strIngredient6;
      ingredientSeven.innerHTML = data.meals[0].strIngredient7;
      ingredientEight.innerHTML = data.meals[0].strIngredient8;
      ingredientNine.innerHTML = data.meals[0].strIngredient7;
      ingredientTen.innerHTML = data.meals[0].strIngredient10;
    })
    .catch((error) => {
      console.error(error);
    });
};

const generateBtn = document.querySelector("#generateBtn");

generateBtn.addEventListener("click", () => {
  const userInput = document.querySelector("#userInput").value;

  if (userInput == "") {
    Swal.fire({
      title: "OPPS!",
      text: "Please enter a desired food",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  } else {
    handleFetch(userInput);
  }
});
