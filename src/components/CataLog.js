import React from "react";
import { BiCart } from "react-icons/bi";
import { GrDocumentCloud } from "react-icons/gr";

import { NavLink } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ButtonGroup } from "react-bootstrap";
import { HiArrowSmallRight } from "react-icons/hi2";

const CataLog = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="m-6 p-5 ml-20 font-Raleway z-0">
        <div className="text-3xl font-semibold text-[#1C4F40]">Our Products
        </div>
        <div className="text-5xl text-[#E3A476] py-6" ><b> New </b> Arrivals
        </div>



        <div className="">
          <Carousel responsive={responsive} draggable={true} swipeable={true} className=" m-5 grid gap-3 relative z-1">




            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/1.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Bromeliad Aechmea Pink </div>
                    <div className="capitalize line-clamp-3">  Featuring colorful, long-lasting blooms, the Bromeliad Aechmea Pink is a unique flowering plant to add a touch of tropics With lasting blooms</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/2.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Monstera Obliqua Peruvian </div>
                    <div className="capitalize line-clamp-3">  aS it is a small species, Monstera Obliqua is uncommon. Another reason for its scarcity is that it grows slowly and has short selling seasons</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/3.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Norfolk Island Pine </div>
                    <div className="capitalize line-clamp-3">  Although a lively addition to your home all year round—the Norfolk Island Pine shines as a live holiday tree during the winter season</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/4.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Philodendron </div>
                    <div className="capitalize line-clamp-3">  The Philodendron White Princess has been around for some time in private collections. But they have hit the market now in full big potted plants</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/1.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Bromeliad Aechmea Pink </div>
                    <div className="capitalize line-clamp-3">  Featuring colorful, long-lasting blooms, the Bromeliad Aechmea Pink is a unique flowering plant to add a touch of tropics With lasting blooms</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div>
          <div className="m-8 p-6 text-[60px] text-[#E3A476] text-end "> <b>Popular</b>little Plants</div>

        </div>
        <div2>

          <Carousel responsive={responsive} draggable={true} swipeable={true} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} className=" m-5 grid gap-3 relative z-1">




            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/8.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Spider Plant </div>
                    <div className="capitalize line-clamp-3">  The fast-growing shoots produce little "babies" that you can re-pot for added greenery elsewhere. Just stick to well-lit spots, water weekly.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/6.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Parlor Palm</div>
                    <div className="capitalize line-clamp-3"> The parlor palm (Chamaedorea elegans) has long been used as an indoor plant. NASA gave this plant a high purifying score.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/7.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Monstera Obliqua Peruvian </div>
                    <div className="capitalize line-clamp-3">  aS it is a small species, Monstera Obliqua is uncommon. Another reason for its scarcity is that it grows slowly and has short selling seasons</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/10.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " >Snake/Sansevieria</div>
                    <div className="capitalize line-clamp-3">  Sansevierias are succulent plants. they have strong, stiff, succulent leaves that store water. these plants release oxygen in the night</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/9.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > BMonstera Obliqua Peruvian </div>
                    <div className="capitalize line-clamp-3">  aS it is a small species, Monstera Obliqua is uncommon. Another reason for its scarcity is that it grows slowly and has short selling seasons</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div2>

        <div>
          <div className="m-8 p-6 text-[60px] text-[#E3A476] text-left "> <b>Easy</b>To Care Plants</div>

        </div>
        <div3>

          <Carousel responsive={responsive} draggable={true} swipeable={true} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} className=" m-5 grid gap-3 relative z-1">




            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/16.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Kalanchoe </div>
                    <div className="capitalize line-clamp-3"> This water-retaining succulent grows colorful, bell-shaped flowers and withstands dry climates and terrible temperature swings.,</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/17.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Peace Lily</div>
                    <div className="capitalize line-clamp-3"> If you're prone to overwatering, try Spathiphyllum. With enough light, they'll also produce their spade-shaped flowers throughout the year.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/7.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > Monstera Obliqua Peruvian </div>
                    <div className="capitalize line-clamp-3">  aS it is a small species, Monstera Obliqua is uncommon. Another reason for its scarcity is that it grows slowly and has short selling seasons</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/10.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " >Snake/Sansevieria</div>
                    <div className="capitalize line-clamp-3">  Sansevierias are succulent plants. they have strong, stiff, succulent leaves that store water. these plants release oxygen in the night</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="m-3 p-4">
              <div className=" box rounded-3xl border hover:border-[#bd9c5e]  ">


                <img className='rounded-t-3xl' src={require('./peoples/plants/9.png')} alt="" />

                <div className="relative flex justify-around h-9  bg-[rgb(206,172,106)]  w-full -mt-9 bg-opacity-70  text-[#1a4236] items-center hover:bg-white hover:opacity-55  ">
                  <div className="">
                    <NavLink className='hover:text-orange-500 flex space-x-2'>
                      <GrDocumentCloud size={25}></GrDocumentCloud>
                      <div className="font-semibold"> add to wishlist
                      </div>
                    </NavLink>
                  </div>
                  <div >
                    <NavLink className="hover:text-orange-500 flex space-x-2">

                      <BiCart size={30}></BiCart>
                      <div className="font-semibold">add to carts</div></NavLink>
                  </div>
                </div>

                <div className="bg-[#FFE6B7] rounded-b-3xl overflow-hidden text-clip ">
                  <div className="m-3  ">
                    <div className=" m-3 text-center text-[#1a4236] text-xl font-semibold capitalize " > BMonstera Obliqua Peruvian </div>
                    <div className="capitalize line-clamp-3">  aS it is a small species, Monstera Obliqua is uncommon. Another reason for its scarcity is that it grows slowly and has short selling seasons</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div3>
        <div className="inline-flex lg:block mt-9 pt-10">
          <div className="flex justify-center mt-10">
            <button className='border border-black rounded-full h-12 w-[320px] text-white hover:text-black text-xl cursor-pointer flex  bg-gradient-to-tr from-[#a5f3fc] to-[#164e63] max-[720px]:w-[300px] max-[500px]:w-[270px] outline transition duration-500 hover:outline-offset-8 '>

              <div className=" my-2 px-2 pl-14">
                <b>see full catalog</b>
              </div>
              <div className="my-3 px-3  ">
                <HiArrowSmallRight size={25} />
              </div>
            </button>

          </div>

        </div>

      </div >

    </>
  )
}
export default CataLog