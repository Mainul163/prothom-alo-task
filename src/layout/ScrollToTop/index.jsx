import React,{useEffect} from 'react'

const ScrollToTop = (props) => {
  useEffect(() => {
    const unListen=props.history.listen(()=>{
        window.scrollTo(0,0)
    })
    return () => {
      unListen()
    }
  })
  

  return <>{props.children}</>
}

export default ScrollToTop