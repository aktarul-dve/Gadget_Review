import React from 'react'
import MarqueeText from '../components/Feture/MarqueeText '
import PopularAritcle from '../components/Feture/PopularArticle'
import CategoriesSection from '../components/Feture/CategoriesSection'




const Home = () => {
  return (
    <div >
      <MarqueeText/>
      <PopularAritcle/>
      <CategoriesSection/>
    </div>
  )
}

export default Home