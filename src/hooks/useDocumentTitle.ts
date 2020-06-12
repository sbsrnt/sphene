import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    const APP_NAME = 'Sphene';
    document.title = title !== APP_NAME ? `${APP_NAME} | ${title}` : APP_NAME;
  }, [title]);
};

export default useDocumentTitle;
