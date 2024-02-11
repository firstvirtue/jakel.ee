import projectData from '../data/project-data.json'
import { useTranslation, Trans, i18n } from 'next-i18next'

function debounce(func: Function, timeout = 300) {
  let timer: any;
  return (...args: any) => {
    
    clearTimeout(timer)
    timer = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args)
      timer = undefined
    }, timeout)
  }
}

const getProjectInformation = (id: String) => {
  const project: any = projectData.find(x => x.id === id)

  return project
}

// const updateProjectInfo = (id: String) => {
//   const project: any = projectData.find(x => x.id === id)

//   if(i18n?.language === 'en') {
//     project.title = project?.titleEn
//     project.desc = project?.descEn
//     project.client = project?.clientEn
//     project.role = project?.roleEn
//     project.awards = project?.awardsEn
//   }

//   return project
// }

export { debounce, getProjectInformation }