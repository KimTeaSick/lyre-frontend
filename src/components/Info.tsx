import { useTypingInfo } from '../modules'

type Props ={
  title:string
}

const Info = ({title}:Props) => {
    const typingInfo = useTypingInfo()
  
  return (
    <div className='flex gap-2 font-mono w-full'>
        <div>{title}</div>
        <div>page</div>
        <div>{typingInfo.WPM}</div>
    </div>
  )
}

export default Info