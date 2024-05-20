import { Header } from "@/components/header/header";
import { ReactNode } from "react";
import { Libre_Baskerville } from 'next/font/google'

const libre_Baskerville = Libre_Baskerville({ weight: "400", subsets: ['latin'] })

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="max-h-screen h-screen overflow-auto">
            <Header />
            <main className={`${libre_Baskerville.className} w-full mt-8`}>
                <div className="max-w-screen-xl w-full mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}