import React from "react";
import { signin } from '../data';
import { Link, useNavigate } from 'react-router-dom';




const Forget = () =>{
const { logo5, text7, brands,slides,comment, position } = signin;
    return <section>
         <div className=''>
        {/* logo */}
        <a href="# " className='flex sm:mb-3'>
          <img src={logo5} className='mx-[100px] h-[25px] mt-[10px] bg-[#A57CE6]' alt="" />
          <span className='font-bold text-[#A57CE6] mt-[10px] mx-[-80px]'>{text7}</span>
        </a>
      </div>
      <div className='mt-[30px]'>
            <h2 className='font-bold'>Already Have an Account? <Link className='text-[#A57CE6]' to='/signin'>Sign In</Link></h2>
          </div>
    </section>
}


export default Forget;