export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm sticky top-0 z-10">
        <div className="px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                NextFacture
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                Visualiser, comprendre et tester la facturation électronique en
                France
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1  justify-center overflow-hidden">
        <div>WORK IN PROGRESS</div>
      </main>
    </div>
  );
}
