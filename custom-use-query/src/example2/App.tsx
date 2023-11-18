import { useState } from 'react';

import { getImage, getImages } from './apis';
import * as S from './App.styles.tsx';
import { useQuery } from './hooks/useQuery.ts';

function App() {
  const [selectedItem, setSelectedItem] = useState<Image | undefined>(undefined);

  const { data: images, isLoading } = useQuery<Image[]>(getImages, {
    queryKey: ['images'],
  });
  const { data: image, isLoading: imageLoading } = useQuery<Image>(() => getImage(selectedItem?.id), {
    queryKey: ['images', selectedItem?.id],
    enabled: !!selectedItem?.id,
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
      {selectedItem && image && (
        <S.Layout>
          <S.Title>Selected Item</S.Title>
          {imageLoading && <S.Loading>loading...</S.Loading>}
          <S.Item key={image.id}>
            <img src={image.thumbnailUrl} alt={'thumbnail'} />
            <span>{image.title}</span>
          </S.Item>
        </S.Layout>
      )}
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
