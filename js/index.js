



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
        <div class="card card-side bg-base-100 shadow-xl ">
            <figure><img src=""/></figure>
        <div class="card-body">
            <h2 class="</h2>
            <p></p>
            <div class="card-actions justify-end">
        <button class="btn btn-primary">Watch</button>
        </div>
        </div>
        </div>
        `;
        searchContainer.appendChild(searchDiv);

    })
}















loadAllData()





