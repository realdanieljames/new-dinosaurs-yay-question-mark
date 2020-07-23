/**********************
 * MAKE DINO FUNCTION *
 **********************/

const makeDino = function (species, period, carnivore, extinct) {
    const dino = {}
    dino.species = species;
    dino.period = period;
    dino.carnivore = carnivore;
    
    if (extinct === undefined){
      dino.extinct = false;
    }
    else{
    dino.extinct = extinct;
    };

    return dino
}

//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//


/**************************
 * MAKE SINGULAR FUNCTION *
 **************************/
//    given a dinosaur object
//    returns a new dinosaur object
//    with 'us' ending suffix removed
const makeSingular = function (dinosaurObject) {
  //remove last 2 string characters for species' value 
  //if the last 2 characters are equal to 'us'
  //.slice()
  //.splice()
  let species = dinosaurObject.species
  // console.log(species)
  const last2Characters = species.slice(species.length - 2)
  // console.log(species)
  let result = species.slice(0, species.length - 2)
  if (last2Characters === 'us') {

    // console.log(result)
    return result
    // }
    // else {
    //   return species
    // }
    // console.log(last2Characters)

  }
}
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//


const truncateSpecies = function () {
}

const makeExtinct = function () {

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}