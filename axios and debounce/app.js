const div = document.querySelector("div");
const input = document.createElement("input");
div.appendChild(input);
const p = document.createElement("p");
div.appendChild(p);

async function fetchData (word) {
    try {
        const response = await axios.get(`https://mashape-community-urban-dictionary.p.rapidapi.com/define`, {
        params : {
            term: word
        }, 
        headers : {
            'x-rapidapi-host'   : host,
            'x-rapidapi-key'    : key
        }
        });
        return response.data.list;
    }
    catch (error) {
        p.innerHTML = error;
    } 
}

async function searchResult(event) {

    const arrResults = [];
    const word = event.target.value;
    const results = await fetchData(word);

    for (let result of results) {
        arrResults.push(result.definition);
    }

    const selectedResult = arrResults[Math.floor(Math.random()*arrResults.length)];
    
    if (selectedResult === undefined) {
        p.innerHTML = `Not a valid word!`;
    } else {
        p.innerHTML = `
        <strong>${word.charAt(0).toUpperCase() + word.slice(1)}:</strong>
        <br> 
        ${selectedResult.replaceAll("[", "").replaceAll("]", "")}`
    }
}

input.addEventListener("input", debounce(searchResult, 500));