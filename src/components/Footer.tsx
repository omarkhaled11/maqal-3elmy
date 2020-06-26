import Link from 'next/link';

import styles from './Footer.module.scss';

const FACEBOOK_LINK = "https://www.facebook.com/%D9%85%D9%82%D8%A7%D9%84-%D8%B9%D9%84%D9%85%D9%8A-109854060656506/";
const LINKEDIN_LINK = "https://www.linkedin.com/company/42876982/";
const TWITTER_LINK = "https://twitter.com/qNlEssc4yeVMrF9";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <img className={styles.logo} src="/logo/white.svg" alt="logo" />
        </div>
        <div className={styles.links}>
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
