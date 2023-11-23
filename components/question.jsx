import React from 'react'

function Question( {question, icon, answer}) {
  return (
    <div className="border-gradient-purple border-gradient w-[90vw] mb-3 py-2 px-3">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{question}</h1>
           {icon}
        </div>
         {
            answer ? <p className="mt-4">
            {answer}
         </p> :""
         }
      </div>
  )
}

export default Question