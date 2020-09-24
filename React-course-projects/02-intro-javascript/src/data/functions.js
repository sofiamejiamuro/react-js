import heroes from './heroes';

// console.log(heroes);
const getHeroeById = (id) => {
  return heroes.find( heroe  => heroe.id === id)
};

//console.log('id',getHeroeById(2));

 
export {
  getHeroeById,
}