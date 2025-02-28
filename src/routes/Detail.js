import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Moviedetail.module.css";


function Detail({ rating, medium_cover_image, title }) {
    // const [loading, setLoading] = useState(true);
    // const [movieDetail, setMovieDetail] = useState("")
    // const { id } = useParams();
    // const getMovie = async () => {
    //     const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    //     console.log(json);
    //     setMovieDetail(json.data.movie);
    //     setLoading(false);
    // }
    // useEffect(() => {
    //     getMovie();
    // }, []);
    return (
        <div className={styles.detailpositon}>
            <div className={styles.bgcblack}></div>
            {/* {loading ? <h1 className="font_white">Loading...</h1> : */}
            <div className={styles.detail_box}>
                <div className={styles.detail_wrap}>
                    <div className={styles.detail_txt}>
                        <div className={styles.detail_tit}>
                            <h2>{title}</h2>
                            <ul>
                                {/* {movieDetail && genres.map(ge => <li>{ge}</li>)} */}
                            </ul>
                        </div>
                        <div>
                            <p>영화내용입니다. 영화내용입니다. 영화내용입니다. 영화내용입니다. 영화내용입니다. 영화내용입니다. 영화내용입니다. 영화내용입니다. </p>
                        </div>
                        <div className={styles.rating}>
                            <p>평점</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className={styles.movie_img}>
                        <img src={medium_cover_image} />
                    </div>
                </div>
            </div>
            {/* } */}
        </div>

    );
}

export default Detail;