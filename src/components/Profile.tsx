import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileCta from './ProfileCta'
import { ProfileProps } from './../types/ProfileProps'

const Profile = (props: ProfileProps) => {
  return (
    <section className="bg-card rounded-xl shadow-md overflow-hidden lg:max-w-xs w-full">
      <ProfileHeader />
      <ProfileCta selected={props.selected} setSelected={props.setSelected} />
    </section>
  )
}

export default Profile
