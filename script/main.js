const recipeImage = document.querySelector("#recipeImage");
// const video = document.querySelector("#video");
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
  const APIKEY_AND_APIURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
  axios
    .get(APIKEY_AND_APIURL)
    .then((respond) => {
      console.log(respond.data.meals[0]);
      recipeImage.src = `${respond.data.meals[0].strMealThumb}`;
      //   video.src = `${respond.data.meals[0].strYouTube}`;
      recipeName.innerHTML = respond.data.meals[0].strMeal;
      recipeCategory.innerHTML = `${respond.data.meals[0].strCategory}`;
      recipeDescription.innerHTML = respond.data.meals[0].strInstructions;
      ingredientOne.innerHTML = respond.data.meals[0].strIngredient1;
      ingredientTwo.innerHTML = respond.data.meals[0].strIngredient2;
      ingredientThree.innerHTML = respond.data.meals[0].strIngredient3;
      ingredientFour.innerHTML = respond.data.meals[0].strIngredient4;
      ingredientFive.innerHTML = respond.data.meals[0].strIngredient5;
      ingredientSix.innerHTML = respond.data.meals[0].strIngredient6;
      ingredientSeven.innerHTML = respond.data.meals[0].strIngredient7;
      ingredientEight.innerHTML = respond.data.meals[0].strIngredient8;
      ingredientNine.innerHTML = respond.data.meals[0].strIngredient7;
      ingredientTen.innerHTML = respond.data.meals[0].strIngredient10;
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
  }
  handleFetch(userInput);
});
