import {
  mapArticle,
  mapSlug,
  mapDiscipline,
  mapAuthor,
  mapIssue,
  mapLandingPageData,
  getBoardMembers,
} from './helpers';
const contentful = require('contentful');

const CONTENT_TYPE_BLOGPOST = 'blogPost';
const CONTENT_TYPE_DISCIPLINE = 'discipline';
const CONTENT_TYPE_AUTHOR = 'author';
const CONTENT_TYPE_ISSUE = 'issue';
const CONTENT_TYPE_LANDING_PAGE = 'landingPage';

const initContentfulService = () => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  /**
   * Get all articles
   */
  const getArticles = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      limit: 8,
      // select: 'fields.title,fields.slug'
    });

    if (!data.items || data.items.length === 0) return [];
    return data.items.map(mapArticle);
  };

  /**
   * Get article by slug
   */
  const getArticleBySlug = async slug => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      'fields.slug[in]': `${slug}`,
    });

    if (!data.items || data.items.length === 0) return {};
    return mapArticle(data?.items[0]);
  };

  /**
   * Get all articles slugs
   */
  const getArticlesSlugs = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      select: 'fields.slug',
    });

    if (!data.items || data.items.length === 0) return [];
    return data.items.map(mapSlug).filter(a => a);
  };

  /**
   * Get all Disciplines
   */
  const getDisciplines = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_DISCIPLINE,
      // select: 'fields.title,fields.slug'
    });

    if (!data.items || data.items.length === 0) return [];
    return data.items.map(mapDiscipline);
  };

  /**
   * Get discipline by slug
   */
  const getDisciplineBySlug = async slug => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_DISCIPLINE,
      'fields.slug[in]': `${slug}`,
    });

    if (!data.items || data.items.length === 0) return {};
    return mapDiscipline(data?.items[0]);
  };

  /**
   * Get all disciplines slugs
   */
  const getDisciplinesSlugs = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_DISCIPLINE,
      select: 'fields.slug',
    });

    if (!data.items || data.items.length === 0) return [];
    return data.items.map(mapSlug).filter(a => a);
  };

  /**
   * Get all Authors
   */
  const getAuthors = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_AUTHOR,
    });

    if (!data.items || data.items.length === 0) return [];
    return data.items.map(mapAuthor);
  };

  /**
   * Get author by slug
   */
  const getAuthorBySlug = async slug => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_AUTHOR,
      'fields.slug[in]': `${slug}`,
    });

    if (!data.items || data.items.length === 0) return {};
    return mapAuthor(data?.items[0]);
  };

  /**
   * Get all authors slugs
   */
  const getAuthorsSlugs = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_AUTHOR,
      select: 'fields.slug',
    });

    if (!data.items || data.items.length === 0) return [];
    return data.items.map(mapSlug).filter(a => a);
  };

  /**
   * Get all authors under disciplines
   */
  const getAuthorsList = async () => {
    const disciplines = await getDisciplines();
    return {
      disciplines: disciplines.filter(d => d?.authors?.length !== 0),
    };
  };

  /**
   * Get all disciplines with related articles
   */
  const getDisciplineWithArticles = async slug => {
    const discipline = await getDisciplineBySlug(slug);

    const articlesData = await client.getEntries({
      content_type: CONTENT_TYPE_BLOGPOST,
      'fields.discipline.sys.contentType.sys.id': 'discipline',
      'fields.discipline.fields.slug[in]': `${slug}`,
    });

    let articles = [];
    if (articlesData.items && articlesData.items.length > 0) {
      articles = articlesData.items.map(mapArticle);
    }

    return {
      discipline: discipline || [],
      articles,
    };
  };

  /**
   * Get all Issues
   */
  const getIssues = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_ISSUE,
    });

    if (!data.items || data.items.length === 0) return [];
    return data.items.map(mapIssue);
  };

  /**
   * Get Landing Page data
   */
  const getLandingPage = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_LANDING_PAGE,
    });
    return mapLandingPageData(data);
  };

  /**
   * Get all authors under disciplines
   */
  const getBoardMembersList = async () => {
    const data = await client.getEntries({
      content_type: CONTENT_TYPE_AUTHOR,
    });
    return getBoardMembers(data);
  };

  // export api calls
  return {
    getArticles,
    getArticleBySlug,
    getArticlesSlugs,
    getDisciplines,
    getDisciplineBySlug,
    getDisciplinesSlugs,
    getAuthors,
    getAuthorBySlug,
    getAuthorsSlugs,
    getAuthorsList,
    getDisciplineWithArticles,
    getIssues,
    getLandingPage,
    getBoardMembersList,
  };
};

export default initContentfulService;
