async function fetchAndStoreAsianDishes() {
    const asianCountries = ["Chinese", "Japanese", "Thai", "Indian", "Vietnamese"];
    const allMeals = [];
  
    for (const country of asianCountries) {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
      const data = await res.json();
  
      if (data.meals) {
        allMeals.push({ country, meals: data.meals });
      }
    }
  
    // Save to local storage
    localStorage.setItem("asianDishes", JSON.stringify(allMeals));
  }

  function displayAsianDishes() {
    const asiaDiv = document.querySelector(".asia");
    asiaDiv.innerHTML = "";
  
    const storedData = localStorage.getItem("asianDishes");
    if (!storedData) {
      asiaDiv.innerHTML = "<p>No Asian dishes found in local storage.</p>";
      return;
    }
  
    const countries = JSON.parse(storedData);
  
    countries.forEach(entry => {
      const countryTitle = document.createElement("h2");
      countryTitle.textContent = `${entry.country} Dishes`;
      asiaDiv.appendChild(countryTitle);
  
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
  
      asiaDiv.appendChild(dishesContainer);
    });
  }
  

  (async function () {
    if (!localStorage.getItem("asianDishes")) {
      await fetchAndStoreAsianDishes();
    }
    displayAsianDishes();
  })();
  