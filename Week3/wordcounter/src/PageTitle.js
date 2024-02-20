import React, { useEffect, useState } from 'react'

const PageTitle = () => {
    const[pageTitle,setPageTitle]=useState('Default title of page');
    const changeTitle=()=>{
        const newtitle=prompt('Enter new page title');
        if(newtitle){
            setPageTitle(newtitle)
        }
    }
    useEffect=(()=>{
        document.title=pageTitle
    },[pageTitle])

  return (
    <div>
      <h3>Updating page title</h3>
      <p>New PageTitle:{pageTitle}</p>
      <button onClick={changeTitle}>Change Title</button>
    </div>
  )
}

export default PageTitle
