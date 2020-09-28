// Async - await

/* const getImagePromise = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve('https:// hdafiuwehe')
  })
  return promesa
}

getImagePromise().then(console.log); */

/* const getImagePromise = () => {
  return ('https://hdafiuwehe');
}

console.log(getImagePromise()); // 'https:// hdafiuwehe' - es una función normal

const getImagePromiseAsync = async () => {
  return ('https://hdafiuwehe');
}

console.log(getImagePromiseAsync()); // Ya es una promesa por el async

getImagePromiseAsync().then(console.log); // 'https:// hdafiuwehe'
 */

// getImagePromise retunrs a promise
const getImagePromise = async() => {
  try {
    const apiKey = 'US5pS4v19yQs5zl9oWSFwjUP6wWlnQzJ';
    // fetch returns also a promise que resuleve una response (.then)
    // usign await promise returns into reponse, espera a que esto se ejecute andtes de seguir con la siguinete line de codigo
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    // sin el await es una promesa, el await nos da el reponse
    const { data }=  await resp.json();
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append( img ); 
  }catch(error){
    // Manejo del error
  }
 
}

getImagePromise();

// el try y el catch son las formas de manejo de errores en asyc/ await