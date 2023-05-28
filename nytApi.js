const apiKey = "q7I9SNGg3IgvaCFEZm6zkpsdQnG76vA3";
const url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apiKey}`;



fetch(url)
  .then(response => response.json())
  .then(data => {
    // Aquí puedes procesar los datos de respuesta
    console.log(data);

  })
  .catch(error => {
    console.log(error);
  });