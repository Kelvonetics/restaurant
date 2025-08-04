const Contact = () => {
  return (
    <section className='bg-accent-secondary px-8 py-8'>
      <div className="hero-div">

        <div className="hero-title">
          <div className='text-2xl flex flex-col text-center gap-8'>
              <span className='text-[2rem] uppercase'>Welcome</span>
              <span className=''> 
                <span className='text-accent'>Delight</span>  
                <span className='text-orange-400'> Kitchen</span>  
              </span>
              
              <p className='text-[1rem] font-light'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti incidunt sed quibusdam eveniet possimus quidem.
              </p>
          </div>
        </div>
      </div>

      <h2 className='flex flex-col gap-1 w-full text-xl font-normal tracking-wider mb-5'>
        <span>Our Location</span>
        <div className='border-t-[3px] border-orange-400 w-[8rem]' /> 
      </h2>

      <div className="location">
        
      </div>
      
    </section>
  )
}

export default Contact
