export default function Work() {
  return (
    <>
    <div className="flex flex-col h-screen items-center justify-center bg-amber-200 gap-10">
      <img 
        src="/2.png" 
        style={{
          'viewTransitionName': 'expand',
        }} 
        alt="" />
      <h1 className="text-4xl pageHeader" 
      style={{
        'viewTransitionName': 'inMotion',
        // opacity: 0
      }}
      >About Page</h1>
      <p className="mx-10 pageContent text-center line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna
        auctor, viverra sapien. Donec euismod turpis eget massa lobortis, eget
        scelerisque justo.
      </p>
    </div>
    </>
  );
}