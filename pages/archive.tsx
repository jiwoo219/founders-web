import * as React from 'react';
import { ExtendedRecordMap } from 'notion-types';
import { NotionPage } from '../components/NotionPage';
import { archivePageId } from '../lib/config';
import notion from '../lib/notion';

export const getStaticProps = async () => {
  const pageId = archivePageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

const ArchivePage: React.FC<{ recordMap: ExtendedRecordMap }> = ({ recordMap }) => {
  return <NotionPage recordMap={recordMap} rootPageId={archivePageId} />;
};

export default ArchivePage;