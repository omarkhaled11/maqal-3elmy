import Head from 'next/head';

export const SEO = ({
  description,
  title = 'مقال علمي',
  type = 'website',
  url = '',
  thumbnail = 'http://euro-travel-example.com/thumbnail.jpg',
}) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />

    <meta property='og:type' content={type} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta
      property='og:image'
      content={thumbnail}
    />
    <meta
      property='og:url'
      content={url}
    />
    <meta name='twitter:card' content='summary' />

    <meta property='og:site_name' content='مقال علمي' />
    <meta name='twitter:image:alt' content='مقال علمي' />
  </Head>
);
