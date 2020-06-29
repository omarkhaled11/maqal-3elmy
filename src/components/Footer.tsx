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

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <img className={styles.logo} src="/logo/white.svg" alt="logo" />
        </div>
        <div className={styles.links}>
          <div className={styles.menu}>
            <nav className={styles.nav}>
              <Link href="/about">
                <a>من نحن</a>
              </Link>
              <Link href="/disciplineEditors">
                <a>عن محررينا</a>
              </Link>
              <Link href="/">
                <a>اتصل بنا</a>
              </Link>
              <Link href="/">
                <a>سندات</a>
              </Link>
            </nav>
            <div className={styles.sub_nav}>
              <ul className={styles.list}>
                <span className={styles.cluster_title}>العلوم الطبيعية</span>
                <div className={styles.cluster_items}>
                  {naturalSciencesDisciplines.map((discipline) => {
                    return (
                      <li className={styles.item}>
                        <a
                          className={styles.link}
                          href={`discipline/${discipline.slug}`}
                        >
                          {discipline.disciplineName}
                        </a>
                      </li>
                    );
                  })}
                </div>
              </ul>
              <ul className={styles.list}>
                <span className={styles.cluster_title}>العلوم الإجتماعية</span>
                <div className={styles.cluster_items}>
                  {socialSciencesDisciplines.map((discipline) => {
                    return (
                      <li className={styles.item}>
                        <a
                          className={styles.link}
                          href={`discipline/${discipline.slug}`}
                        >
                          {discipline.disciplineName}
                        </a>
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.social_media_container}>
          <a href={FACEBOOK_LINK}>
            <img
              className={styles.social_media}
              src="/icons/fb.svg"
              alt="facebook"
            />
          </a>
          <a href={LINKEDIN_LINK}>
            <img
              className={styles.social_media}
              src="/icons/li.svg"
              alt="linkedin"
            />
          </a>
          <a href={TWITTER_LINK}>
            <img
              className={styles.social_media}
              src="/icons/tw.svg"
              alt="twitter"
            />
          </a>
        </div>
        <div>
          <hr className={styles.divider}></hr>
        </div>
        <div className={styles.copyrights}>جميع الحقوق محفوظة</div>
      </div>
    </footer>
  );
};

export default Footer;
