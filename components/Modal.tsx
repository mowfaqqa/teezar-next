import React from "react";
import { XCircle } from "react-feather";
import { Context } from "../context/Context";

type Props = {
  data: string;
  func: any
};

function Modal({ data, func }: Props) {

  return (
    <Context>
      <div className=" z-50 flex justify-center items-center w-[100%] h-[100%] fixed top-0 left-0 bg-black bg-opacity-70">
        <div className="bg-white p-6 rounded font-bold flex flex-col items-center gap-3">
          <p>Please Sign in to {data}.</p>
          <XCircle className="text-gold-100 hover:cursor-pointer" onClick={func} />
        </div>
      </div>
    </Context>
  );
}

export default Modal;
