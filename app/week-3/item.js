export default function Item(props){
    return(
        <div className="grid h-25 w-60 ml-10" >
            <div className="bg-gray-400 pt-5 pl-5 mt-5 ">
                <p className="font-bold text-xl">{props.name}</p>
            </div>
            <div className="bg-gray-400 pb-5 pl-5 ">
                <p>Buy {props.quantity} in {props.category}</p>
            </div>
        </div>
    )
}