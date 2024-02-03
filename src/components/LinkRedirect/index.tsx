import { useContext } from 'react'
import { useRouter } from 'next/router'
import { ScheduleContext } from '../../context/ScheduleContext'
 
function LinkRedirect({ children, href }: {children: string, href: string}) {
  const { setIsError } = useContext(ScheduleContext)
  const router = useRouter()
 
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsError(undefined)
    router.push(href)
  }
 
  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  )
  
}
 
export default LinkRedirect