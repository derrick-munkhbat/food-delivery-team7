import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useId } from "react";
import { useOrderId } from "../globals";
import { useRouter } from "next/navigation";

export function OrderModal({
  foodId,
  onClose,
}: {
  foodId: string;
  onClose: () => void;
}) {
  let [number, setNumber] = useState(1);
  let [subTotal, setSubtotal] = useState(0);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState(0);
  const [sales, setSales] = useState(0);
  const [image, setImage] = useState("");
  const { orderId, setOrderId }: any = useOrderId();

  useEffect(() => {
    handleClear();

    if (foodId) {
      axios
        .get(`http://localhost:8000/food/editor?foodId=${foodId}`)
        .then(({ data }) => {
          setName(data.name);
          setIngredients(data.ingredients);
          setPrice(data.price);
          setSales(data.sales);
        });
    }
  }, [foodId]);

  const handleClear = () => {
    setName("");
    setIngredients("");
    setPrice(0);
    setSales(0);
    setNumber(1);
    setImage("");
  };

  if (!foodId) {
    return null;
  }

  function Minus() {
    if (number > 0) {
      number = number - 1;
      setNumber(number);
    }
  }
  function Plus() {
    number = number + 1;
    setNumber(number);
  }

  const newOrder = async () => {
    const newOrder = {
      foodId,
      price,
      number,
    };

    await axios
      .post("http://localhost:8000/orderItems", { ...newOrder })
      .then((data) => {
        setOrderId(data);
        handleClear();
        onClose();
      });
  };

  console.log(orderId);

  return (
    <div className={`modal ${foodId ? "modal-open" : ""}`}>
      <div className="w-screen mx-auto flex top-0 h-full justify-center items-center fixed z-1 bg-gray-500 bg-opacity-70">
        <div className="flex items-center  z-1 absolute inset-0 w-11/12 lg:w-1/2  justify-center  mx-auto ">
          <div className="flex flex-col overflow-hidden lg:rounded-xl  max md:flex-row  md:flex-1  mx-auto">
            <div className="p-5  flex  bg-white md:flex-1 min-h-[500px] w-full rounded-xl lg:mx-auto gap-5">
              <div className="h-[500px] hidden md:flex md:w-1/2 ">
                <img
                  className="rounded-md w-[500px]  h-[460px] cover"
                  src="../images/pizza.svg"
                  alt="Shoes"
                />
              </div>
              <div className="flex flex-col w-full  md:w-1/2 ">
                <div className="flex justify-end ">
                  <button className="modal-close-button " onClick={onClose}>
                    X
                  </button>
                </div>
                <div className="mt-4 w-11/12 mx-auto">
                  <h1 className="font-semibold lg:text-3xl lg:font-bold">
                    {name}
                  </h1>
                  <p className="lg:font-semibold text-green-600">
                    {sales > 0 && (
                      <div className="flex">
                        <NumericFormat
                          value={price - (sales / 100) * price}
                          allowLeadingZeros
                          thousandSeparator=","
                          suffix="₮"
                          className="bg-transparent text-lg font-semibold w-20"
                          disabled
                        />
                        <NumericFormat
                          value={price}
                          allowLeadingZeros
                          thousandSeparator=","
                          suffix="₮"
                          className="bg-transparent text-sm text-black line-through w-20"
                          disabled
                        />
                      </div>
                    )}
                    {sales === 0 && (
                      <NumericFormat
                        value={price}
                        allowLeadingZeros
                        thousandSeparator=","
                        suffix="₮"
                        className="bg-transparent text-lg font-semibold w-20"
                        disabled
                      />
                    )}
                  </p>
                  <p className="mt-8 font-semibold">Орц</p>
                  <div className="w-11/12 p-2 bg-slate-200 rounded-lg mt-2">
                    <p className="text-gray-500">{ingredients}</p>
                  </div>
                  <p className="mt-8 font-semibold">Number</p>
                  <div className="mt-4 flex justify-between">
                    <button
                      onClick={Minus}
                      className="py-1 px-3 bg-green-500 rounded-md text-white"
                    >
                      -
                    </button>
                    <p className="font-normal">{number}</p>
                    <button
                      onClick={Plus}
                      className="py-1 px-3 bg-green-500 rounded-md text-white"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={newOrder}
                    className="container bg-green-500 mt-4 p-3 rounded-md text-white"
                  >
                    Сагслах
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-content"></div>
        </div>
      </div>
    </div>
  );
}
