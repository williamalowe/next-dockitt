export default function KanbanColumn({ header, textColor }: {
  header: string
  textColor: string,
}) {
  return (
    <div className="flex-1">
      <h5 className={`${textColor} uppercase italic text-xl`}>{header}</h5>
    </div>
  )
}
