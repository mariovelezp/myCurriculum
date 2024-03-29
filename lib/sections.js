import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const datasectionsDir = path.join(process.cwd(), 'datasections')

export async function getSectionData(id) {
  const fullPath = path.join(datasectionsDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

/*
export function getSortedSectionsData() {
  // Get file names under /datasections
  const fileNames = fs.readdirSync(datasectionsDir)
  const allSectionsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(datasectionsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
   
  // Sort sections by date
  return allSectionsData.sort((a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllSectionIds() {
  const fileNames = fs.readdirSync(datasectionsDir)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}
*/
