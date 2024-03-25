import { FaRegTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { DetailIcon } from "../../components/icons/DetailIcon";

export function DeleteEdit() {
  return (
    <div className="dropdown dropdown-right dropdown-end">
      <div tabIndex={0} className=" m-1">
        <DetailIcon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <div>
            <MdModeEdit />
            <a>Edit name</a>
          </div>
        </li>

        <li>
          <div className="text-[#DF1F29]">
            <FaRegTrashAlt />
            <a className="text-[#DF1F29]">Delete Category </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
