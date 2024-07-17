export class GetVideosForCategoriesListService {
    async execute(id) {
      const response = await fetch(
        `http://localhost:3000/videos?category=${id}`,
        //{headers: {'Content-Type': 'json'}}
      )
      const data = await response.json()

      console.log("esto es response" + response);
      console.log("esto es data" + data);

      return data
    }
  }