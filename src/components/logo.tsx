
export default function Logo({ size }: {
  size: number;
}) {
  return (
    <div className="relative">
      <div className={`w-${size} h-${size} absolute top-4 border border-zinc-800 rounded-md dark:border-zinc-400`}></div>
      <div className={`w-${size} h-${size} absolute left-4 border border-zinc-800 rounded-md dark:border-zinc-400`}></div>
      <div className={`w-${size} h-${size} absolute -top-4 border border-zinc-800 rounded-md dark:border-zinc-400`}></div>
    </div>
  )
}
