import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { PageList, byDateAndAlphabetical } from "./PageList"
import { simplifySlug } from "../util/path"
import style from "./styles/listPage.scss"

// Safety net for MOC pages, not a replacement for curation. A page opts in by
// declaring `moc-tags` in its frontmatter; this lists posts that carry any of
// those tags (case-insensitive) but are NOT yet linked anywhere in the page
// body — i.e. tagged but not yet placed on the map. Once every tagged post is
// linked (or embedded) in the curated body, this renders nothing.
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
  const placed = new Set(fileData.links ?? [])
  const pages = allFiles.filter((f) => {
    if (!(f.slug ?? "").startsWith("posts/")) return false
    if (placed.has(simplifySlug(f.slug!))) return false
    const tags: string[] = (f.frontmatter?.tags as string[]) ?? []
    return tags.some((t) => wanted.has(t.toLowerCase()))
  })
  if (pages.length === 0) return null

  return (
    <div class="moc-list">
      <p class="moc-list-cmd">
        <span class="moc-list-prompt">$</span>ls posts/ --tag={mocTags.join(",")}{" "}
        <span class="moc-list-comment">
          # {pages.length} tagged but not yet placed on this map
        </span>
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
