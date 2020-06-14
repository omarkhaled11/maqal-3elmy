import Header from './Header';
import Footer from './Footer';

import styles from './Layout.module.scss';

const Layout = (props) => (
  <>
    <Header />
    <div className={styles.layout}>{props.children}</div>
    <Footer />
  </>
);

export default Layout;
