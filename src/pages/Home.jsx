import { useState, useEffect } from 'react';
import '../../src/reset.css';
import '../../src/App.css';
import Banner from '../components/Banner.jsx';
import { GetCategoriesListService } from '../services/GetCategoriesServices.js';
import { GetVideosByCategoriesListService } from '../services/GetVideosByCategories.js';

function Home() {

  const [categories, setCategories] = useState([]);
  const [videosForcategories, setVideosForCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {

      const serviceCategories = new GetCategoriesListService();
      const data = await serviceCategories.execute();
        setCategories(data)
    }
    fetchCategories();
  }, [])

  useEffect(() => {
    const fetchVideosForCategories = async () => {

      const serviceVideosForCategories = new GetVideosByCategoriesListService();
      const data = await serviceVideosForCategories.execute();
        setVideosForCategories(data)
    }
    fetchVideosForCategories();
  }, [])

  return (
    <main>
      <Banner />
      <section className='container-videos-for-categories'>
        {
          categories.map((category, indexCategory) => {
            return (
              <div key={indexCategory} className={`name-category-${category.name}`}>
                <p>{category.name}</p>
                {
                  videosForcategories.map((videos, indexVideos) => {
                    return (
                      <div key={indexVideos} >
                        <div>{videos.name}</div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </section>
    </main>
  )
}

export default Home;
