const MealSkeleton = () => {

    
  return (
    <div className="grid-item img">
        <img src="" alt=''  className="!bg-slate-200 animate-pulse" />

        <div className="item-desc">
            <span className='bg-slate-300 w-36 h-4 animate-pulse'>  </span>

            <div className="flex">
                <div  size={13} className='bg-slate-300 w-2 h-3 animate-pulse' ></div>
                <div  size={13} className='bg-slate-300 w-2 h-3 animate-pulse' ></div>
                <div  size={13} className='bg-slate-300 w-2 h-3 animate-pulse' ></div>
                <div  size={13} className='bg-slate-300 w-2 h-3 animate-pulse' ></div>
                <div  size={13} className='bg-slate-300 w-2 h-3 animate-pulse' ></div>
            </div>
            
        </div>
        
    </div>
  )
}

export default MealSkeleton