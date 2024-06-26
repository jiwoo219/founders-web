import * as React from 'react';
import { ExtendedRecordMap } from 'notion-types';
import { NotionPage } from '../components/NotionPage';
import { rootNotionPageId } from '../lib/config';
import notion from '../lib/notion';

export const getStaticProps = async () => {
  const pageId = rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

const HomePage: React.FC<{ recordMap: ExtendedRecordMap }> = ({ recordMap }) => {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
};

export default HomePage;
