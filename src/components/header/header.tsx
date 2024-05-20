import { Routes } from "@/utils/routes";
import Link from "next/link";
import { BookComponent } from "./bookComponent";
import { Libre_Baskerville } from "next/font/google";

const libre_Baskerville = Libre_Baskerville({ weight: "400", subsets: ['latin'] })

export function Header(){
    return(
        <header className={`w-100 h-[100px] flex items-center ${libre_Baskerville.className} sticky top-0 bg-[rgba(0,0,0,0.7)]`}>
            <Link href={Routes.home} className="mx-auto w-fit text-3xl flex items-center hover:drop-shadow-[0_15px_15px_rgb(255_255_255_/_0.8)] transition hover:translate-y-1 hover:scale-105">
                <BookComponent />
                <span className="pl-1">
                    GESTION DE LIBROS
                </span>
            </Link>
        </header>
    )
}