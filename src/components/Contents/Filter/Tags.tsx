'use client';
import { useEffect, useState } from 'react';

export interface Props {
  tag: string;
}

const Tags: React.FC<Props> = ({ tag }) => {
  return (
    <>
      <div className="tag__blocks">
        <>
          <span>{tag}</span>
        </>
      </div>
    </>
  );
};

export default Tags;
