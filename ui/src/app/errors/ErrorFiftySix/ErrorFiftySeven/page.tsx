export default function ErrorFiftySeven() {
  return (
    <div className="flex flex-col h-[800px] items-center justify-center">
      <div className=" inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-10">
        <div className="flex flex-col bg-white rounded-2xl justify-center items-center mx-auto w-[384px] h-[176px] gap-3">
          <img className="w-[80px] h-[80px]" src="../../images/ErrorIcon.png" />
          <h1 className="text text-center font-medium text-slate-500">
            Уучлаарай, систем ачааллахад алдаа гарлаа.
          </h1>
        </div>
      </div>
    </div>
  );
}
