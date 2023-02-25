



const loadAllData = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayContainer(data.meals));
}

const displayContainer = searchData => {
    const searchContainer = document.getElementById('search-container');
    searchContainer.innerHTML = '';
    searchData.forEach(search => {
        console.log(search);
        const searchDiv = document.createElement('div');
        searchDiv.innerHTML = ` 
        <div class="  bg-slate-100 shadow-lg flex rounded-md">
            <figure class="w-[40%] "><img class=" h-full rounded-md" src="${search.strMealThumb}"/></figure>
            <div class=" p-5 w-[60%] ">
                <h2 class="text-xl font-bold">${search.strMeal.slice(0, 15) + "..."}</h2>
                <p class="mt-2 ">${search.strInstructions.slice(0,80) + "..."}</p>
                <button class="text-yellow-500 font-semibold mt-2">View Details</button>
            </div>
        </div>
        `;
        searchContainer.appendChild(searchDiv);

    })
}

const searchBtn = () =>{
    const searchText = document.getElementById('text-input-field').value;
    // console.log(searchText)
    loadAllData(searchText)

    
}















loadAllData('fish')





