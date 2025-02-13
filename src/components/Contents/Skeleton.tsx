import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props: any) => {
  return (
    <div className="content__skeleton">
      <ContentLoader
        speed={1}
        width={674}
        height={363}
        viewBox="0 0 674 363"
        uniqueKey="my-random-value"
        {...props}>
        <rect x="0" y="0" rx="0" ry="0" width="674" height="363" />
      </ContentLoader>
    </div>
  );
};

export default MyLoader;
