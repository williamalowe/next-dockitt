export default function KanbanColumn({ header, headerColor }: {
  header: string,
  headerColor: string
}) {
  return (
    <div className="flex-1 px-2">
      <div className="flex">
        <h3 className={`${headerColor} text-xl uppercase`}>{header}</h3>
        <h3 className="ml-auto">1</h3>
      </div>
      <div className="flex flex-col py-2">
        {/* map task cards */}
      </div>
    </div>
  )
}
