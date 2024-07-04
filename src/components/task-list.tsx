export default function TaskList() {
  const headerLabels = ["ID", "TASK", "STATUS", "PRIORITY", ""]
  return (
    <div className='flex flex-col mt-4'>
      <div className='flex px-2 border-2 rounded-t-md'>
        {
          headerLabels.map((label) => 
            <div key={label} className='flex-1 font-bold'>{label}</div>
          )
        }
      </div>
      <div className="mt-2 border-2 rounded-b-md">

      </div>
    </div>
  )
}
