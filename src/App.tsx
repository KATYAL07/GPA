function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
          GPA
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Build something useful today.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-slate-400">
          A clean starting point for the GPA application, ready for the next
          feature.
        </p>
        <button
          className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950"
          type="button"
        >
          Get started
        </button>
      </section>
    </main>
  );
}

export default App;
