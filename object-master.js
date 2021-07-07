//an array of objects
const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);
//examples of filter and map provided by instructions
const bListPkmn = pokémon.filter(p => p.name[0] === "B");
const pkmnIds = pokémon.map(p => p.id);

//1: return an arrray of pokemon objects where the id evenly divisible by 3
const divideByThree = pokémon.filter(p => p.id % 3 === 0);
console.log(divideByThree);

//2: return an array of fire type pokemon
const fireType = pokémon.filter(pkmn => pkmn.types[0] === "fire");
console.log(fireType);

//3: return an array where "types" > 1
const moreThanOneType = pokémon.filter(x => x.types.length > 1);
console.log(moreThanOneType);

//4: return an array with just the names of the pokemon
const justTheNames = pokémon.map(item => item.name);
console.log(justTheNames);

//5: return just the names of the pokemon with an greater than 99
const idGreater = pokémon.filter(i => i.id > 99).map(i => i.name);
console.log(idGreater);

//6: return just the names of the pokemon whose Only type is poison
const onlyPoison = pokémon.filter(x => x.types.length === 1 && x.types[0] === "poison").map(x => x.name);
console.log(onlyPoison);

//7: return just the first type of all pokemon whose second type is flying
const onlyFlying = pokémon.filter(p => p.types.length === 2 && p.types[1] === "flying").map(p => p.name);
console.log(onlyFlying);

//8: return a count of pokemon that are normal type
const normalCount = pokémon.filter(p => p.types.includes('normal')).map(p => p.name);
console.log(normalCount);