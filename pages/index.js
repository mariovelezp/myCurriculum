import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import { getSectionData } from '../lib/sections'

export async function getStaticProps() {
  const sectionData = await getSectionData('home')
  return {
    props: {
      sectionData
    }
  }
}

export default function Home({ sectionData }) {
  return (
    <Layout home>
      <Head>
        <title>{sectionData.title}</title>
      </Head>
      <article>
        {/*<img src={sectionData.icon} className={utilStyles.imagecover} />*/}
        {/*<h1 className={utilStyles.headingXl}>{sectionData.title}</h1>*/}
        <div className={utilStyles.lightText}>
        <div dangerouslySetInnerHTML={{ __html: sectionData.contentHtml }} />
        </div>
      </article>
    </Layout>
  )
}



