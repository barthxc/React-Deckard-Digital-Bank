import './Modal.css'
const Modal = () => {
    
  return (
    <div className="fixed z-10 left-1/2 top-1/2 m-w-[900px] p-5 bg-[#27262C] overflow-auto translate-y-[-50%] translate-x-[-50%] rounded-xl blur-none">
        <div className="flex flex-row justify-end m-5 ">
            <button className="text-[#4090B5] font-bold text-2xl p-2 px-4 rounded-full border border-[#4090B5] hover:bg-[#4090b540]">
                    X
            </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
            <form action="" className='flex flex-col gap-10 text-2xl'>
                <div>
                <input type="text" placeholder="Username" className='text-[#B3B3B3] bg-transparent border-b border-gray-500 focus:outline-none' />
                </div>
                <div>
                <input type="text" placeholder="Password" className='text-[#B3B3B3] bg-transparent border-b border-gray-500 focus:outline-none'/>
                </div>
                <button className='text-white bg-[#4090B5] rounded-xl py-2 hover:bg-[#4fb1df]'>
                    Iniciar Sesión
                </button>
            </form>
            <a href="#" className="text-[#4090B5] text-lg underline">¿Has olvidado tu contraseña?</a>
        </div>
    </div>
  )
}

export default Modal