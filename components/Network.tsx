import React from 'react'

export const Network = () => {
  return (
    <div className='flex w-full gap-3 justify-center items-center h-full fixed bottom-7'>
        <div style={{
            backdropFilter: "blur(5px)",
            background: "rgba(255, 255, 255, 0.064)",
            borderWidth: "1px",
            borderColor: "rgba(255, 255, 255, 0.164)",
            borderRadius: "25px 25px 25px 25px",
            width: "60%",
            height: "80%"
        }}>
        </div>
    </div>
  )
}
