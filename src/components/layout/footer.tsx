export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} RTfolio. Portfolio personal.</p>
        <p>Hecho con Next.js y Tailwind CSS.</p>
      </div>
    </footer>
  );
}
