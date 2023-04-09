import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33663110-3ce3aee5a9ae3ad5b2e6971d2';
export const PER_PAGE = 12;

export async function getPixaBay(searchText, page) {
  const URL = `${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  const response = await axios.get(URL);
  return response.data;
}
