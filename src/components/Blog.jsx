import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Blog = () => {
    useEffect(() => {
        Aos.init({
          offset: 100,
          duration: 900,
          easing: "ease-in-sine",
          delay: 100,
        });
      }, []);
    
    const blogs = [
        {
            id: 1, 
            description: "Lorem ipsum dolor sit amet consectetur. Enim porta eget non nulla montes. Lorem ipsum dolor sit amet consectetur.",
            image: './src/assets/icons/blog1.png'
        },
        {
            id: 2, 
            description: "Lorem ipsum dolor sit amet consectetur. Enim porta eget non nulla montes. Lorem ipsum dolor sit amet consectetur.",
            image: './src/assets/icons/blog2.png'
        },
        {
            id: 3, 
            description: "Lorem ipsum dolor sit amet consectetur. Enim porta eget non nulla montes. Lorem ipsum dolor sit amet consectetur.",
            image: './src/assets/icons/blog3.png'
        }
    ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto mb-10' id='blog'>
        <div className='text-center md:w-1/2 mx-auto' data-aos="fade-up">
        <h2 className='text-4xl text-neutralDGray font-semibold md-4'>
            Blogs and Feedback</h2>
              <p className='md:w-3/4 mx-auto text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur.
               Enim porta eget non nulla montes. Lorem ipsum dolor sit amet consectetur. Enim porta eget non nulla 
               montes.</p>
        </div>

    {/* all blogs */}
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between' data-aos="fade-up">
                {
                    blogs.map(blog =><div key={blog.id} className='mx-auto relative mb-10 cursor-pointer'>
                        <img src={blog.image} alt='' className='hover:scale-95 transition-all duration-300'/> 
                        <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'> 
                            <h3 className='mb-3 font-semibold text-neutralGrey'>{blog.description}</h3>     
                            <div className='flex items-center justify-center gap-8'>
                      {/* <a href='/' className='font-bold text-brandPrimary hover:text-neutral-700'>Read more --{">"}</a> */}
                    </div>
                        </div>   
                    </div>)
                }   
            </div>

    </div>
  );
};

export default Blog
