import axios from 'axios';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export type Image = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

export const getImages = async (page = 1): Promise<Image[]> => {
  await delay(500);
  const response = await client.get(`/photos?_page=${page}&limit=10`);
  return response.data;
};

export const getImage = async (id?: number): Promise<Image> => {
  await delay(500);
  const response = await client.get(`/photos/${id}`);
  return response.data;
};

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
