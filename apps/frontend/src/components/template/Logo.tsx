import { Righteous} from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fonte = Righteous({ 
  subsets: ['latin'],
  weight: '400', 
});

export default function Logo() {
    return (
        <div>
            <Link href="/"
                className={`flex items-center gap-2 ${fonte.className}`}
            >
                <Image 
                    src="/logo.svg" width={50}height={50} alt="Logo" 
            />
                <h1 className="flex flex-col items-center text-lg leading-6">
                    <div>CONVIT<span className="text-blue-400">3</span>
                    </div>
                    <div>DIGITAL</div>
                </h1>
            </Link>
        </div>
    );
}