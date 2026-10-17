import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | Motown Tattoo Company, Detroit`
      : 'Motown Tattoo Company | Tattoo shop in Downtown Detroit';
  }, [title]);
}
