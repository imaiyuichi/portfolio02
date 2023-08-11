import { createClient, MicroCMSQueries } from 'microcms-js-sdk';

const client = createClient({
    serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN, // ここに実際のサービスドメインを記述
    apiKey: import.meta.env.MICROCMS_API_KEY, // ここに実際のAPIキーを記述
});

//APIの呼び出し
export const getTop = async (queries?: MicroCMSQueries) => {
    return await client.get({ endpoint: 'top', queries });
};

// //APIの呼び出し
// export const getAbout = async (queries?: MicroCMSQueries) => {
//     return await client.get({ endpoint: 'about', queries });
// };

export const getAbout = async (queries?: MicroCMSQueries) => {
    return await client.get<ApiResponse>({ endpoint: 'about', queries });
};
