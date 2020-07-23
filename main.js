
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

/**********************
 * MAKE DINO FUNCTION *
 **********************/

const makeDino = function (species, period, carnivore, extinct) {
  const dino = {}
  dino.species = species;
  dino.period = period;
  dino.carnivore = carnivore;

  if (extinct === undefined) {
    dino.extinct = false;
  }
  else {
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
  
  let dinosaurObjectCopy = {}

  dinosaurObjectCopy.species = dinosaurObject.species
  dinosaurObjectCopy.period = dinosaurObject.period
  dinosaurObjectCopy.carnivore = dinosaurObject.carnivore
  dinosaurObjectCopy.extinct = dinosaurObject.extinct

  let species = dinosaurObjectCopy.species
  const last2Characters = species.slice(species.length - 2)
  let result = species.slice(0, species.length - 2)

  if (last2Characters === 'us') {
    dinosaurObjectCopy.species = result
  }

  else {
    dinosaurObjectCopy.species = species
  }

  return dinosaurObjectCopy
}

//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

/*****************************
 * TRUNCATE SPECIES FUNCTION *
 *****************************/


const truncateSpecies = function (dinoObject) {
  let newTruncatedDinosaur = {}
  newTruncatedDinosaur.species = dinoObject.species
  newTruncatedDinosaur.period = dinoObject.period
  newTruncatedDinosaur.carnivore = dinoObject.carnivore
  newTruncatedDinosaur.extinct = dinoObject.extinct

  if (newTruncatedDinosaur.species.length >= 10) {
    newTruncatedDinosaur.species = newTruncatedDinosaur.species.slice(0,7) + '...';
  }

  return newTruncatedDinosaur;

  

}



//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//



const makeExtinct = function (dinosaur) {
  return makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, true)

}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}