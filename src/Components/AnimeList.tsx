import React, { useEffect, useState } from 'react'
import Nav from '../Navigation/Nav';
import AnimeRecommend from './AnimeRecommend';
import axios from 'axios'



const AnimeList = () => {
 
  return (
    <div>

     <AnimeRecommend animeList = {filterdAnime} />
    </div>
  )
}

export default AnimeList