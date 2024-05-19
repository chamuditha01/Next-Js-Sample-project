
function page({params}) {
    console.log(params)
    return (
        <>
        <h1>catch all roouts</h1>
        {params.dpath.map((item)=>{
            return(
                <li>{item}</li>
            )
        })}
        </>
        
    
    );
  }
export default page;