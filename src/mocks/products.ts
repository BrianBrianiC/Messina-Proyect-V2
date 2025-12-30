import type { Producto } from '../types/products'

export const MOCK_PRODUCTOS: Producto[] = [
    {
        id: 1,
        nombre: "Zapatillas Runner",
        precio: 8500,
        stock: 10,
        categoria: "calzado",
        descripcion: "Zapatillas ideales para correr.",
        imagen: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        nombre: "Remera Algodón",
        precio: 3200,
        stock: 5,
        categoria: "ropa",
        descripcion: "Remera 100% algodón.",
        imagen: "https://via.placeholder.com/150"
    }
];