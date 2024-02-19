import { createClient, MicroCMSQueries } from 'microcms-js-sdk';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN, // ここに実際のサービスドメインを記述
  apiKey: import.meta.env.MICROCMS_API_KEY, // ここに実際のAPIキーを記述
});

//APIの呼び出し
export const getTop = async (queries?: MicroCMSQueries) => {
  return await client.get({ endpoint: 'top', queries });
};

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get({ endpoint: 'blogs', queries });
};

export const getBlogsAll = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents({ endpoint: 'blogs', queries });
};

export const getBlogDetail = async (
  blogId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail({
    endpoint: 'blogs',
    contentId: blogId,
    queries,
  });
};

export const getWorks = async (queries?:MicroCMSQueries) => {
  return await client.get({ endpoint: 'works', queries });
}

export const getWorksAll = async (queries?: MicroCMSQueries) => {
  return await client.getAllContents({ endpoint: 'works', queries });
};

export const getWorksDetail = async (
  blogId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail({
    endpoint: 'works',
    contentId: blogId,
    queries,
  });
};