import { useEffect, useState } from 'react';

import * as S from './App.styles.tsx';

function App() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_page=1&limit=10') //
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.Layout>
        <S.Title>Images - useQuery</S.Title>
        <S.List>
          {images.map((image) => (
            <S.Item key={image.id}>
              <img src={image.thumbnailUrl} alt={'thumbnail'} />
              <span>{image.title}</span>
            </S.Item>
          ))}
        </S.List>
      </S.Layout>
    </S.Wrapper>
  );
}

export default App;

type Image = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};
