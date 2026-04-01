import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const HomeTiles: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (fileData.slug !== "index") return null

  return (
    <div class="home-container">
      {/* Hero */}
      <div class="home-hero">
        <p>Hi, i'm <strong>Silvia</strong>.</p>
        <p>Ever Branching grows in three directions:</p>
        <p>AI &amp; Tech — I'm teaching myself →</p>
        <p>Work &amp; Career — looking back and forward →</p>
        <p>Life &amp; Parenting — raising a kid who teaches me more about cognition than anything →</p>
        <p>this is my running log of all of the above.</p>
      </div>

      {/* Main two-column */}
      <div class="home-main">
        {/* Left: Featured articles */}
        <div class="home-featured">
          <div class="home-section-label">Featured</div>

          <a href="/posts/medici-whos-who" class="hf-card hf-large hf-purple">
            <div class="hf-content">
              <div class="hf-tag">history · renaissance-history</div>
              <div class="hf-title">Who the Hell Is Who in Medici: Masters of Florence</div>
              <div class="hf-desc">Mar 31, 2026</div>
            </div>
          </a>

          <div class="hf-row">
            <a href="/posts/testing2" class="hf-card hf-sm hf-teal">
              <div class="hf-content">
                <div class="hf-tag">AI · learning</div>
                <div class="hf-title">Testing 2</div>
                <div class="hf-desc">Mar 20, 2026</div>
              </div>
            </a>
            <a href="/posts/testing3" class="hf-card hf-sm hf-dark">
              <div class="hf-content">
                <div class="hf-tag">travel · life</div>
                <div class="hf-title">Testing 3</div>
                <div class="hf-desc">Feb 10, 2026</div>
              </div>
            </a>
          </div>

          <a href="/posts/testing4" class="hf-card hf-wide hf-coral">
            <div class="hf-content hf-wide-content">
              <div>
                <div class="hf-tag">career · work</div>
                <div class="hf-title">Testing 4</div>
              </div>
              <div class="hf-meta">Mar 10, 2026</div>
            </div>
          </a>

          <a href="/posts" class="home-see-all">See all articles<br /><span>→</span></a>
        </div>

        {/* Right: Graph + Tags + Recent */}
        <div class="home-sidebar">
          <div class="graph">
            <h3>Graph View</h3>
            <div class="graph-outer">
              <div class="graph-container" data-cfg='{"drag":true,"zoom":true,"depth":1,"scale":1.1,"repelForce":0.5,"centerForce":0.3,"linkDistance":30,"fontSize":0.6,"opacityScale":1,"showTags":true,"removeTags":[],"focusOnHover":false,"enableRadial":false}'></div>
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
            <a href="/tags/history" class="htag">History <span>1</span></a>
            <a href="/tags/power" class="htag">Power <span>1</span></a>
            <a href="/tags/machiavelli" class="htag">Machiavelli <span>1</span></a>
            <a href="/tags/the-prince" class="htag">The Prince <span>1</span></a>
            <a href="/tags/renaissance-history" class="htag">Renaissance History <span>1</span></a>
            <a href="/tags/ai" class="htag">AI <span>1</span></a>
            <a href="/tags/learning" class="htag">Learning <span>1</span></a>
            <a href="/tags/travel" class="htag">Travel <span>1</span></a>
            <a href="/tags/life" class="htag">Life <span>1</span></a>
            <a href="/tags/career" class="htag">Career <span>1</span></a>
            <a href="/tags/work" class="htag">Work <span>1</span></a>
          </div>

          <div class="home-section-label" style="margin-top:10px">Recent Updates</div>
          <div class="home-recent">
            <a href="/posts/medici-whos-who" class="hrecent-item">
              <div class="hrecent-title">Who the Hell Is Who in Medici: Masters of Florence</div>
              <div class="hrecent-meta">Mar 31 · history</div>
            </a>
            <a href="/posts/testing2" class="hrecent-item">
              <div class="hrecent-title">Testing 2</div>
              <div class="hrecent-meta">Mar 20 · AI</div>
            </a>
            <a href="/posts/testing3" class="hrecent-item">
              <div class="hrecent-title">Testing 3</div>
              <div class="hrecent-meta">Feb 10 · travel</div>
            </a>
          </div>
        </div>
      </div>

      {/* MOC */}
      <div class="home-moc">
        <div class="home-section-label">Map of Content</div>
        <div class="home-moc-grid">
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-purple"></div>
            <div class="home-moc-title">AI &amp; Tech</div>
            <ul>
              <li><a href="/posts/testing2">Testing 2</a></li>
              <li class="moc-more">+ more</li>
            </ul>
          </div>
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-teal"></div>
            <div class="home-moc-title">Work &amp; Career</div>
            <ul>
              <li><a href="/posts/testing4">Testing 4</a></li>
              <li class="moc-more">+ more</li>
            </ul>
          </div>
          <div class="home-moc-card">
            <div class="home-moc-accent home-moc-accent-amber"></div>
            <div class="home-moc-title">Life &amp; Parenting</div>
            <ul>
              <li><a href="/posts/medici-whos-who">Who the Hell Is Who in Medici: Masters of Florence</a></li>
              <li><a href="/posts/testing3">Testing 3</a></li>
              <li class="moc-more">+ more</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (() => HomeTiles) satisfies QuartzComponentConstructor
