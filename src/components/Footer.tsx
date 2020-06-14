import Link from 'next/link';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src="/logo/white.svg" alt="logo" />
        </div>
        <div className={styles.links}>
          <nav className={styles.nav}>
            <Link href="/">من نحن</Link>
            <Link href="/">عن محررينا</Link>
            <Link href="/">اتصل بنا</Link>
            <Link href="/">سندات</Link>
          </nav>
          <div className={styles.social_media_container}>
            <Link href="/">
              <a>
                <img
                  className={styles.social_media}
                  src="/icons/fb.svg"
                  alt="facebook"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img
                  className={styles.social_media}
                  src="/icons/li.svg"
                  alt="linkedin"
                />
              </a>
            </Link>
            <Link href="/">
              <a>
                <img
                  className={styles.social_media}
                  src="/icons/tw.svg"
                  alt="twitter"
                />
              </a>
            </Link>
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
