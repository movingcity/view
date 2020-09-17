import defaultSettings from '@/settings'

const title = defaultSettings.title || 'View 2.0'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
