import { ErrorFiftyFiveIcon } from "@/components/icons/ErrorFiftyFiveIcon";

export default function ErrorFiftyFive() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-col bg-white border-2 rounded-2xl justify-center items-center mx-auto w-[384px] h-[228px] gap-3">
        <ErrorFiftyFiveIcon />
        <h1 className="text-3xl text-center font-medium">
          Уучлаарай, систем ачааллахад алдаа гарлаа.
        </h1>
      </div>
    </div>
  );
}
