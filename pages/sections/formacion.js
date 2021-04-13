import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'
import { getSectionData } from '../../lib/sections'

export async function getStaticProps() {
  const sectionData = await getSectionData('education')
  return {
    props: {
      sectionData
    }
  }
}

export default function Formacion({ sectionData }) {
  return (
    <Layout>
      <Head>
        <title>{sectionData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{sectionData.title}</h1>
        <div className={utilStyles.lightText}>
        <div dangerouslySetInnerHTML={{ __html: sectionData.contentHtml }} />
        </div>
      </article>
    </Layout>
  )
}
