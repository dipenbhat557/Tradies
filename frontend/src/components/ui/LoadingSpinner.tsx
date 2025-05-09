import React from 'react'

const LoadingSpinner = ({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) => {
  const sizeClasses = {
    small: 'w-5 h-5',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  return (
    <div className="flex justify-center items-center p-4 w-full h-full">
      <div className={`animate-spin rounded-full border-t-2 border-primary ${sizeClasses[size]} border-r-transparent`} />
    </div>
  )
}

export default LoadingSpinner 