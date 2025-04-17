async function fetchAndStoreEuropeanDishes() {
  const europeanCountries = ["British", "Dutch", "French", "Italian", "Spanish", "Croatian", "Polish", "Portuguese", "Greek"];
  const allMeals = [];

  for (const country of europeanCountries) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
    const data = await res.json();

    if (data.meals) {
      allMeals.push({ country, meals: data.meals });
    }
  }

  localStorage.setItem("europeanDishes", JSON.stringify(allMeals));
}

function displayEuropeanDishes() {
  const container = document.querySelector(".europe");
  container.innerHTML = "";

  const storedData = localStorage.getItem("europeanDishes");
  if (!storedData) {
    container.innerHTML = "<p>No European dishes found in local storage.</p>";
    return;
  }

  const countries = JSON.parse(storedData);

  countries.forEach(entry => {
    const countryTitle = document.createElement("h2");
    countryTitle.textContent = `${entry.country} Dishes`;
    container.appendChild(countryTitle);

    const dishesContainer = document.createElement("div");
    dishesContainer.classList.add("dishes-container");

    entry.meals.forEach(meal => {
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("dish");

      mealDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h4>${meal.strMeal}</h4>
      `;
      dishesContainer.appendChild(mealDiv);
    });

    container.appendChild(dishesContainer);
  });
}

(async function () {
  if (!localStorage.getItem("europeanDishes")) {
    await fetchAndStoreEuropeanDishes();
  }
  displayEuropeanDishes();
})();
