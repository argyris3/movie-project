import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

export default function Card({ result }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster.path}`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition duration-200 "
          alt="image is not available"
          style={{ maxWidth: '100%', height: 'auto' }}
        ></Image>
        <div className="">
          <p className="line-clamp-4 text-md">{result.overview}</p>
          <h2 className="font-semibold truncate text-lg text-orange-500">{result.title || result.name}</h2>
          <p className="text-sm text-emerald-400 flex items-center gap-5">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
