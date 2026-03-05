import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';

export const useMicroCMS = () => {
  const config = useRuntimeConfig();
  
  const client = createClient({
    serviceDomain: config.public.microcmsServiceDomain,
    apiKey: config.public.microcmsApiKey,
  });

  const getList = async <T>(endpoint: string, queries?: MicroCMSQueries) => {
    return await client.get<{ contents: T[], totalCount: number }>({
      endpoint,
      queries,
    });
  };

  const getDetail = async <T>(endpoint: string, contentId: string, queries?: MicroCMSQueries) => {
    return await client.get<T>({
      endpoint,
      contentId,
      queries,
    });
  };

  return {
    client,
    getList,
    getDetail,
  };
};
