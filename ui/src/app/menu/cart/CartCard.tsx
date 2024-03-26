export default function CartCard() {
  return (
    <div className="card w-5/6 bg-base-100 shadow-md">
      <div className="flex justify-center items-center w-full p-5 gap-3">
        <div className="w-1/2">picture</div>
        <div>
          <div>
            <h2 className="card-title justify-center items-center">Title</h2>
            <p>Price</p>
            <p>description</p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <button className="btn btn-square text-5xl flex">-</button>
            <p>x</p>
            <button className="btn btn-square text-5xl">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
