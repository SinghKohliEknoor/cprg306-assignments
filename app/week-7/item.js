export default function Item(props){
    return(
        <main>
            <div className="flex bg-gray-400 p-5 m-5 max-w-md" >

            <ul>
                <li>
                    {props.name}
                </li>
                <li>
                    Buy {props.quantity} in {props.category}
                </li>
            </ul>

            </div> 
        </main>
    )
}