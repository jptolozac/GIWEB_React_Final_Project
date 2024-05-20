import { Book } from "@/types/book"
import * as yup from "yup"

const requiredString = yup
    .string()
    .typeError("Debe ser un texto")
    .required("Es requerido");

const requiredNumber = yup
    .number()
    .required("Es requerido")
    .typeError("Debe ser un número");


export const createBook = yup.object<Book>().shape({
    title: requiredString,
    author: requiredString,
    categories: requiredString,
    synopsis: requiredString,
    price: requiredNumber
})  