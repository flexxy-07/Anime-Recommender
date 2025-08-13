
import Nav from './Navigation/Nav'
import AnimeRecommend from './Components/AnimeRecommend'
import "./App.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Genre {
  name: string;
}

interface AnimeItem {
  mal_id : number;
  title : string;
  genres : Genre[];
  images? : {
    jpg? : {
      image_url ?: string;
    }
  }
}

const App = () => {
  const[anime, setAnime] = useState<AnimeItem[]>([]);
  const [savedAnime, setSavedAnime] = useState<AnimeItem[]>([])

   const getApi = async () =>{
   const res =    await axios.get("https://api.jikan.moe/v4/top/anime")
   setAnime(res.data.data)
   setSavedAnime(res.data.data)
   
   }
   
     useEffect(() => {
   
       getApi()
       
       
     },[]);


  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
   
  if(e.target.value === ''){
    setAnime(savedAnime)
    
  }
  else{
    const filterdAnime = savedAnime.filter((anime) =>  
    anime.genres.some((g) => 
      g.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
  );

  console.log(filterdAnime)
  setAnime(filterdAnime)

  }
  }
  

  return (
    <div className='w-full'>
     <Nav handleInputChange={handleInputChange} />

      <AnimeRecommend animeList={anime} />
    </div>
  )
}

export default App