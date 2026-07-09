export default function Home() {
  const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";
  const today = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
        {greeting}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">{today}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-500">
        Built during the Building with AI agents course.
      </p>
    </div>
  );
}
