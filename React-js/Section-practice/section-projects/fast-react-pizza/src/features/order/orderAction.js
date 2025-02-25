import { redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const newOrder = await createOrder(order);

  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}
