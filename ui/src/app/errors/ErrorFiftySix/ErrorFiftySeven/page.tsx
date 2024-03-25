export default function ErrorFiftySeven() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col bg-white border-2 rounded-2xl justify-center items-center mx-auto w-[384px] h-[228px] gap-3">
        <img className="w-[80px] h-[80px]" src="../../images/ErrorIcon.png" />
        <h1 className="text text-center font-medium text-slate-500">
          Уучлаарай, систем ачааллахад алдаа гарлаа.
        </h1>
      </div>
    </div>
  );
}
