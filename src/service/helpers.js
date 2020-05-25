export const mapArticle = (item) => {
  const { fields } = item;
  return {
    ...fields,
    discipline: {
      ...fields['discipline']?.fields,
    },
    authors: getAuthors(fields['authors']),
  }
}

const getAuthors = (authors) => {
  const mappedAuthors = [];
  for (const key in authors) {
    mappedAuthors.push(authors[key].fields);
  }
  return mappedAuthors;
}

export const mapSlug = (item) => {
  const { fields } = item;
  return fields['slug'];
}
