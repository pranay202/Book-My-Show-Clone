import React from "react";
import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const MyDisclosure = (props) => {
  return (
    <Disclosure >
    {({ open }) => (
        <>
        <div className="px-3 bg-white">

      <Disclosure.Button className="py-2 flex gap-3 mt-5 container">
      <div className="container flex justify-between gap-48">
      <div className="flex gap-2 object-left width-1/4">
        {open ? <BiChevronUp className="mt-1" /> : <BiChevronDown className="mt-1" />}
        <span className={open ? "text-red-500 text-lg" : "text-gray-700 text-lg" }>
        {props.title}
        </span>
      </div>
  
      <button className="right-1 object-right flex justify-end text-gray-700 hover:text-red-500">clear</button>

      </div>
      </Disclosure.Button>

      <Disclosure.Panel className="text-gray-500 bg-white p-3">
        <div className="flex items-center gap-3 flex-wrap">
          {props.tags.map((tag) => (
            <>
            <div className="border-2 border-gray-100 p-1 px-3 mx-2">
              <span className="text-red-600">{tag}</span>
            </div>
            </>
          ))
          }
        </div>
      </Disclosure.Panel>
        </div>
        </>
  )}
    </Disclosure>
)}

export default MyDisclosure;