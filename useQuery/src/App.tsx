import { getImages } from '@/apis';
import { useFetch } from '@/hooks/useFetch.ts';
import * as S from './App.styles.tsx';

function App() {
  const { data: images, isLoading, error } = useFetch<Image[]>(getImages);
  // console.log('useFetch result', images, isLoading, error)

  return (
    <S.Wrapper>
      <S.Layout>
        <S.Title>Images - useQuery</S.Title>
        <S.List>
          {isLoading && <div>loading..</div>}
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
