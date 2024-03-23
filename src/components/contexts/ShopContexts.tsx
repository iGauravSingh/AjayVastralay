import { createContext, useState,useContext } from "react";

interface Item {
    id: number;
    productName: string;
    productCategory?: string;
    quantity: number;
    price: number;
}

interface ShopContextType {
    shop: Item[];
    setShop: React.Dispatch<React.SetStateAction<Item[]>>;
}

export const ShopContext = createContext<ShopContextType>({
    shop: [],
    setShop: () => {}
});
export function ShopContextProvider({ children }: { children: React.ReactNode }) {
    const [shop,setShop] = useState<Item[]>([])

    return (
        <ShopContext.Provider value={{shop,setShop}}>
            {children}
        </ShopContext.Provider>
    )
}

export const useShopContext = () => useContext(ShopContext)