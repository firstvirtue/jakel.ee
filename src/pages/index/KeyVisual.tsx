export default function KeyVisual() {
  const dd = (() => {
    const date = new Date()

    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  })()
  
  return (
    
    <div className="" style={{'minHeight': '90vh'}}>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px', color: '#777' }}>
          이상오 (Jake Lee, firstvirtue)
          <br />
          He feels deeply, he feels tenderly
        </a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
          
          {/* 
            [TODO] get last published
            https://github.com/orgs/vercel/discussions/587 
          */}
          { `Last published ${dd}` }
        </div>
      </div>{' '}

    </div>
  )
}