export default function GridItem({index, arr}){
    console.log(arr)
    return(
        <div className="bg-white p-4 m-3 flex flex-col h-36 w-32 text-black">
            {arr.map((obj)=>{
                return <Card obj={obj} />
            })}
        </div>
    )
}

export function Card({obj}){
    console.log(obj)
    return(
    <div className="p-2 my-1 flex gap-2 bg-sky-200">
        {obj.name} : {obj.age}
    </div>)
}