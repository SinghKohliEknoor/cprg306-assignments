import Title from "./title.js";

export default function Page(){
    let a = 5;
    let b = 10;
    return(
        <main>
            <Title /> 
            <p>This is a simple web page</p>
            <p>
                The sum of {a} and {b} is {a+b}.
            </p>
        </main>
    );
}