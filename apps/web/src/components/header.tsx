import { Slash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import rocketseatIcon from '@/assets/rocketseat-icon.svg'
import { ability } from '@/auth/auth'

import OrganizationSwitcher from './organization-switcher'
import PendingInvites from './pending-invites'
import { ProfileButton } from './profile-button'
import ProjectSwitcher from './project-switcher'
import ThemeSwitcher from './theme/theme-switcher'
import { Separator } from './ui/separator'

export default async function Header() {
  const permissions = await ability()
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            src={rocketseatIcon}
            className="size-6 dark:invert"
            alt="Rocketseat"
          />
        </Link>
        <Slash className="size-3 -rotate-[24deg] text-border" />
        <OrganizationSwitcher />

        {permissions?.can('get', 'Project') && (
          <>
            <Slash className="size-3 -rotate-[24deg] text-border" />
            <ProjectSwitcher />
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        <Separator orientation="vertical" className="h-5" />
        <PendingInvites />
        <ThemeSwitcher />
        <ProfileButton />
      </div>
    </div>
  )
}
