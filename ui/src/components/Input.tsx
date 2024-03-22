import { HideIcon } from "../../public/Icons/HideIcon"
export function Input(){
    return <div className="p-5  bg-white md:flex-1 lg:w2/3 lg:mx-auto ">
    <h3 className="my-4 text-2xl font-semibold text-gray-700 flex justify-center">Бүртгүүлэх</h3>
    <form action="#" className="flex flex-col space-y-5">
    <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm  font-semibold text-gray-500">Нэр</label>
        <input
          placeholder="Нэр"
          type="name"
          autoFocus
          className="bg-gray-100 px-4 py-4  transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm  font-semibold text-gray-500">Имэйл</label>
        <input
          placeholder="Имэйл"
          type="email"
          autoFocus
          className="bg-gray-100 px-4 py-4  transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm  font-semibold text-gray-500">Хаяг</label>
        <input
          placeholder="Хаяг"
          type="location"
          autoFocus
          className="bg-gray-100 px-4 py-4  transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-between relative">
          <label htmlFor="password" className="text-sm  font-semibold text-gray-500">Нууц үг</label>
        </div>
        <div className="relative flex flex-col">
        <input
         placeholder="Нууц үг"
          type="password"
          id="password"            
          className="bg-gray-100  px-4 py-4 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
        <button type="button"  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }' className="absolute top-0 end-0 flex items-center p-3.5 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <HideIcon/>
        </button>
        </div>            
      </div>
      <div className="flex flex-col space-y-1">
        <div className="flex items-center justify-between relative">
          <label htmlFor="password" className="text-sm  font-semibold text-gray-500">Нууц үг давтах</label>
        </div>
        <div className="relative flex justify-center flex-col ">
        <input
         placeholder="Нууц үг давтах"
          type="password"            
          className="bg-gray-100  px-4 py-4 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
        />
        <button type="button"  data-hs-toggle-password='{
        "target": "#hs-toggle-password"
        }' className="absolute top-0 end-0 flex items-center p-3.5 rounded-e-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        <HideIcon/>
        </button>
        </div>            
      </div>
      <div className="flex items-center space-x-2">
      </div>
      <div className="form-control">
        <div className="flex items-center">
            <input type="checkbox" defaultChecked className="checkbox" />
            <label className="label cursor-pointer">
                <span className="label-text">Үйлчилгээний нөхцөл зөвшөөрөх</span> 
            </label>
        </div>            
      </div>
      <div>
        <button 
          type="submit"
          className="w-full flex justify-center mx-auto px-4 py-4 text-lg  text-gray-400 transition-colors duration-300 bg-gray-200 rounded-md shadow hover:bg-green-600 hover:text-white focus:outline-none focus:ring-blue-200 focus:ring-4"
        >
          Бүртгүүлэх
        </button>
      </div>
      <div className="flex flex-col space-y-5">    
      </div>
    </form>
  </div>
}