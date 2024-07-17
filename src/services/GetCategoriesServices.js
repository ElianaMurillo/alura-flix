export class GetCategoriesListService {
    async execute() {
      const response = await fetch(
        'http://localhost:3000/categories',
        //{headers: {'Content-Type': 'json'}}
      )
      const data = await response.json()

      return data
    }
  }

