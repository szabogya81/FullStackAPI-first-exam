const countryController = require('../controller/countryController');

/**
 * 1. Készíts egy router objektumot, ami a get kulcsnál meghívja a carController 
 * getAll nevű metódusát és string típusként visszaadja az adatok tömbjét.
 */
const router =  {
  'get': async (res) => res.end(JSON.stringify(await countryController.getAll(), null, 4))
}
/**
 * 2. A module az előző pontnál elkészített router objektumot adja vissza.
 */
module.exports = Object.freeze(router);