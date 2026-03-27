import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const BranchIcon = () => (
  <svg class="page-title-branch" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* trunk */}
    <line x1="9" y1="22" x2="9" y2="13" stroke="#3d8b5c" stroke-width="1.5" stroke-linecap="round"/>
    {/* main left branch */}
    <line x1="9" y1="16" x2="3" y2="10" stroke="#3d8b5c" stroke-width="1.3" stroke-linecap="round"/>
    {/* main right branch */}
    <line x1="9" y1="13" x2="15" y2="7" stroke="#3d8b5c" stroke-width="1.3" stroke-linecap="round"/>
    {/* center top */}
    <line x1="9" y1="13" x2="9" y2="5" stroke="#3d8b5c" stroke-width="1.2" stroke-linecap="round"/>
    {/* sub-branches left */}
    <line x1="3" y1="10" x2="1" y2="6" stroke="#4faa72" stroke-width="1" stroke-linecap="round"/>
    <line x1="3" y1="10" x2="6" y2="6" stroke="#4faa72" stroke-width="1" stroke-linecap="round"/>
    {/* sub-branches right */}
    <line x1="15" y1="7" x2="13" y2="3" stroke="#4faa72" stroke-width="1" stroke-linecap="round"/>
    <line x1="15" y1="7" x2="17" y2="4" stroke="#4faa72" stroke-width="1" stroke-linecap="round"/>
    {/* sub-branches center */}
    <line x1="9" y1="9" x2="6" y2="4" stroke="#4faa72" stroke-width="1" stroke-linecap="round"/>
    <line x1="9" y1="9" x2="12" y2="4" stroke="#4faa72" stroke-width="1" stroke-linecap="round"/>
    {/* leaf dots at tips */}
    <circle cx="1" cy="5.5" r="1.2" fill="#5aba80"/>
    <circle cx="6" cy="5.5" r="1.2" fill="#5aba80"/>
    <circle cx="13" cy="2.5" r="1.2" fill="#5aba80"/>
    <circle cx="17" cy="3.5" r="1.2" fill="#5aba80"/>
    <circle cx="6" cy="3.5" r="1.2" fill="#5aba80"/>
    <circle cx="12" cy="3.5" r="1.2" fill="#5aba80"/>
    <circle cx="9" cy="4.5" r="1.2" fill="#6acc90"/>
  </svg>
)

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <BranchIcon />
        {title}
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.page-title a {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-title-branch {
  flex-shrink: 0;
  margin-bottom: 2px;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
