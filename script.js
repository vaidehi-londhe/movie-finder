function searchMovie() {
    var movieName = document.getElementById("movieInput").value;
    var result = document.getElementById("result");

    if(movieName === "") {
        result.innerHTML = "<p>Please enter a movie name.</p>";
        return;
    }

    // Dummy movie database (static data)
    var movies = {
        "avatar": { year: "2009", rating: "7.8/10" },
        "inception": { year: "2010", rating: "8.8/10" },
        "titanic": { year: "1997", rating: "7.9/10" },
        "bahubali": { year: "2015", rating: "8.0/10" }
    };

    var movie = movieName.toLowerCase();

    if(movies[movie]) {
        result.innerHTML = `
            <div class="movie-card">
                <h3>${movieName}</h3>
                <p><strong>Year:</strong> ${movies[movie].year}</p>
                <p><strong>Rating:</strong> ${movies[movie].rating}</p>
            </div>
        `;
    } else {
        result.innerHTML = "<p>Movie not found in database.</p>";
    }
}
