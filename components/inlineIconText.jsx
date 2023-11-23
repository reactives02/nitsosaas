import React from 'react'
import { PiGraphBold,PiGitBranch,PiInfinity,PiCpu } from "react-icons/pi";
function InlineIconText( {classes,icon,title}) {
  return (
    
    <div className={classes}>
             {icon}
            <h1>{title}</h1>
    </div>
  )
}

export default InlineIconText