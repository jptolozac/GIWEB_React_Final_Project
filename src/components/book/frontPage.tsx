import { Book } from "@/types/book"

interface FrontPageProps {
    book: Book,
    width?: string,
    height?: string
}

export function FrontPage({ book, width="600px", height="600px" }: FrontPageProps) {
    return (
        <div className={`w-[${width}] h-[${height}] flex justify-center items-center `}>
            <img
                src={book?.img}
                alt={`Portada del libro ${book?.title}`}
                width={370}
                height={450}
                className="rounded-2xl h-[450px] object-contain drop-shadow-[4px_6px_10px_gray]"
            />
        </div>
    )
}