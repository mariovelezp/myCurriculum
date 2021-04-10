import Head from 'next/head'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'
import { getAllSectionIds, getSectionData } from '../../lib/sections'

export async function getStaticProps({ params }) {
  //const sectionsData = getSectionData(params.id)
  const sectionData = await getSectionData(params.id)
  return {
    props: {
      sectionData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllSectionIds()
  return {
    paths,
    fallback: false
  }
}

  export default function Section({ sectionData }) {
    return (
      <Layout>
        <Head>
          <title>{sectionData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{sectionData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={sectionData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: sectionData.contentHtml }} />
        </article>
      </Layout>
    )
  }