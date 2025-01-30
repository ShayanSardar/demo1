const movies = [
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      image: "https://via.placeholder.com/200x300?text=Inception"
    },
    {
      title: "Titanic",
      description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      image: "https://via.placeholder.com/200x300?text=Titanic"
    },
    {
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      image: "https://via.placeholder.com/200x300?text=The+Matrix"
    }
  ];
  
  function displayMovies(movies) {
    const container = document.getElementById("movieContainer");
    container.innerHTML = '';  // Clear previous movies
  
    movies.forEach(movie => {
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
  
      movieElement.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <div class="movie-content">
          <h3>${movie.title}</h3>
          <p>${movie.description}</p>
        </div>
      `;
  
      container.appendChild(movieElement);
    });
  }
  
  function searchMovies() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery)
    );
    displayMovies(filteredMovies);
  }
  
  // Initially display all movies
  displayMovies(movies);
  