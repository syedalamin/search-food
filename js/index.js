



const loadAllData = () => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayContainer(data.meals));
}

const displayContainer = searchData => {
    searchData.forEach(search => {
        console.log(search);
        const searchContainer = document.getElementById('search-container');

        const searchDiv = document.createElement('div');
        searchDiv.innerHTML = ` 
        <div class=" bg-base-100 shadow-xl flex rounded-md">
            <figure class="w-[40%] "><img class=" h-full rounded-md" src="${search.strMealThumb}"/></figure>
            <div class=" p-5 w-[60%] ">
                <h2 class="text-xl font-bold">${search.strMeal.slice(0, 15) + "..."}</h2>
                <p>${search.strInstructions.slice(0,80) + "..."}</p>
            </div>
        </div>


        `;
        searchContainer.appendChild(searchDiv);

    })
}















loadAllData()





