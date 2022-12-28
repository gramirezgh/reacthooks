

const apiKey = 'nkW071Dr08KeoAQxIcPFjO4xn8qLd9RZ';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then( ({data}) =>{
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch(console.warn);
