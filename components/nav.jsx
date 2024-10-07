import Image from "next/image";

export default function Nav(){
    
    return(
        <nav className="nav">
            <Image
                src="/img/recipetes-logo.svg"
                alt="logo"
                height={200}
                width={200}
            />
        </nav>
    )
}