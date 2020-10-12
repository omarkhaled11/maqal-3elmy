import Head from 'next/head';
import { GA_TRACKING_ID } from '../lib/gtag';

const TITLE = 'مقال علمي';
const DESCRIPTION =
  'مقال علمي هي مبادرة علمية رائدة تحوي على أكتر من ١٠٠ باحث و باحثة يعملون في كبرى الجامعات و المعاهد البحثية يبسطون مقالات علمية نُشرت في دوريات علمية مرموقة.';
const URL = 'https://maqalelmy.org';

const isProduction = process.env.NODE_ENV === 'production';

export const SEO = ({
  description = DESCRIPTION,
  title = TITLE,
  type = 'website',
  url = URL,
  thumbnail = `${URL}/logo/Logo_R.png`,
}) => (
  <Head>
    {isProduction && (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', '${GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                      `,
          }}
        />
      </>
    )}

    <title>{title}</title>
    <meta name='description' content={description} />

    <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
    <link rel='icon' href='/favicon.ico' type='image/x-icon' />

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
