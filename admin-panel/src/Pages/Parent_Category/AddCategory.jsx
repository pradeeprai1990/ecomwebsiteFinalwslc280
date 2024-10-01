import React, { useEffect, useState } from "react";
import Breadcrumb from "../../common/Breadcrumb";
import axios from "axios";
import { AdminBaseUrl } from "../../config/config";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {

  let [redirectstatus,setredirectstatus]=useState(false)
  let navigate=useNavigate()
  let handleSave=(event)=>{
    event.preventDefault();
    let formDataobj=new FormData(event.target)
    axios.post(AdminBaseUrl+"/category/insert",formDataobj)
    .then((res)=>{
        if(res.data.status==1){
            //success
            window.alert("Data Save")
        }
        else{
            if(res.data.error.code==11000){
               window.alert("Category Name allredy exits...")
            }
        }
    })
  }


  return (
    <section className="w-full">
          <Breadcrumb
            path={"Parent Category"}
            path2={"Add Category"}
            slash={"/"}
          />
          <div className="w-full min-h-[610px]">
            <div className="max-w-[1220px] mx-auto py-5">
              <h3 className="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">
                Add Category
              </h3>
              <form onSubmit={handleSave} className="border border-t-0 p-3 rounded-b-md border-slate-400">
                <div className="mb-5">
                  <label
                    for="base-input"
                    className="block mb-5 text-md font-medium text-gray-900"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="categoryName"
                    id="base-input"
                    className="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3 "
                    placeholder="Category Name"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="base-input"
                    className="block mb-5 text-md font-medium text-gray-900"
                  >
                    Category Image
                  </label>
                 
                    <label for="file-input" className="sr-only">
                      Choose file
                    </label>
                    <input
                      type="file"
                      name="categoryImage"
                      id="file-input"
                      className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    "
                      multiple
                    />
                 
                </div>
                <div className="mb-5">
                  <label
                    for="base-input"
                    className="block mb-5 text-md font-medium text-gray-900"
                  >
                    Category Description
                  </label>
                  <textarea name="categoryDescription" id="message" rows="3" className=" resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Add Product Description....."></textarea>
                </div>
                <div className="pe-5 ps-1">
                  <span className="flex items-center gap-3">
                    Status :
                    <input
                      id="link-radio"
                      name="categoryStatus"
                      type="radio"
                      value={true}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                    ></input>
                    Active
                    <input
                      id="link-radio"
                      name="categoryStatus"
                      type="radio"
                      value={false}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                    ></input>
                    Deactive
                  </span>
                </div>
                <button
                  type="submit"
                  className="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Add Category
                </button>
              </form>
            </div>
          </div>
    </section>
  );
}
