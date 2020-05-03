export const mapArticle = (item) => {
  const { fields } = item;
  return {
    ...fields,
    author: {
      ...fields['author'].fields,
    },
  }
}

export const mapSlug = (item) => {
  const { fields } = item;
  return fields['slug'];
}
