import { OrderItemsModel } from "../models/orderItem.models";

export async function getOrderItems(req: Request, res: Response) {
    const { orderId } = req.params;

    try {
        const orderItems = await OrderItemsModel.find({orderId: orderId});
        res.json( orderItems )
    } catch (error) {
        console.log(error);
        res.json( message: error );
    }
}

export async function createOrderItem(req: Request, res: Response) {
    const { orderId, foodId, quantity, subTotal } = req.body;

    try {
        const orderItem = await OrderItemsModel.create({
            orderId,
            foodId,
            quantity,
            subTotal
        });
        res.json( "success" );
    } catch (error) {
        console.log(error);
        res.json( message: error );
    }

}