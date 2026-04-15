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
            <div class="hf-illus">
              <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none">
                <line x1="60" y1="95" x2="60" y2="58" stroke="#3d7a4a" stroke-width="1.8" stroke-linecap="round"/>
                <line x1="60" y1="62" x2="32" y2="38" stroke="#3d7a4a" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="60" y1="62" x2="88" y2="38" stroke="#3d7a4a" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="32" y1="38" x2="16" y2="18" stroke="#2a4a30" stroke-width="1.2" stroke-linecap="round"/>
                <line x1="32" y1="38" x2="46" y2="16" stroke="#2a4a30" stroke-width="1.2" stroke-linecap="round"/>
                <line x1="88" y1="38" x2="74" y2="16" stroke="#2a4a30" stroke-width="1.2" stroke-linecap="round"/>
                <line x1="88" y1="38" x2="104" y2="18" stroke="#2a4a30" stroke-width="1.2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="hf-content">
              <div class="hf-tag">{postTags("posts/medici-answer-to-building-for-uncertainty", allFiles)}</div>
              <div class="hf-title">Medici's Answer to Building for Uncertainty</div>
              <div class="hf-desc">Apr 6, 2026</div>
            </div>
          </a>

          <div class="hf-row">
            <a href="/posts/medici-whos-who" class="hf-card hf-sm hf-purple">
              <div class="hf-illus">
                <svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none">
                  <circle cx="22" cy="28" r="11" stroke="#3d7a4a" stroke-width="1.2"/>
                  <line x1="14" y1="28" x2="30" y2="28" stroke="#2a4a30" stroke-width="0.9"/>
                  <line x1="22" y1="20" x2="22" y2="36" stroke="#2a4a30" stroke-width="0.9"/>
                  <circle cx="62" cy="18" r="13" stroke="#3d7a4a" stroke-width="1.2"/>
                  <line x1="53" y1="18" x2="71" y2="18" stroke="#2a4a30" stroke-width="0.9"/>
                  <line x1="62" y1="9" x2="62" y2="27" stroke="#2a4a30" stroke-width="0.9"/>
                  <circle cx="86" cy="46" r="10" stroke="#3d7a4a" stroke-width="1.2"/>
                  <line x1="79" y1="46" x2="93" y2="46" stroke="#2a4a30" stroke-width="0.9"/>
                  <line x1="86" y1="39" x2="86" y2="53" stroke="#2a4a30" stroke-width="0.9"/>
                  <circle cx="42" cy="60" r="9" stroke="#3d7a4a" stroke-width="1"/>
                  <line x1="36" y1="60" x2="48" y2="60" stroke="#2a4a30" stroke-width="0.8"/>
                  <line x1="42" y1="54" x2="42" y2="66" stroke="#2a4a30" stroke-width="0.8"/>
                </svg>
              </div>
              <div class="hf-content">
                <div class="hf-tag">{postTags("posts/medici-whos-who", allFiles)}</div>
                <div class="hf-title">Who the Hell Is Who in Medici: Masters of Florence</div>
                <div class="hf-desc">Mar 31, 2026</div>
              </div>
            </a>
            <a href="/posts/what-i-learned-about-career-in-ml" class="hf-card hf-sm hf-dark">
              <div class="hf-illus">
                <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none">
                  <circle cx="45" cy="45" r="32" stroke="#3d7a4a" stroke-width="1.5"/>
                  <line x1="45" y1="16" x2="45" y2="23" stroke="#3d7a4a" stroke-width="1.2"/>
                  <line x1="45" y1="67" x2="45" y2="74" stroke="#3d7a4a" stroke-width="1.2"/>
                  <line x1="16" y1="45" x2="23" y2="45" stroke="#3d7a4a" stroke-width="1.2"/>
                  <line x1="67" y1="45" x2="74" y2="45" stroke="#3d7a4a" stroke-width="1.2"/>
                  <line x1="45" y1="45" x2="45" y2="26" stroke="#3d7a4a" stroke-width="1.5" stroke-linecap="round"/>
                  <line x1="45" y1="45" x2="61" y2="45" stroke="#3d7a4a" stroke-width="1.2" stroke-linecap="round"/>
                  <circle cx="45" cy="45" r="2" fill="#3d7a4a"/>
                  <line x1="27" y1="22" x2="31" y2="28" stroke="#2a4a30" stroke-width="0.9"/>
                  <line x1="63" y1="22" x2="59" y2="28" stroke="#2a4a30" stroke-width="0.9"/>
                  <line x1="27" y1="68" x2="31" y2="62" stroke="#2a4a30" stroke-width="0.9"/>
                  <line x1="63" y1="68" x2="59" y2="62" stroke="#2a4a30" stroke-width="0.9"/>
                </svg>
              </div>
              <div class="hf-content">
                <div class="hf-tag">{postTags("posts/what-i-learned-about-career-in-ml", allFiles)}</div>
                <div class="hf-title">What I Learned about Career in my 3 months ML Deep-dive</div>
                <div class="hf-desc">Nov 19, 2021</div>
              </div>
            </a>
          </div>

          <a href="/posts/testing4" class="hf-card hf-wide hf-coral">
            <div class="hf-illus">
              <svg viewBox="0 0 100 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none">
                <rect x="18" y="8" width="64" height="56" stroke="#3d7a4a" stroke-width="1.5"/>
                <line x1="30" y1="8" x2="30" y2="64" stroke="#2a4a30" stroke-width="1"/>
                <line x1="36" y1="22" x2="74" y2="22" stroke="#2a4a30" stroke-width="0.8"/>
                <line x1="36" y1="32" x2="74" y2="32" stroke="#2a4a30" stroke-width="0.8"/>
                <line x1="36" y1="42" x2="74" y2="42" stroke="#2a4a30" stroke-width="0.8"/>
                <line x1="36" y1="52" x2="74" y2="52" stroke="#2a4a30" stroke-width="0.8"/>
              </svg>
            </div>
            <div class="hf-content hf-wide-content">
              <div>
                <div class="hf-tag">{postTags("posts/testing4", allFiles)}</div>
                <div class="hf-title">Testing 4</div>
              </div>
              <div class="hf-meta">Mar 10, 2026</div>
            </div>
          </a>

          <a href="/posts" class="home-see-all">See all articles<br /><span>→</span></a>
        </div>

        {/* Right: Graph + Browse by Tag + Recent Updates */}
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
            <a href="/posts/what-i-learned-about-career-in-ml" class="hrecent-item">
              <div class="hrecent-title">What I Learned about Career in my 3 months ML Deep-dive</div>
              <div class="hrecent-meta">Nov 19, 2021 · career · AI</div>
            </a>
          </div>
        </div>
      </div>

      {/* MOC */}
      <div id="moc" class="home-moc">
        <div class="home-section-label">Map of Content</div>
        <div class="home-moc-grid">
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-purple"></div>
            <div class="home-moc-title"><a href="/AI-Tech">AI &amp; Tech</a></div>
            <p class="home-moc-desc">I'm more interested in why it works than whether it works.</p>
            <div class="home-moc-tags">
            </div>
          </div>
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-teal"></div>
            <div class="home-moc-title"><a href="/Work-Career">Work &amp; Career</a></div>
            <p class="home-moc-desc">From finance to tech and beyond, looking back for patterns, forward for direction.</p>
            <div class="home-moc-tags">
              <a href="/tags/work" class="htag">work</a>
              <a href="/tags/power" class="htag">power</a>
              <a href="/tags/uncertainty" class="htag">uncertainty</a>
            </div>
          </div>
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-amber"></div>
            <div class="home-moc-title"><a href="/Living-Reading">Living &amp; Reading</a></div>
            <p class="home-moc-desc">The unquantifiable stuff.</p>
            <div class="home-moc-tags">
              <a href="/tags/travel" class="htag">travel</a>
              <a href="/tags/history" class="htag">history</a>
              <a href="/tags/machiavelli" class="htag">machiavelli</a>
              <a href="/tags/renaissance-history" class="htag">renaissance history</a>
              <a href="/tags/the-prince" class="htag">the prince</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (() => HomeTiles) satisfies QuartzComponentConstructor
