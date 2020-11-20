import Layout from '../../components/Layout';
import Divider from '../../components/Divider';

import styles from './about.module.scss';
import initContentfulService from '../../service/contentful';
import Link from 'next/link';

const About = () => {
  return (
    <Layout>
      <div className={styles.english_link}>
        <p>For English please click <Link href='/about-en'><a>here</a></Link></p>
      </div>
      <Divider text='من نحن؟' />
      <div className={styles.text_container}>
        <p className={styles.text}>
          نحن أكثر من ١٢٠ من الباحثين العرب، الذين يعملون في كبرى جامعات ومعاهد
          العالم في الوطن العربي و غيره.
        </p>
      </div>
      <Divider text='ماهي أهدافنا؟' />
      <div className={styles.text_container}>
        <p className={styles.text}>
          تهدف مبادرتنا بشكل أساسي إلى إثراء المحتوى العلمي العربي على شبكة
          الإنترنت، حيث أنه و كما نعلم جميعًا، أن المحتوى العربي على الإنترنت
          يطغى عليه الكثير من المعلومات المغلوطة أو العلم الزائف
          (pseudoscience)، لذا وضعنا نصب أعيننا هدف إضافة مقالات علمية في شتى
          المجالات، لإثراء وزيادة المحتوى العلمي المكتوب باللغة العربية. نقوم
          بذلك عن طريق تبسيط المنشورات العلمية المطروحة في المجلات العلمية
        </p>
      </div>
      <Divider text='ما هي مصادرنا؟ وكيف تتم مراجعة مقالاتنا؟' />
      <div className={styles.text_container}>
        <p className={styles.text}>
          ترتكز مقالاتُنا المُبسطة على فئةٍ من المنشورات العلمية، والتي تُعرف بـ
          (peer-reviewed publications)، وهي الفئة الأكثر موثوقيةً؛ حيث تتم
          مراجعتها بدقةٍ من قِبَل (٢) إلى (٥) من الباحثين الخبراء، وذلك لمرةٍ
          واحدةٍ على الأقل قبل النشر؛ للتأكد من مصداقية وموثوقية جميع المعلومات
          العلمية المذكورة فيها. ومن الجدير بالذكر، أننا لا نستند إلى الأخبار أو
          المقالات الواردة بالصحف، أو المجالات، أو المواقع الإخبارية، أو
          المرجعية؛ وإنما نعتمد على الدوريات العلمية المرموقة، والتي تم من
          خلالها نشر آلاف الأبحاث المتميزة عبر العقود الأخيرة.
          <br />
          <br />
          وللحفاظِ على الدقة المتناهية التي تتحلى بها تلك المنشورات؛ فإننا ننتقل
          بالمقالات عبر عدة مراحلٍ بدءًا من التبسيط وانتهاءً بالمراجعة اللغوية،
          وذلك بالاعتماد على جهودِ (٤) إلى (١٠) من الباحثين، والمدققين اللغويين،
          بكل مجالٍ، وذلك على مدار الشهر، لتخرُج لكم في نهاية الأمر بصورتها
          المتقنة. وبداية من الغد، سوف يتم التعريف بجميع الباحثين والمدققين
          اللغويين بهذه المبادرة، والذين لديهم من الخبرة والتميز العلمي ما
          يجعلهم على كفاءةٍ عاليةٍ، وقدرةٍ فائقةٍ، على تولي زمام المبادرة،
          والنهوض بها بين أرجاء وطننا العربي.
          <br />

        </p>
        <br />
        <div className={styles.button_group}>
        <button>
          <Link href='/editors'>
            <a>
              محررينا
            </a>
          </Link>
          </button>
          {/* <button>
          <Link href='#'>
            <a>
              عن المطورين
            </a>
          </Link>
          </button> */}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ctx => {
  initContentfulService();
  return { props: {} };
};

export default About;
