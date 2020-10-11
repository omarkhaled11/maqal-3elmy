import Link from 'next/link';

import styles from './Footer.module.scss';

const FACEBOOK_LINK =
  'https://www.facebook.com/%D9%85%D9%82%D8%A7%D9%84-%D8%B9%D9%84%D9%85%D9%8A-109854060656506/';
const LINKEDIN_LINK = 'https://www.linkedin.com/company/42876982/';
const TWITTER_LINK = 'https://twitter.com/qNlEssc4yeVMrF9';

const Footer = ({ disciplines }) => {
  const naturalSciencesDisciplines = disciplines?.reduce(
    (filtered, discipline) => {
      if (discipline.cluster.slug === 'natural-sciences') {
        filtered.push(discipline);
      }

      return filtered;
    },
    []
  );

  const socialSciencesDisciplines = disciplines?.reduce(
    (filtered, discipline) => {
      if (discipline.cluster.slug === 'social-sciences') {
        filtered.push(discipline);
      }

      return filtered;
    },
    []
  );

  const half = Math.ceil(naturalSciencesDisciplines.length / 2);

  const disciplinesArrays1 = naturalSciencesDisciplines.splice(0, half);
  const disciplinesArrays2 = naturalSciencesDisciplines.splice(-half);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_head}>
          <p className={styles.footer_head_text}>
          مقال علمي هي مبادرة علمية رائدة تحوي على أكتر من ١٠٠ باحث و باحثة يعملون في كبرى الجامعات و المعاهد البحثية يبسطون مقالات علمية نُشرت في دوريات علمية مرموقة.
          </p>
        </div>
        <div className={styles.links_container}>
          <nav className={styles.links_column}>
            <Link href='/about'>
              <a className={styles.website_link}>من نحن</a>
            </Link>
            <Link href='/editors'>
              <a className={styles.website_link}>عن محررينا</a>
            </Link>
          </nav>
          <div className={styles.links_column}>
            {disciplinesArrays1.map(discipline => {
              return (
                <Link href={`/discipline/${discipline.slug}`}>
                  <a>{discipline.disciplineName}</a>
                </Link>
              );
            })}
          </div>
          <div className={styles.links_column}>
            {disciplinesArrays2.map(discipline => {
              return (
                <Link href={`/discipline/${discipline.slug}`}>
                  <a>{discipline.disciplineName}</a>
                </Link>
              );
            })}
            {socialSciencesDisciplines.map(discipline => {
              return (
                <Link href={`/discipline/${discipline.slug}`}>
                  <a>{discipline.disciplineName}</a>
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <hr className={styles.divider}></hr>
        </div>
        <div className={styles.social_media_container}>
          <a href={FACEBOOK_LINK}>
            <img
              className={styles.social_media}
              src='/icons/fb.svg'
              alt='facebook'
            />
          </a>
          <a href={LINKEDIN_LINK}>
            <img
              className={styles.social_media}
              src='/icons/li.svg'
              alt='linkedin'
            />
          </a>
          <a href={TWITTER_LINK}>
            <img
              className={styles.social_media}
              src='/icons/tw.svg'
              alt='twitter'
            />
          </a>
        </div>
        <div className={styles.copyrights}>صمم شعار مقال علمي مروى شيخون </div>
      </div>
    </footer>
  );
};

export default Footer;
