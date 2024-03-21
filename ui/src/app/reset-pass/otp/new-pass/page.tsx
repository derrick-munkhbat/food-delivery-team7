import { CheckIcon } from "../../../../../public/Icons/CheckIcon"


export default function PassResetByNewPass (){

    return (
        <>
        <div className="flex gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-2/6 p-5">
            <CheckIcon/>
            <h1 className="text-green-600">Нууц үг амжилттай солигдлоо</h1>
        </div>

        <div className="flex flex-col gap-5 border-2 rounded mt-5 mb-5 justify-center items-center mx-auto w-2/6 p-5">
            <h1 className="text-2xl">Шинэ нууц үг зохиох </h1>
            <div className="flex flex-col w-full max-w-xs gap-3">
                <div className="flex flex-col gap-2">
                    <p className="text-sm">Нууц үг</p>
                    <input className="input input-bordered w-full max-w-xs" type="password" placeholder="" />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-sm">Нууц үг давтах </p>
                    <input className="input input-bordered w-full max-w-xs" type="password" placeholder="" />
                </div>
            </div>
            <button className="btn btn-disabled w-full max-w-xs" role="button" aria-disabled="true">Үргэлжлүүлэх</button>
        </div>
        </>
    )

}

