function Plan() {
  return (
    <div className="sticky top-[(calc(100vh-48px-16px))] flex h-12 flex-col justify-end border-t border-stone-300 px-2 text-xs">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">Finance Account</p>
          <p className="text-stone-500">Track as you go</p>
        </div>

        <button className="rounded bg-stone-200 px-2 py-1.5 font-medium transition-colors hover:bg-stone-300">
          Support
        </button>
      </div>
    </div>
  );
}

export default Plan;
