import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Detail from "../routes/Detail";
import styles from "../css/movie.module.css";
import { useState } from "react";



function Movie({ id, coverImg, title, genres }) {
    const [detail, setDetail] = useState(false)
    const [movieDetail, setMovieDetail] = useState("")
    const onClick = async () => {

        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setMovieDetail(json.data.movie);

        setDetail(!detail);
    }

    return (
        <div onClick={onClick} style={{ cursor: "pointer" }}>
            {detail ? <Detail
                data={movieDetail}
                rating={movieDetail.rating}
                medium_cover_image={movieDetail.medium_cover_image}
                title={movieDetail.title}
            /> :
                <div className={styles.moive_contents}>
                    {/* <Link to={`/movie/${id}`}> */}
                    <div className={styles.movie_img}>
                        <img src={coverImg} alt={title} />
                    </div>
                    <div className={styles.movie_tit}>
                        <h2 className="font_white">{title}</h2>
                        <ul className="font_white">
                            {genres.map(g => (
                                <li className="font_gray" key={g}>{g}</li>
                            ))}
                        </ul>
                    </div>
                    {/* </Link> */}
                </div>
            }
        </div>
    );
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;