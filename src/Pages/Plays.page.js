import React from "react";
import Poster from "../Components/Poster/Poster.component";
import MyDisclosure from "../Components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
    return(
        <>
        <div className="container mx-auto px-4 bg-opacity-50 bg-gray-200">
            <div className="w-full lg:flex lg:flex-row-reverse">
            <div className="flex flex-col items-start mt-7 lg:w-8/12">
                <h2 className="text-gray-900 text-2xl font-bold ml-5 mb-7">Plays in Bhubaneshwar</h2>
                <div className="flex flex-wrap">
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                        title="Tvk Cultural presents Ponniyin Selvan"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314526-vhjdbqsypy-portrait.jpg"
                        title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314533-jermladzay-portrait.jpg"
                        title="Tvk Cultural presents Ponniyin Selvan"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314527-exbxfrdxnw-portrait.jpg"
                        title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314929-rernujftzc-portrait.jpg"
                        title="Many Faces of Korean Storytelling"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315004-tavvewmnzp-portrait.jpg"
                        title="Ramayana Connecting the Dots - Online Storytelling"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxOSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314534-zjzubzamfs-portrait.jpg"
                        title="Tvk Cultural presents Ponniyin Selvan"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxOCBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314524-twwbljthjv-portrait.jpg"
                        title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                        subTitle="Tamil ₹300"
                        />
                    </div>                   
                </div>            
            </div>
            <div className="my-7 ml-0 lg:w-1/4 flex flex-col items-start">
            <h2 className="text-gray-900 text-2xl font-bold ml-5">Filters</h2>
            <div className=" bg-opacity-100 rounded-md p-2">
                <MyDisclosure title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
                <MyDisclosure title="Languages" tags={["Tamil", "English", "Kannada"]} />
                <MyDisclosure title="Category" tags={["Theatre"]} />
                <MyDisclosure title="Genres" tags={["Drama","Adaption", "Historical","Online Streaming Plays"]} />
            </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Plays;