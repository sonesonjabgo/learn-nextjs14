import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieCredit from "../../../../components/movie-credit";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default function MovieDetail({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Video</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense>
        <MovieCredit id={id}></MovieCredit>
      </Suspense>
      <Suspense>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

/**
 * 코드 챌린지:
 * /credit, /providers, /similar url 사용해서
 * 상세 페이지 예쁘게 꾸며보기
 */
