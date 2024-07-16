import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Video</h1>}>
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
