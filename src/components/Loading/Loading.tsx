import React from 'react'

interface LoadingProps {
  textColor?: 'white'
}

const Loading: React.FC<LoadingProps> = ({ textColor }) => (
  <div className={textColor && 'text-white'}>Loading...</div>
)

export default Loading
