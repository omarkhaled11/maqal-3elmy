import React from 'react'
// import { GetStaticProps } from 'next'
import Layout from '../../components/Layout';

const About: React.FunctionComponent = () => {
    return (
        <Layout>
            <p>About</p>
        </Layout>
    )
}

// export const getStaticProps: GetStaticProps = async () => {
//     // Example for including static props in a Next.js function component page.
//     // Don't forget to include the respective types for any props passed into
//     // the component.
//     const items: User[] = sampleUserData
//     return { props: { items } }
//   }

export default About;
