import { Card, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({id,name,price,imgUrl}: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)

    return(
        <Card>
            <Card.Img
                variant= "top"
                src={imgUrl}
                height="200px"
                style={{objectFit: "cover"}}
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className ="d-flex justify-content-space-between align-items-baseline-mb-4">
                    <span>{name}</span>
                    <span className="ms-2">{price}</span>
                </Card.Title>
                <div className= "mt-auto">
                    {quantity===0 ? (
                        <Button onClick={()=> increaseCartQuantity(id)}> Add to cart</Button>
                    ) :(
                        <div
                        className="d-flex align-items-center flex-column"
                        >
                        <div className="d-flex align-items-center justify-content-center"
                        > 
                        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                        <div>
                            <span className="m-3">{quantity} in cart </span>
                        </div>
                        <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button onClick={()=>removeFromCart(id)} variant="danger" >Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}