import React from 'react'
import ProfileImage from './../assets/images/image-jeremy.png'

const ProfileHeader = () => {
  return (
    <div className="bg-profileBlue rounded-xl">
      <div className="flex lg:flex-col lg:items-start items-center justify-between w-full py-6 px-6 gap-4">
        <div className="w-14 h-14 lg:w-24 lg:h-24 border-3 rounded-full">
          <img src={ProfileImage} alt="profile image of user" className="object-cover" />
        </div>
        <div className="flex-1 lg:pb-10">
          <h6 className="text-sm text-caption mb-2 lg:text-xl">Report for</h6>
          <h1 className="text-main mt-2 lg:text-5xl">Jeremy Robson</h1>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
