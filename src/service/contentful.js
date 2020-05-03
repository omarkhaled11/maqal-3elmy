import { mapArticle, mapSlug } from './helpers';
const contentful = require("contentful");

const CONTENT_TYPE_BLOGPOST = 'blogPost';

const initContentfulService = () => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  // Get all articles
  const getArticles = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      // select: 'fields.title,fields.slug'
    });

    if (!data.items || data.items.length === 0) return [];
    return data.items.map(mapArticle);
  };

  // Get all slugs
  const getSlugs = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      select: 'fields.slug'
    });

    if (!data.items || data.items.length === 0) return [];
    return data.items.map(mapSlug);
  }

  // Get article by slug
  const getArticleBySlug = async (slug) => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      'fields.slug[in]': `${slug}`,
    });

    if (!data.items || data.items.length === 0) return [];
    return mapArticle(data?.items[0]);
  }

  // export api calls
  return {
    getArticles,
    getSlugs,
    getArticleBySlug,
  }
}

export default initContentfulService;
