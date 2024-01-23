/** @jsxImportSource @emotion/react */
'use client'
import PostMenu from "@/components/Post/PostMenu"
import { css } from "@emotion/react"

export default function LayoutWork(props) {

  const { children, project } = props

  const styles = css`

  .content {
    h3 {
      margin-top: 3em;
      font-size: 1.5rem;
      font-weight: 700;

      &.center {
        text-align: center;
      }
    }

    p {
      margin-top: 2em;
    }

    p a {
      display: block;
      margin-top: 10px;
      font-size: 15px;
      color: #686868;
    }

    pre {
      color: #686868;
      font-size: 14px;
    }

    *[data-size="lg"] {
      margin-left: -2rem;
      margin-right: -2rem;
    }

    figure {
      margin-top: 6rem;

      figcaption {
        margin-top: 3px;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 14px;
        color: #7f7f7f;
      }
    }

    em {
      color: #66a80f;
    }

    .standalone {
      margin-top: 6rem;
    }
  }
`

  return(
    <main 
      css={styles}
      className="min-h-screen pt-28">
      <div className="flex justify-center max-w-screen-2xl mr-auto ml-auto">
        <PostMenu project={project} />
        
        <div 
          className="content"
          css={{
          width: '70%'
        }}>
        { children }
        </div>
      </div>

    </main>
  )
}