import axios from 'axios';

import { Image } from '@/App.tsx';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getImages = async (): Promise<Image[]> => {
  await delay(500);
  const response = await client.get('photos?_page=1&limit=10');
  return response.data;
};

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
