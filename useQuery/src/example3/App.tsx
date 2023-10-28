import { Suspense, useState } from 'react';

import { getImages } from './apis';
import * as S from './App.styles.tsx';
import { useQuery } from './hooks/useQuery.ts';
import { SelectedItem } from './SelectedItem';

function App() {
  const [selectedItem, setSelectedItem] = useState<Image | undefined>(undefined);

  const { data: images, isLoading } = useQuery<Image[]>(getImages, {
    queryKey: ['images'],
  });

  const handleSelected = (item: Image) => {
    item.id === selectedItem?.id //
      ? setSelectedItem(undefined)
      : setSelectedItem(item);
  };

  return (
    <S.Wrapper>
      <S.Layout>
        <S.Title>Images - useQuery</S.Title>
        <S.List>
          {isLoading && <S.Loading>loading...</S.Loading>}
          {images?.map((image) => (
            <S.Item key={image.id} onClick={() => handleSelected(image)}>
              <img src={image.thumbnailUrl} alt={'thumbnail'} />
              <span>{image.title}</span>
            </S.Item>
          ))}
        </S.List>
      </S.Layout>
      <Suspense fallback={<S.Loading>Suspense Loading...</S.Loading>}>
        <SelectedItem id={selectedItem?.id} />
      </Suspense>
    </S.Wrapper>
  );
}

export default App;

export type Image = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};
