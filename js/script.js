var userPokemon = document.getElementById("userPokemon");
var pokemonName = document.getElementById("pokeName");
var pokemonImg = document.getElementById("pokemonImg");
var typeList = document.getElementById("typeList");
var gameList = document.getElementById("gameList");
var movesList = document.getElementById("movesList");

function fetchPokemon(element, event) {
  event.preventDefault();

  fetch(`https://pokeapi.co/api/v2/pokemon/${userPokemon.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      pokemonImg.src = data.sprites.front_default;
      pokemonName.innerText = `${data.name} #${data.id}`;
      typeList.innerHTML = pokemonTypes(data.types);
      gameList.innerHTML = pokemonGames(data.game_indices);
      movesList.innerHTML = pokemonMoves(data.moves);
    })
    .catch((err) => {
      alert("it didnt work");
      console.log(err);
    });
}

function pokemonTypes(element) {
  var elementHTML = "";
  element.forEach((e) => {
    elementHTML += `<li class='list-group-item'>
            ${e.type.name}</li>
        `;
  });
  return elementHTML;
}

function pokemonGames(element) {
  var gameHTML = "";
  element.forEach((e) => {
    gameHTML += `<li class='list-group-item'>
            ${e.version.name}</li>`;
  });
  return gameHTML;
}

function pokemonMoves(element) {
  var movesHTML = "";
  element.forEach((e) => {
    movesHTML += `<li class='list-group-item'>
            ${e.move.name}</li>`;
  });
  return movesHTML;
}
