import Header from './Header';
import Footer from './Footer';

import styles from './Layout.module.scss';

const Layout = ({ children, disciplines }) => (
  <>
    <Header disciplines={disciplines} />
    <div className={styles.layout}>{children}</div>
    <Footer />
  </>
);

export default Layout;
