import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { QuartzPluginData } from "../plugins/vfile"

function postTags(slug: string, allFiles: QuartzPluginData[], n = 3): string {
  const file = allFiles.find((f) => f.slug === slug)
  const tags: string[] = (file?.frontmatter?.tags as string[]) ?? []
  return tags.slice(0, n).join(" · ")
}

function tagCounts(allFiles: QuartzPluginData[]): { tag: string; count: number }[] {
  const counts: Record<string, number> = {}
  for (const file of allFiles) {
    const tags: string[] = (file?.frontmatter?.tags as string[]) ?? []
    for (const tag of tags) {
      counts[tag] = (counts[tag] ?? 0) + 1
    }
  }
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
}

const HomeTiles: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  return (
    <div class="home-container">
      {/* Hero */}
      <div class="home-hero">
        <p>Hi, I'm <strong>Silvia</strong>.</p>
        <p><em>Ever branching, on shifting grounds.</em></p>
        <p><a href="/AI-Tech" class="home-tag-link">AI &amp; Tech</a> — teaching myself, one confusion at a time</p>
        <p><a href="/Work-Career" class="home-tag-link">Work &amp; Career</a> — looking back and forward</p>
        <p><a href="/Living-Reading" class="home-tag-link">Living &amp; Reading</a> — the unquantifiable stuff</p>
        <p>this is my running log of all of the above.</p>
      </div>

      {/* Main two-column */}
      <div class="home-main">
        {/* Left: Featured articles */}
        <div class="home-featured">
          <div class="home-section-label">Featured</div>

          <a href="/posts/medici-answer-to-building-for-uncertainty" class="hf-card hf-large hf-teal">
            <div class="hf-content">
              <div class="hf-tag">{postTags("posts/medici-answer-to-building-for-uncertainty", allFiles)}</div>
              <div class="hf-title">Medici's Answer to Building for Uncertainty</div>
              <div class="hf-desc">Apr 6, 2026</div>
            </div>
          </a>

          <div class="hf-row">
            <a href="/posts/medici-whos-who" class="hf-card hf-sm hf-purple">
              <div class="hf-content">
                <div class="hf-tag">{postTags("posts/medici-whos-who", allFiles)}</div>
                <div class="hf-title">Who the Hell Is Who in Medici: Masters of Florence</div>
                <div class="hf-desc">Mar 31, 2026</div>
              </div>
            </a>
            <a href="/posts/testing3" class="hf-card hf-sm hf-dark">
              <div class="hf-content">
                <div class="hf-tag">{postTags("posts/testing3", allFiles)}</div>
                <div class="hf-title">Testing 3</div>
                <div class="hf-desc">Feb 10, 2026</div>
              </div>
            </a>
          </div>

          <a href="/posts/testing4" class="hf-card hf-wide hf-coral">
            <div class="hf-content hf-wide-content">
              <div>
                <div class="hf-tag">{postTags("posts/testing4", allFiles)}</div>
                <div class="hf-title">Testing 4</div>
              </div>
              <div class="hf-meta">Mar 10, 2026</div>
            </div>
          </a>

          <div class="home-section-label" style="margin-top:16px">Recent Updates</div>
          <div class="home-recent">
            <a href="/posts/medici-answer-to-building-for-uncertainty" class="hrecent-item">
              <div class="hrecent-title">Medici's Answer to Building for Uncertainty</div>
              <div class="hrecent-meta">Apr 6 · AI · career</div>
            </a>
            <a href="/posts/medici-whos-who" class="hrecent-item">
              <div class="hrecent-title">Who the Hell Is Who in Medici: Masters of Florence</div>
              <div class="hrecent-meta">Mar 31 · history</div>
            </a>
            <a href="/posts/testing3" class="hrecent-item">
              <div class="hrecent-title">Testing 3</div>
              <div class="hrecent-meta">Feb 10 · travel</div>
            </a>
          </div>

          <a href="/posts" class="home-see-all">See all articles<br /><span>→</span></a>
        </div>

        {/* Right: Graph + Browse by Tag */}
        <div class="home-sidebar">
          <div class="graph">
            <h3>Graph View</h3>
            <div class="graph-outer">
              <div class="graph-container" data-cfg='{"drag":true,"zoom":true,"depth":-1,"scale":1.1,"repelForce":0.8,"centerForce":0.3,"linkDistance":60,"fontSize":0.9,"opacityScale":1,"showTags":true,"removeTags":[],"focusOnHover":false,"enableRadial":false}'></div>
              <button class="global-graph-icon" aria-label="Global Graph">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 55" fill="currentColor" xmlSpace="preserve">
                  <path d="M49,0c-3.309,0-6,2.691-6,6c0,1.035,0.263,2.009,0.726,2.86l-9.829,9.829C32.542,17.634,30.846,17,29,17s-3.542,0.634-4.898,1.688l-7.669-7.669C16.785,10.424,17,9.74,17,9c0-2.206-1.794-4-4-4S9,6.794,9,9s1.794,4,4,4c0.74,0,1.424-0.215,2.019-0.567l7.669,7.669C21.634,21.458,21,23.154,21,25s0.634,3.542,1.688,4.897L10.024,42.562C8.958,41.595,7.549,41,6,41c-3.309,0-6,2.691-6,6s2.691,6,6,6s6-2.691,6-6c0-1.035-0.263-2.009-0.726-2.86l12.829-12.829c1.106,0.86,2.44,1.436,3.898,1.619v10.16c-2.833,0.478-5,2.942-5,5.91c0,3.309,2.691,6,6,6s6-2.691,6-6c0-2.967-2.167-5.431-5-5.91v-10.16c1.458-0.183,2.792-0.759,3.898-1.619l7.669,7.669C41.215,39.576,41,40.26,41,41c0,2.206,1.794,4,4,4s4-1.794,4-4s-1.794-4-4-4c-0.74,0-1.424,0.215-2.019,0.567l-7.669-7.669C36.366,28.542,37,26.846,37,25s-0.634-3.542-1.688-4.897l9.665-9.665C46.042,11.405,47.451,12,49,12c3.309,0,6-2.691,6-6S52.309,0,49,0z"/>
                </svg>
              </button>
            </div>
            <div class="global-graph-outer">
              <div class="global-graph-container" data-cfg='{"drag":true,"zoom":true,"depth":-1,"scale":0.9,"repelForce":0.5,"centerForce":0.2,"linkDistance":30,"fontSize":0.6,"opacityScale":1,"showTags":true,"removeTags":[],"focusOnHover":true,"enableRadial":true}'></div>
            </div>
          </div>

          <div class="home-section-label">Browse by Tag</div>
          <div class="home-tagcloud">
            {tagCounts(allFiles).map(({ tag, count }) => (
              <a href={`/tags/${tag}`} class="htag">
                {tag.replace(/-/g, " ")} <span>{count}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MOC */}
      <div id="moc" class="home-moc">
        <div class="home-section-label">Map of Content</div>
        <div class="home-moc-grid">
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-purple"></div>
            <div class="home-moc-title">AI &amp; Tech</div>
            <ul>
              <li><a href="/posts/medici-answer-to-building-for-uncertainty">Medici's Answer to Building for Uncertainty</a></li>
              <li class="moc-more"><a href="/AI-Tech">+ more</a></li>
            </ul>
          </div>
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-teal"></div>
            <div class="home-moc-title">Work &amp; Career</div>
            <ul>
              <li><a href="/posts/testing4">Testing 4</a></li>
              <li class="moc-more"><a href="/Work-Career">+ more</a></li>
            </ul>
          </div>
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-amber"></div>
            <div class="home-moc-title">Living &amp; Reading</div>
            <ul>
              <li><a href="/posts/medici-whos-who">Who the Hell Is Who in Medici: Masters of Florence</a></li>
              <li><a href="/posts/testing3">Testing 3</a></li>
              <li class="moc-more"><a href="/Living-Reading">+ more</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (() => HomeTiles) satisfies QuartzComponentConstructor
