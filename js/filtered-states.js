// declare your variables
const search = document.getElementById('search');
const output = document.getElementById('list');

let searchStates = async searchValue =>{
    const data = await fetch('../data/data.json');
    const result = await data.json();

    // matching function
   let matches = result.filter((states)=> {
       const regex = new RegExp(`^${searchValue}`, 'gi');
       return states.state.match(regex)|| states.capital.match(regex);
   })

    if(searchValue.length == 0){
        matches = [];
    }else{
        outputHtml(matches);
    }

};

let outputHtml = matches =>{
    if(matches.length > 0){
        const text = matches.map(match=>`
        <div class="card-body rounded bg-darkalpha shadow border-bottom-success mb-1">
        <h3 class='text-warning font-weight-bold'>${match.state} <span class="text-gray-200 lead">${match.capital}</span></h3>
        </div>
        `).join('');
        output.innerHTML= text;

    }else{
        output.innerHTML= '';
    }
}

// create an event function.
search.addEventListener('input', ()=> searchStates(search.value));