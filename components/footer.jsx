import Image from "next/image";

export default function Footer(){
    return(
        <footer>
            <h5>Discover easy and delicious recipes based on the ingredients you have at home. Simplify your cooking and explore new ideas with just a few clicks. Your next meal is only an ingredient away!</h5>
            <Image
                src="/img/recipetes-footer.svg"
                alt="footer logo"
                height={400}
                width={400}
            />
        </footer>
    )
}