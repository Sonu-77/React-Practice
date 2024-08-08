import './index.css'


function Card({username,intro}){
    console.log(username);
    return(

        <>
        <div id='container'>
            <div className="min-h-96 w-96 bg-red-400 p-2 rounded-md  flex flex-col items-center justify-center gap-3">
                <img className="w-72 h-72 object-fill rounded-full " src="https://randomapp-demo.carrd.co/assets/images/image02.jpg?v02453492066351" alt="profile" />
                <h2 className='text-3xl text-gray-800 font-extrabold'>{username}</h2>
                <h4 className='text-lg text-white'>{intro}</h4>
                <p className='text-base text-start ml-10 mr-10 text-slate-800'>Lorem ipsum dolor sit ametoooodkeghd consectetur adipisicing elit. Quis blanditiis, ullam natus, pariatur delectus repellendus dignissimos recusandae nostrum dolorum nam distinctio placeat minus a consequatur quae tempore quas magni nihil!</p>
            </div>
        </div>
        </>



    )
}

export default Card;