export const getGifs = async (categoria) =>{

    const URL = `https://api.giphy.com/v1/gifs/search?api_key=Ffa1WNHbvyn2Ab65bJxyK0AZrHFjZzUO&q=${categoria}&limit=${5}`;
    const resp = await fetch(URL);
    const {data } = await resp.json();
  
    const gifs = data.map(gif => ({
      id: gif.id,
      nombre: gif.title,
      url:gif.images.downsized_medium.url
    }));    
    return gifs;
  }