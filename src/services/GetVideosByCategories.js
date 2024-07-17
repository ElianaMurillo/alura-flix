export class GetVideosByCategoriesListService {
    async execute(name) {
      const response = await fetch(
        `http://localhost:3000/videos?category=${name}`,
        //{headers: {'Content-Type': 'json'}}
      )
      const data = await response.json()

      return data
    }
  }