'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import MainContainer from '@/components/MainConteiner';
import { useParams } from 'next/navigation';
import MyLoader from './Skeleton2';
import { useTemplate } from '@/utils/hooks/useTemplate';

export default function PageId() {
  const params = useParams();
  let id = params.id;
  const [message, setMessage] = useState<any>(null);
  const { data, isFetching, isFetched, isLoading, refetch } = useTemplate();

  useEffect(() => {
    setMessage(data);
  }, [message, data]);

  let massiv1: any;
  if (message?.length) {
    massiv1 = message.filter((element: any) => element.id == id);
  }

  return (
    <MainContainer>
      <div className="container">
        <div className="post__inner">
          {massiv1
            ? massiv1.map((element: any, index: number) => (
                <div key={index}>
                  <Image className="post__img" src={element.img} alt="post" />
                  <h1 className="post__title">{element.title}</h1>
                  <p className="post__text">{element.text}</p>
                </div>
              ))
            : [...new Array(1)].map((_: any, index: any) => <MyLoader key={index} />)}
        </div>
      </div>
    </MainContainer>
  );
}
