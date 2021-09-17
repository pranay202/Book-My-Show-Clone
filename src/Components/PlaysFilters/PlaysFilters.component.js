import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const MyDisclosure = () => {
  return (
    <Disclosure>
    {({ open }) => (
        <>
      <Disclosure.Button className="py-2 flex items-center gap-3">
        {open ? <BiChevronUp /> : <BiChevronDown />}
        <span className={open ? "text-red-500" : "text-gray-700"}>
        Is team pricing available?
        </span>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Disclosure.Panel>
        </>
  )}
    </Disclosure>
)}

export default MyDisclosure;