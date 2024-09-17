import React from "react";

const DetailComp = ({ productsDetail }) => {
  return (
    <div className="flex gap-10 my-10 max-md:flex-col max-md:gap-20">
      <div className="m-auto min-w-[300px] max-w-[400px] min-h-[300px] max-h-[400px] object-cover">
        <img src={productsDetail?.image} alt="" className="" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="text-3xl font-semibold">{productsDetail?.title}</div>
        <div className="text-2xl ">{productsDetail?.description}</div>
        <div className="flex justify-between align-items-center">
          <div className="flex flex-col gap-3">
            <div className="text-2xl ">
              Derecesi: {productsDetail?.rating?.rate}
            </div>
            <div className="text-2xl">
              Adet: {productsDetail?.rating?.count}
            </div>
            <div className="text-2xl font-semibold">
              Fiyat: {productsDetail?.rating?.count}{" "}
              <span className="text-sm">₺</span>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="flex border p-2">
              <div>-</div>
              <input className="w-9 text-center" type="text" value="0" />
              <div>+</div>
            </div>
            <div className="my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center">
              Sepete Ekle
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
