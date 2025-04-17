async function fetchAndStoreSouthAmericanDishes() {
    const southAmericanCountries = ["Brazilian", "Argentine", "Chilean", "Peruvian", "Colombian", "Ecuadorian", "Venezuelan", "Paraguayan", "Bolivian"];
    const allMeals = [];
  
    for (const country of southAmericanCountries) {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
      const data = await res.json();
  
      if (data.meals) {
        allMeals.push({ country, meals: data.meals });
      }
    }
  
    localStorage.setItem("southAmericanDishes", JSON.stringify(allMeals));
  }
  
  function displaySouthAmericanDishes() {
    const container = document.querySelector(".southAmerica");
    container.innerHTML = "";
  
    const storedData = localStorage.getItem("southAmericanDishes");
    if (!storedData) {
      container.innerHTML = "<p>No South American dishes found in local storage.</p>";
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
    if (!localStorage.getItem("southAmericanDishes")) {
      await fetchAndStoreSouthAmericanDishes();
    }
    displaySouthAmericanDishes();
  })();
  