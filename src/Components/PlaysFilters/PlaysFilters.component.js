import React from "react";
import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const MyDisclosure = (props) => {
  return (
    <Disclosure >
    {({ open }) => (
        <>
      <Disclosure.Button className="py-2 flex items-center gap-3 p-3 mt-5">
        {open ? <BiChevronUp /> : <BiChevronDown />}
        <span className={open ? "text-red-500 text-lg" : "text-gray-700 text-lg"}>
        {props.title}
        </span>

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
        </>
  )}
    </Disclosure>
)}

export default MyDisclosure;