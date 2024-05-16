import { Star } from "lucide-react"
import React from "react"
import { HiArrowSmallRight } from "react-icons/hi2"



const ReView = () => {
  return (
    <>
      <div id="/reviews" className="xl:m-8 xl:p-9 md:m-4 md:p-7 m-4 p-3 font-Raleway max-[720px]:text-center">
        <div className="text-[#124838] font-semibold text-[38px]">Review</div>
        <div className="text-[56px] text-[#E4A77B]">Some Words From <div className="whitespace-nowrap"> </div>
          Our <b>Lovely Customers</b></div>

        <div className="grid min-[960px]:grid-cols-2 min-[760px]:grid-cols-1 gap-8 my-4 py-4">

          <div className=" grid  ">
            <div className="grid grid-flow-col grid-rows-2 gap-3 items-end rounded-2xl bg-[#FFECC8] m-2 p-4">
              <div className="row-span-2 justify-items-center items-end "> <img className="rounded-2xl" src={require("../dummy/328127899_3392320851023291_2069996927562782561_n.jpg")} alt="" height={48} width={48} /></div>
              <div className="col-span-2 ">
                <div className="flex text-[#E5A87C]">
                  <Star fill="#E5A87C" /><Star fill="#E5A87C" /><Star fill="#E5A87C" /><Star fill="#E5A87C" /><Star fill="#E5A87C" />

                </div>

                I'm not really a customer of this site, but their free gardening guide helped me a lot. Thank you ...
              </div>
              <div className="col-span-2">
                <h1 className="text-[#1C4F3E] text-[20px] font-bold">Dixit Sharma</h1>
                <div className="whitespace-nowrap"> </div>
                Firefighter
              </div>

            </div>

            <div className="grid grid-flow-col grid-rows-2 gap-3 items-end rounded-2xl bg-[#FFECC8] m-2 p-4">
              <div className="row-span-2 justify-items-center items-end "> <img className="rounded-2xl" src={require("../dummy/397884819_3402213933442597_5860622911507072922_n.jpg")} alt="" height={48} width={48} /></div>
              <div className="col-span-2 ">
                <div className="flex text-[#E5A87C]">
                  <Star fill="#E5A87C" /><Star fill="#E5A87C" /><Star fill="#E5A87C" /><Star fill="#E5A87C" /><Star fill="#E5A87C" />

                </div>

                Aranyak is the perfect place for making yourself surrounded by lots and lots of plant with a guide of
              </div>
              <div className="col-span-2">
                <h1 className="text-[#1C4F3E] text-[20px] font-bold">Rajan KC</h1>
                <div className="whitespace-nowrap"> </div>
                Influencer & Plant lover
              </div>

            </div>
            <div className="grid grid-flow-col grid-rows-2 gap-3 items-end rounded-2xl bg-[#FFECC8] m-2 p-4">
              <div className="row-span-2 justify-items-center items-end "> <img className="rounded-2xl" src={require("../dummy/425504642_1982990942130043_2422108234203507079_n.jpg")} alt="" height={48} width={48} /></div>
              <div className="col-span-2 ">
                <div className="flex text-[#E5A87C]">
                  <Star fill="#E5A87C" /><Star fill="#E5A87C" /><Star fill="#E5A87C" /><Star fill="#E5A87C" /><Star fill="#E5A87C" />

                </div>

                I've brought dozens of plants over the year from this site and not a penny wasted. All arround good
              </div>
              <div className="col-span-2">
                <h1 className="text-[#1C4F3E] text-[20px] font-bold">Utsarga Pokharel</h1>
                <div className="whitespace-nowrap"> </div>
                Small-time thief
              </div>

            </div>
            <div className="flex justify-center mt-10">
              <button className='border border-black rounded-full h-12 w-[320px] text-white hover:text-black text-xl cursor-pointer flex  bg-gradient-to-tr from-[#a5f3fc] to-[#164e63] max-[720px]:w-[300px] max-[500px]:w-[270px] outline transition duration-500 hover:outline-offset-8 justify-center '>

                <div className=" my-2 px-2 pl-0 ">
                  <b>Load more</b>
                </div>
                <div className="my-3 px-3  ">
                  <HiArrowSmallRight size={25} />
                </div>
              </button>

            </div>
          </div>




          <div className='max-[1020px]:'><img src={require("../New folder (2)/Pics/loveletter.png")} alt="" /></div>
        </div>
      </div>
    </>
  )
}
export default ReView