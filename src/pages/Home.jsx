import { useState, useEffect } from 'react';
import '../../src/reset.css';
import '../../src/App.css';
import Banner from '../components/Banner.jsx';
import { GetCategoriesListService } from '../services/GetCategoriesServices.js';
import { GetVideosForCategoriesListService } from '../services/GetVideosForCategories.js';

function Home() {

  useEffect(() => {
    const fetchCategories = async () => {

      const serviceCategories = new GetCategoriesListService();
      const data = await serviceCategories.execute();
      data.forEach(category => {
        console.log(category.id);
        console.log(category.name);
      })
    }
    fetchCategories();
  }, [])

  return (
    <main>
      <Banner />
    </main>
  )
}

export default Home;
