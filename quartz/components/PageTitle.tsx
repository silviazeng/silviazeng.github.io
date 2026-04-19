import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  const slug = fileData.slug ?? ""
  const isActive = (target: string) => {
    if (target === "index") return slug === "index"
    if (target === "tags") return slug === "tags" || slug.startsWith("tags/")
    return slug === target || slug.startsWith(`${target}/`)
  }
  const buildDate = new Date().toISOString().slice(0, 10).replace(/-/g, ".")

  return (
    <div class={classNames(displayClass, "tg-chrome")}>
      <div class="tg-top">
        <a class="tg-logo" href={baseDir}>
          ever<span class="tg-logo-amp">/</span>branching <span class="tg-logo-comment">~ a notebook</span>
        </a>
        <div class="tg-meta">sz@home:~ · last-built {buildDate}</div>
      </div>
      <nav class="tg-nav">
        <a class={isActive("index") ? "tg-link tg-active" : "tg-link"} href={`${baseDir}/`}>index</a>
        <a class={isActive("AI-Tech") ? "tg-link tg-active" : "tg-link"} href={`${baseDir}/AI-Tech`}>ai-tech</a>
        <a class={isActive("Work-Career") ? "tg-link tg-active" : "tg-link"} href={`${baseDir}/Work-Career`}>work-career</a>
        <a class={isActive("Living-Reading") ? "tg-link tg-active" : "tg-link"} href={`${baseDir}/Living-Reading`}>living-reading</a>
        <a class={isActive("tags") ? "tg-link tg-active" : "tg-link"} href={`${baseDir}/tags`}>tags</a>
        <div class="tg-nav-sp" />
        <a class="tg-link tg-link-dim" href="https://github.com/silviazeng/silviazeng.github.io">/source</a>
        <a class="tg-link tg-link-dim" href={`${baseDir}/index.xml`}>rss</a>
      </nav>
    </div>
  )
}

PageTitle.css = `
.tg-chrome {
  font-family: 'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace;
  margin: 0 0 32px;
  color: var(--darkgray);
}

.tg-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 0 20px;
  border-bottom: 1px dashed var(--gray);
  gap: 16px;
  flex-wrap: wrap;
}

.tg-logo {
  font-family: 'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 15px;
  font-weight: 500;
  color: var(--dark) !important;
  text-decoration: none !important;
  letter-spacing: 0;
}

.tg-logo-amp {
  color: var(--secondary);
}

.tg-logo-comment {
  color: var(--darkgray);
  font-style: italic;
  opacity: 0.78;
  font-weight: 400;
}

.tg-meta {
  font-size: 12px;
  color: var(--darkgray);
  opacity: 0.78;
}

.tg-nav {
  display: flex;
  gap: 24px;
  padding: 18px 0 20px;
  font-size: 12.5px;
  color: var(--darkgray);
  border-bottom: 1px dashed var(--gray);
  flex-wrap: wrap;
  align-items: center;
}

.tg-link {
  color: var(--darkgray) !important;
  text-decoration: none !important;
  font-family: 'JetBrains Mono', 'IBM Plex Mono', ui-monospace, monospace;
  transition: color 0.15s ease;
}

.tg-link:hover {
  color: var(--dark) !important;
}

.tg-link.tg-active {
  color: var(--dark) !important;
}

.tg-link.tg-active::before {
  content: '▸ ';
  color: var(--secondary);
}

.tg-link-dim {
  opacity: 0.7;
}

.tg-nav-sp {
  flex: 1;
}

@media (max-width: 640px) {
  .tg-chrome { margin: 0 0 22px; }
  .tg-top { padding: 6px 0 14px; }
  .tg-meta { font-size: 11px; }
  .tg-nav { gap: 14px 18px; padding: 12px 0 14px; font-size: 12px; }
  .tg-nav-sp { display: none; }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
