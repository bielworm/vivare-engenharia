import Link from 'next/link'
import React from 'react'

type DropdownHoverProps = {
  title: string
  links: {
    label: string
    route: string
  }[]
}

export function DropdownHover({
  title = 'insira um título',
  links = [
    {
      label: 'link 1',
      route: '/',
    },
    {
      label: 'link 2',
      route: '/',
    },
  ],
}: DropdownHoverProps) {
  return (
    <div className="cursor-pointer relative inline-block group ">
      <button className="px-2 cursor-pointer text-[#545454] hover:text-[#99161d] transition-colors text-base mb-4 lg:mb-0 translate-y-[6px]">
        {title}
      </button>
      <div className=" pt-3">
        <svg
          viewBox="0 0 137 63"
          fill="none"
          className="group-hover:block hidden absolute bottom-0 w-6 translate-x-1/2 right-1/2 shadow-2xl translate-y-[2px]"
        >
          <path d="M68.5 0L136.483 62.25H0.517006L68.5 0Z" fill="white" />
        </svg>
        <div className="group-hover:block hidden absolute bg-white  z-10 min-w-[160px] rounded-md shadow-2xl translate-x-1/2 right-1/2 ">
          {links.map((link: any, index: any) => (
            <Link href={link.route} passHref key={index}>
              <p className="block w-full text-zinc-500 hover:bg-[#99161d] hover:text-white py-2 px-4 transition-all duration-300">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
