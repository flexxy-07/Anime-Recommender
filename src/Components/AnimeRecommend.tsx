import React from 'react'
import Card from './Card'
interface AnimeRecProps {
  animeList : any[];
}


const AnimeRecommend = ({animeList} : AnimeRecProps) => {

  
  return (
    <div className='px-[1rem] mt-32 grid gap-3 grid-cols-6  w-full  flex-wrap place-items-center'>
      {animeList.map((anime) => (
        <Card 
        key={anime.mal_id}
        image = {anime.images.jpg.image_url}
        title={anime.title}
        genres={anime.genres.map((g : any) => g.name).join(', ')}
        score={anime.score}
        />
      ))}
      

    </div>
  )
}

export default AnimeRecommend