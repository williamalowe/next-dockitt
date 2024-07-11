import { BsArrowCounterclockwise, BsCaretLeft, BsCaretRight, BsCheck, BsTrash, BsX } from 'react-icons/bs'

export default function TaskUpdateButtons({ status }: {
  status : string,
}) {
  return (
    <div className="flex-1 flex justify-end">
      {
        status == "backlog" ?
        <>
          <button className='text-red-800'>
            <BsX />
          </button>
          <button className='text-green-800'>
            <BsCaretRight />
          </button>
        </> :
        status === "completed" ?
        <>
          <button className='text-purple-800'>
            <BsCaretLeft />
          </button>
          <button className='text-green-800'>
            <BsCheck />
          </button>
        </> :
        status === "cancelled" ?
        <>
          <button className='text-red-800'>
            <BsTrash />
          </button>
          <button className='text-green-800'>
            <BsArrowCounterclockwise />
          </button>
        </> :
        <>
          <button className='text-red-800'>
            <BsX />
          </button>
          <button className='text-purple-800'>
            <BsCaretLeft />
          </button>
          <button className='text-green-800'>
            <BsCaretRight />
          </button>
        </>

      }
    </div>
  )
}
