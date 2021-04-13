import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Mario Vélez'
export const siteTitle = 'Mario Velez CV'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>      
      <header className={styles.header}>
        {home && (
          <>
            <Image
              priority
              src="/images/personalphoto.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <h2 className={utilStyles.lightText2}>Generalist Software Developer</h2>
          </>
        )}
        
        {/*(
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/personalphoto.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )*/}         
      </header>
      <nav>        
        <div className={utilStyles.sidebar}>
            <Link href='/'>
              <a><i className="fa fa-fw fa-home"></i> Inicio</a>
            </Link>          
            <Link href='/sections/contacto'>
              <a><i className="fa fa-fw fa-address-card"></i> Contacto</a>
            </Link>          
            <Link href='/sections/formacion'>
              <a><i className="fa fa-fw fa-graduation-cap"></i> Formación</a>
            </Link>          
            <Link href='/sections/experiencia'>
              <a><i className="fa fa-fw fa-building"></i> Experiencia</a>
            </Link>          
            <Link href='/sections/conocimiento'>
              <a><i className="fa fa-fw fa-book"></i> Conocimto</a>
            </Link>
          {/*
          <a href="#home"><i class="fa fa-fw fa-home"></i> Inicio</a>
          <a href="#services"><i class="fa fa-fw fa-address-card"></i> Contacto</a>
          <a href="#clients"><i class="fa fa-fw fa-graduation-cap"></i> Formación</a>
          <a href="#contact"><i class="fa fa-fw fa-building"></i> Experiencia</a>
          <a href="#contact"><i class="fa fa-fw fa-book"></i> Conocimto</a>*/}
          <div className={utilStyles.footersidebar}>
            <p className={utilStyles.lightTextFooter}>
              Desarrollado por: Mario Vélez<br/>
              Última modificación: May 2021<br/>
              Desarrollado con: Node.js, Next.js
            </p>
          </div>          
        </div>
      </nav>
      {!home && (
        <aside className={utilStyles.sidebarright}>
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/personalphoto.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name} />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>         
        </aside>              
      )}                   
      
      <main className={utilStyles.meta}>{children}</main>       
      
      {/*home && (
        <footer className={utilStyles.barFooter}>
          <div className={utilStyles.lightTextFooter}>
            <table cellPadding="0" cellSpacing="0">
              <tr><td>Desarrollado por: </td><td><i> Mario Velez</i></td></tr>
              <tr><td>Desarrollado con: </td><td><i> Node.js , Next.js</i></td></tr>
              <tr><td>Última modificación: </td><td><i> May 2021</i></td></tr>            
            </table>
          </div>
        </footer>
      )*/}
      
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}