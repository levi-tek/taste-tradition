async function fetchAndStoreAfricanDishes() {
    const africanCountries = ["Moroccan", "Tunisian", "Egyptian", "Kenyan"];
    const allMeals = [];
  
    for (const country of africanCountries) {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
      const data = await res.json();
  
      if (data.meals) {
        allMeals.push({ country, meals: data.meals });
      }
    }
  
    // Save to local storage
    localStorage.setItem("africanDishes", JSON.stringify(allMeals));
  }
  
  // Display from local storage
  function displayAfricanDishes() {
    const africaDiv = document.querySelector(".africa");
    africaDiv.innerHTML = "";
  
    const storedData = localStorage.getItem("africanDishes");
    if (!storedData) {
      africaDiv.innerHTML = "<p>No African dishes found in local storage.</p>";
      return;
    }
  
    const countries = JSON.parse(storedData);
  
    countries.forEach(entry => {
      const countryTitle = document.createElement("h2");
      countryTitle.textContent = `${entry.country} Dishes`;
      africaDiv.appendChild(countryTitle);
  
      entry.meals.forEach(meal => {
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("dish");
  
        mealDiv.innerHTML = `
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          <h4>${meal.strMeal}</h4>
        `;
        africaDiv.appendChild(mealDiv);
      });
    });
  }
  
  // Initial flow
  (async function () {
    // Only fetch if not already stored
    if (!localStorage.getItem("africanDishes")) {
      await fetchAndStoreAfricanDishes();
    }
    displayAfricanDishes();
  })();
  