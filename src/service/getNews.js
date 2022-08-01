import axios from "axios";
export function getNews(category = "Health") {
  const API_KEY = "902e40f921eb42dba20d0ecf5d5711b1";
  const API_Endpoint = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
  return axios.get(`${API_Endpoint}&apiKey=${API_KEY}`);
}
