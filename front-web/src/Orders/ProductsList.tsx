import { Product } from "./types";
import ProductsCard from "./ProductsCard";
import { checkIsSelected } from "./helpers";

type Props = {
    products: Product[];
    selectedProduct: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({ products, onSelectProduct, selectedProduct }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product =>(
                <ProductsCard 
                    key={product.id} 
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProduct, product)}
                />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;