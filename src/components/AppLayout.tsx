import styles from './AppLayout.module.scss';

const AppLayout = ({ children }) => (
  <div className={styles.appLayout}>{children}</div>
);

export default AppLayout;
