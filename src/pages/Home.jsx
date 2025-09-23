import React from 'react'
import MarqueeText from '../components/Feture/MarqueeText '
import PopularAritcle from '../components/Feture/PopularArticle'
import CategoriesSection from '../components/Feture/CategoriesSection'
import PopularPosts from '../components/Feture/PopularPosts'




const Home = () => {
  return (
    <div >
      <MarqueeText/>
      <PopularAritcle/>
      <CategoriesSection/>
      <PopularPosts/>
    </div>
  )
}

export default Home