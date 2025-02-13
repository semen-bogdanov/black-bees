import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props: any) => {
  return (
    <div className="flex lg:md:justify-center m-5 items-center">
      <ContentLoader
        speed={1}
        width={1170}
        height={676}
        viewBox="0 0 1170 676"
        uniqueKey="my-random-value"
        {...props}>
        <rect x="0" y="0" rx="0" ry="0" width="1170" height="676" />
      </ContentLoader>
    </div>
  );
};

export default MyLoader;
