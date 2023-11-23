import React from 'react'
import ShowCaseOne from './showcase/showCaseOne'
import ShowCaseTwo from './showcase/showCaseTwo'
import PrimaryButton from './PrimaryButton'

function ShowCase() {
  return (
    <>
    <ShowCaseOne/>
    <ShowCaseTwo/>
    <div className="flex justify-center my-10" >
    <PrimaryButton title={"View Portfolio"} padding={"5"} />
    </div>
    </>
  )
}

export default ShowCase