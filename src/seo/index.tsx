import Head from 'next/head';

const TITLE = 'مقال علمي';
const DESCRIPTION =  'مقال علمي هي مبادرة علمية رائدة تحوي على أكتر من ١٠٠ باحث و باحثة يعملون في كبرى الجامعات و المعاهد البحثية يبسطون مقالات علمية نُشرت في دوريات علمية مرموقة.';
const URL = 'https://maqalelmy.org';

export const SEO = ({
  description = DESCRIPTION,
  title = TITLE,
  type = 'website',
  url = URL,
  thumbnail = `${URL}/logo/Logo_R.png`,
}) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />

    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />

    <meta property='og:type' content={type} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={thumbnail} />
    <meta property='og:url' content={url} />
    <meta name='twitter:card' content='summary' />

    <meta property='og:site_name' content={TITLE} />
    <meta name='twitter:image:alt' content={TITLE} />

    <meta charSet='utf-8' />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1.0, user-scalable=no'
    />
  </Head>
);
