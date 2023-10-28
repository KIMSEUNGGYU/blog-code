import { useState } from 'react';

import { useInView } from '@/example4/hooks/useInView.ts';
import { getImages } from './apis';
import * as S from './App.styles.tsx';
import { useInfiniteQuery } from './hooks/useInfiniteQuery.ts';

function App() {
  const [selectedItem, setSelectedItem] = useState<Image | undefined>(undefined);

  const {
    data: images,
    error,
    isLoading,
    onNextFetch,
  } = useInfiniteQuery<Image[]>((pageIndex) => getImages(pageIndex), {
    queryKey: ['images'],
    perPage: 10,
    // GYU-TEST: error 테스트
    useErrorBoundary: true,
  });

  const handleSelected = (item: Image) => {
    item.id === selectedItem?.id //
      ? setSelectedItem(undefined)
      : setSelectedItem(item);
  };

  const { ref: inViewRef, inView } = useInView<HTMLDivElement>({
    onInView: () => {
      if (!inView || isLoading || error) return;
      onNextFetch();
    },
  });

  // GYU-TEST: 로컬 에러 테스트
  if (error) return <h1>로컬 에러가 발생했습니다</h1>;
  return (
    <S.Wrapper>
      <S.Layout>
        <S.Title>Images - useInfiniteQuery</S.Title>
        <S.List>
          {isLoading && <S.Loading>loading...</S.Loading>}
          {images?.map((image, index) => (
            <S.Item key={index} onClick={() => handleSelected(image)}>
              <img src={image.thumbnailUrl} alt={'thumbnail'} />
              <span>{image.title}</span>
            </S.Item>
          ))}
          {isLoading && <div>loading...</div>}
          {!isLoading && <div ref={inViewRef} />}
        </S.List>
      </S.Layout>
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
