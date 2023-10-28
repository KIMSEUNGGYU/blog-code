import { getImage, Image } from '@/example3/apis';
import { useQuery } from '@/example3/hooks/useQuery.ts';
import * as S from './App.styles.tsx';

export function SelectedItem({ id }: { id?: number }) {
  const { data: image } = useQuery<Image>(() => getImage(id), {
    queryKey: ['images', id],
    enabled: !!id,
    suspense: true,
  });

  if (!image) return null;
  return (
    <S.Layout>
      <S.Title>Selected Item</S.Title>
      {/*{isLoading && <S.Loading>loading...</S.Loading>}*/}
      <S.Item key={image.id}>
        <img src={image.thumbnailUrl} alt={'thumbnail'} />
        <span>{image.title}</span>
      </S.Item>
    </S.Layout>
  );
}
