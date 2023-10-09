import { getImages } from './apis';
import * as S from './App.styles.tsx';
import { useFetch } from './hooks/useFetch.ts';

function App() {
  const { data: images, isLoading } = useFetch<Image[]>(getImages);

  return (
    <S.Wrapper>
      <S.Layout>
        <S.Title>Images - useFetch</S.Title>
        <S.List>
          {isLoading && <S.Loading>loading...</S.Loading>}
          {images?.map((image) => (
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

export type Image = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};
