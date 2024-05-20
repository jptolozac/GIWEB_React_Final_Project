import { Book } from "@/types/book";
import { TextInput } from "../input/textInput";
import { TextArea } from "../input/textArea";
import { Button } from "../input/button";
import { CoinFormatter } from "@/helpers/coinFormatter";
import { FormEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createBook } from "@/helpers/createBook";
import { NumberInput } from "../input/numberInput";
import { deleteBook } from "@/services/books";
import { Routes } from "@/utils/routes";

interface FormEditableProps {
    editable?: boolean;
    book?: Book | null;
    categories?: string[] | null;
    addCategory: () => void;
    handleButtonFinishEdit: (event: any) => void;
    handleButtonEdit?: (event: FormEvent) => void;
}

export function FormEditable({ editable = false, book=null, categories=null, handleButtonEdit=undefined, handleButtonFinishEdit, addCategory }: FormEditableProps) {
    // const methods = useForm<Book>({ resolver: yupResolver(createBook) })
    const handleButtonDelete = async(event: FormEvent) => {
        event.preventDefault()
        await deleteBook(book?.id || '0')
        window.location.replace(`${location.origin}/${Routes.home}`)
    }

    return (
        // <FormProvider {...methods}>
            <form onSubmit={editable ? handleButtonFinishEdit : handleButtonDelete} className="w-[680px] h-[600px] border-l border-white flex">
                <div className="mx-16 -mt-8">
                    {editable
                        ? <div className="drop-shadow-[1px_1px_2px_gray] flex items-center">
                            <span className="mr-2">title: </span>
                            <TextInput className="text-2xl" name="title" value={book?.title} />
                        </div>
                        : <div className="text-3xl drop-shadow-[1px_1px_2px_gray]">{book?.title}</div>
                    }
                    {editable
                        ? <div className="flex items-center text-dark-red mt-2 italic">
                            <span className="mr-2">synopsis: </span>
                            <TextInput className="text-xl " name="author" value={book?.author} />
                        </div>
                        : <div className="text-2xl text-dark-red mt-2 italic">{book?.author}</div>
                    }
                    {editable && <div className="mt-4">Categorias:</div>}
                    <ul className="flex flex-wrap mt-3 gap-2">
                        {
                            categories?.map((cat: any, index: number) => (
                                editable
                                    ? <li key={index}><TextInput className="p-2" name="categories[]" value={cat} /></li>
                                    : <li key={index} className="bg-indigo-700 text-white px-2 py-1 rounded-md text-sm flex items-center">
                                        {cat}
                                    </li>
                            ))
                        }
                    </ul>
                    {editable && <button className="bg-slate-600 px-4 py-2 rounded-lg mt-4" type="button" onClick={addCategory}>Añadir otra categoria</button>}
                    <p className="mt-8 text-lg font-semibold drop-shadow-[1px_1px_0.5px_gray]">
                        Sinopsis de {book?.title}
                    </p>
                    {editable
                        ? <TextArea name="synopsis" className="my-1 px-2 py-1 bg-slate-600 text-lg text-wrap w-full h-32" value={book?.synopsis} />
                        : <p className="max-h-[160px] overflow-auto">{book?.synopsis}</p>
                    }
                    {editable
                        ? <div className="flex items-center my-8">
                            <span className="mr-2">Price: </span>
                            <NumberInput name="price" className="text-3xl" value={String(book?.price || '')} />
                        </div>
                        : <p className="my-12 text-3xl">{CoinFormatter(book?.price || 0)}</p>
                    }
                    {editable
                        ? <div>
                            {handleButtonEdit && <Button onClick={handleButtonEdit}>Atras</Button>}
                            <Button type="submit">Terminar</Button>
                        </div>
                        : <div>
                            {handleButtonEdit && <Button type="button" onClick={handleButtonEdit}>
                                Editar
                            </Button>}
                            <Button>
                                Eliminar
                            </Button>
                        </div>
                    }

                </div>
            </form>
        // </FormProvider>
    )
}