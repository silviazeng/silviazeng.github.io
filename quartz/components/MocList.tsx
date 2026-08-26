import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { PageList, byDateAndAlphabetical } from "./PageList"
import style from "./styles/listPage.scss"

// Auto-generated post list for MOC pages. A page opts in by declaring
// `moc-tags` in its frontmatter; every post carrying any of those tags
// (case-insensitive) is listed below the page body, newest first.
const MocList: QuartzComponent = (props: QuartzComponentProps) => {
  const { fileData, allFiles, cfg } = props
  const raw = (fileData.frontmatter as Record<string, unknown> | undefined)?.["moc-tags"]
  const mocTags: string[] = Array.isArray(raw)
    ? raw.map(String)
    : typeof raw === "string"
      ? [raw]
      : []
  if (mocTags.length === 0) return null

  const wanted = new Set(mocTags.map((t) => t.toLowerCase()))
  const pages = allFiles.filter((f) => {
    if (!(f.slug ?? "").startsWith("posts/")) return false
    const tags: string[] = (f.frontmatter?.tags as string[]) ?? []
    return tags.some((t) => wanted.has(t.toLowerCase()))
  })
  if (pages.length === 0) return null

  return (
    <div class="moc-list">
      <p class="moc-list-cmd">
        <span class="moc-list-prompt">$</span>ls -lt posts/ --tag=
        {mocTags.join(",")} <span class="moc-list-comment"># {pages.length} found</span>
      </p>
      <PageList {...props} allFiles={pages} sort={byDateAndAlphabetical(cfg)} />
    </div>
  )
}

MocList.css = `
${style}

.moc-list {
  margin-top: 2rem;
}

.moc-list-cmd {
  font-family: var(--codeFont);
  font-size: 0.85rem;
  color: var(--gray);
  border-top: 1px solid var(--lightgray);
  padding-top: 1rem;
  margin-bottom: 0.25rem;
}

.moc-list-prompt {
  color: var(--secondary);
  margin-right: 0.4rem;
}

.moc-list-comment {
  opacity: 0.6;
}
`

export default (() => MocList) satisfies QuartzComponentConstructor
