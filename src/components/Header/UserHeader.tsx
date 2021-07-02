import React from 'react'

export interface UserHeaderProps {
  coverPhotoUrl?: string
}

const UserHeader: React.FC<UserHeaderProps> = ({ coverPhotoUrl }) => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: '300px',
          backgroundImage: 'url(' + coverPhotoUrl || 'https://picsum.photos/1920/1080' + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-7" />
      </div>
    </>
  )
}

export default UserHeader
