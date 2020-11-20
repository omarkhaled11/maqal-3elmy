export const mapArticle = item => {
  if (!item) return null;
  const { fields } = item;
  const imageUrl = fields?.['heroImage']?.fields?.file?.url
    ? `https:${fields?.['heroImage']?.fields?.file?.url}`
    : '';

  return {
    ...fields,
    discipline: {
      ...fields['discipline']?.fields,
    },
    image: imageUrl,
    authors: _getAuthorsReference(fields['authors']),
    linguistics: _getAuthorsReference(fields['linguistics']),
  };
};

export const mapIssue = item => {
  const { fields } = item;
  return {
    ...fields,
    articles: fields['articles']?.map(mapArticle),
  };
};

export const mapDiscipline = item => {
  const { fields } = item;
  const discipline = {
    ...fields,
    cluster: _getClusterReference(fields['clusterId']),
    authors: _getAuthorsReference(fields['authors']),
  };
  delete discipline.clusterId;
  return discipline;
};

export const mapAuthor = item => {
  const { fields } = item;
  return {
    ...fields,
    disciplines: _getDisciplinesReference(fields['disciplines']),
  };
};

export const mapSlug = item => {
  const { fields } = item;
  return fields && fields['slug'];
};

const _getAuthorsReference = authors => {
  const mappedAuthors = [];
  for (const key in authors) {
    mappedAuthors.push(authors[key]?.fields);
  }
  return mappedAuthors.filter(a => a);
};

const _getDisciplinesReference = disciplines => {
  const mappedDisciplines = [];
  for (const key in disciplines) {
    mappedDisciplines.push(disciplines[key]?.fields);
  }
  return mappedDisciplines.filter(a => a);
};

const _getClusterReference = cluster => {
  if (!cluster) return {};
  const { fields } = cluster;
  return {
    ...fields,
  };
};

export const mapLandingPageData = data => {
  let landingPageData = {};
  if (!data.items || data.items.length === 0) return landingPageData;
  const { fields } = data?.items[0];

  landingPageData = {
    mainArticle: mapArticle(fields?.mainArticle),
    firstArticle: mapArticle(fields?.firstArticle),
    secondArticle: mapArticle(fields?.secondArticle),
    thirdArticle: mapArticle(fields?.thirdArticle),
    fourthArticle: mapArticle(fields?.fourthArticle),
    moreArticleList: fields['moreArticlesList']?.map(mapArticle),
  };

  return landingPageData;
};

export const getBoardMembers = data => {
  if (!data.items || data.items.length === 0) return [];
  const authors = data.items.filter(a => a?.fields?.isBoardMember);
  return authors.map(mapAuthor);
};
