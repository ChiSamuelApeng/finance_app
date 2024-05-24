import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href='/'>
            <div>
                <div className="items-center hidden lg:flex">
                    <Image src='/logo.svg' alt="Logo" width={38} height={38} />
                    <p className="font-semibold text-white text-2xl ml-2.5">Financer</p>
                </div>
            </div>
        </Link>
    )
}