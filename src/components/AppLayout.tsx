import styles from './AppLayout.module.scss';

const AppLayout = ({ children }) => (
  <>
    <img src="/images/home-background.png" className={styles.backgroundImage}/>
    <div className={styles.appLayout}>{children}</div>
  </>
);

export default AppLayout;
