function toggleSearchBox() {
            // Get the search box element
            const searchBox = document.getElementById('search-box');

            // Toggle its visibility
            if (searchBox.style.display === 'none') {
                searchBox.style.display = 'inline';
            } else {
                searchBox.style.display = 'none';
            }
        }



  document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.querySelector(".about-section button");
    const aboutSection = document.querySelector(".about-section");

    readMoreBtn.addEventListener("click", () => {
      aboutSection.classList.toggle("expanded");
      readMoreBtn.textContent = aboutSection.classList.contains("expanded") 
        ? "Read Less" 
        : "Read More";
    });
  });


  document.getElementById("year").textContent = new Date().getFullYear();




//         function searchMeal() {
//             const mealName = document.getElementById('search-box').value;
//             const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
          
//             fetch(url)
//               .then(response => response.json())
//               .then(data => {
//                 const resultsDiv = document.getElementById('mealResults');
//                 resultsDiv.innerHTML = ""; // clear previous results
          
//                 if (data.meals) {
//                   data.meals.forEach(meal => {
//                     const mealHTML = `
//                       <h2>${meal.strMeal}</h2>
//                       <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="250"/>
//                       <p><strong>Category:</strong> ${meal.strCategory}</p>
//                       <p><strong>Area:</strong> ${meal.strArea}</p>
//                       <p>${meal.strInstructions.substring(0, 300)}...</p>
//                       <hr/>
//                     `;
//                     resultsDiv.innerHTML += mealHTML;
//                   });
//                 } else {
//                   resultsDiv.innerHTML = "<p>No meals found.</p>";
//                 }
//               })
//               .catch(err => {
//                 console.error("Error fetching meals:", err);
//                 document.getElementById('mealResults').innerHTML = "<p>Error fetching data.</p>";
//               });
//           }
          
//         //   

// searchMeal()
          