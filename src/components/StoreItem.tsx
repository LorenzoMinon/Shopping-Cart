import { Card, Button } from "react-bootstrap"

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({id,name,price,imgUrl}: StoreItemProps) {
    const quantity = 1
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
                        <Button> Add to cart</Button>
                    ) :(
                        <div
                        className="d-flex align-items-center flex-column"
                        >
                        <div className="d-flex align-items-center justify-content-center"
                        > 
                        <Button>-</Button>
                        <div>
                            <span className="m-3">{quantity} in cart </span>
                        </div>
                        <Button>+</Button>
                        </div>
                        <Button variant="danger" >Remove</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}