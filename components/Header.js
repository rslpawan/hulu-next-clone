/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';

const headerItems = [
    { title: 'HOME', Icon: HomeIcon },
    { title: 'TRENDINGS', Icon: LightningBoltIcon },
    { title: 'VERIFIED', Icon: BadgeCheckIcon },
    { title: 'COLLECTIONS', Icon: CollectionIcon },
    { title: 'SEARCH', Icon: SearchIcon },
    { title: 'ACCOUNT', Icon: UserIcon },
]

export default function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                {
                    headerItems.map((item, index) => {
                        return <HeaderItem key={index} title={item.title} Icon={item.Icon} />
                    })
                }
            </div>
            <Image 
            className="object-contain"
            src="https://links.papareact.com/ua6" 
            width={200} 
            height={100} 
            />
        </header>
    )
}
