export const mapArticle = (item) => {
  const { fields } = item;
  console.log(fields)
  return {
    ...fields,
    discipline: {
      ...fields['discipline']?.fields,
    },
    authors: _getAuthorsReference(fields['authors']),
    linguistics: _getAuthorsReference(fields['linguistics']),
  }
}

export const mapIssue = (item) => {
  const { fields } = item;
  return {
    ...fields,
    articles: fields['articles']?.map(mapArticle),
  }
}

export const mapDiscipline = (item) => {
  const { fields } = item;
  const discipline = {
    ...fields,
    cluster: _getClusterReference(fields['clusterId']),
    authors: _getAuthorsReference(fields['authors']),
  };
  delete discipline.clusterId;
  return discipline;
}

export const mapAuthor = (item) => {
  const { fields } = item;
  return {
    ...fields,
    disciplines: _getDisciplinesReference(fields['disciplines']),
  }
}

export const mapSlug = (item) => {
  const { fields } = item;
  return fields && fields['slug'];
}

const _getAuthorsReference = (authors) => {
  const mappedAuthors = [];
  for (const key in authors) {
    mappedAuthors.push(authors[key]?.fields);
  }
  return mappedAuthors.filter(a => a);
}

const _getDisciplinesReference = (disciplines) => {
  const mappedDisciplines = [];
  for (const key in disciplines) {
    mappedDisciplines.push(disciplines[key]?.fields);
  }
  return mappedDisciplines.filter(a => a);
}

const _getClusterReference = (cluster) => {
  if (!cluster) return {};
  const { fields } = cluster;
  return {
    ...fields,
  }
}
