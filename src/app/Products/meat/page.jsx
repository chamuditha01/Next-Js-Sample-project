import Link from "next/link";

function page() {
    const meats=[
        {
            id:1,
            meatname:"pork"
        },
        {
            id:2,
            meatname:'beef'
        }
    ]
    return (
      <>
        <h1>meat page</h1>
        {meats.map((meats)=>{
            return(
                <><Link href={`/Products/meat/${meats.meatname}`}>{meats.meatname}</Link><br></br></>
            )
        })}
        </>
    );
  }
export default page;