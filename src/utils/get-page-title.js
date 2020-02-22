import defaultSettings from '@/settings'

const title = defaultSettings.title || '合规周'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
