import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'

import { getSortedSectionsData } from '../lib/sections'

export async function getStaticProps() {
  const allSectionsData = getSortedSectionsData()
  return {
    props: {
      allSectionsData
    }
  }
}

export default function Home({ allSectionsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}      
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/*<h2 className={utilStyles.headingLg}>CV</h2>*/}
        
        <ul className={utilStyles.list}>
          {allSectionsData.map(({ id, date, title, icon }) => (
            <li className={utilStyles.listItem} key={id}>                          
            <Link href={`/sections/${id}`}>
              <a>
              <img src={icon} className={utilStyles.imagecover} />{title}</a>              
            </Link>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

