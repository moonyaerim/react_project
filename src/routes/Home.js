import { useState, useEffect } from "react";
import Header from "../components/Header";
import Movie from "../components/Movie";
import Slide from "../components/Slide";
import styles from "../css/App.module.css";
import "../css/Reset.css";
import "../css/common.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimun_rating=8.8&sort_by=year`)).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])
    console.log(movies)
    return (
        <div>
            <Header />

            {loading ? <h1 className="font_white">Loading...</h1> :

                <div>
                    <Slide />

                    <div className={`${styles.movie_wrap}`}>
                        <div className={styles.movies}>{movies.map(movie =>
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                genres={movie.genres}
                            />
                        )}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Home;