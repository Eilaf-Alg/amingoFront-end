import React from "react";

const JigSaw = (prop) => {
  // First set of {} below indicates what is inside the {} is a variable
  // Inner set of {} below indicate that inside this variable is a JSON object
  // Anthing between this quotation mark `` indicate that this does not necessarily contain only a string, but can include a variable
  // Anthing between this quotation mark "" or '' indicate whatever inside it is strictly a string that doesn't change
  // To add a variable inside this quotation mark ``, we wrap the variable x with ${...} to become ${x}
  /******  style={{backgroundImage: `url('${prop.img}')` }}></div> ******/


  // Syntax below means: if first condition is false, Do NOT continue executing what's inside the {}
  // if first condition is true, the compiler will proceed with the rest of the code inside the <div> .... </div>
  // Hence, the syntax below acts as two different if() statements. Not one if() else statement
  /****** { prop.order === 1 && ( <div> ........... </div> ) } ******/

  // To swap the order of our imgs and text, we are relying on the CSS class "order-lg-1"

  return (

    <div className="JigSaw container-fluid p-0">
    { prop.order === 1 && 
        <div className="row no-gutters">
            <div className="col-lg-6 order-lg-1 text-white showcase-img" 
            style={{backgroundImage: `url('${prop.img}')` }}></div>

            <div className="col-lg-6 order-lg-2 my-auto showcase-text">
                <h2>{prop.title}</h2>
                <p className="lead mb-0">{prop.caption}</p>
            </div>
        </div>
    }

    { prop.order === 2 && 

        <div className="row no-gutters">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" 
            style={{backgroundImage: `url('${prop.img}')` }}></div>

            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>{prop.title}</h2>
                <p className="lead mb-0">{prop.caption}</p>
            </div>
        </div>
    }

</div>

  );
};

export default JigSaw;



// BELOW IS MY IDENTICAL CODE WHICH DIDN'T WORK FOR SOME REAASON!!!!!

    // //   added our own CSS class "JigSaw" in the main <div>
    // <div className="JigSaw container-fluid p-0">

    // {/* Case if order value passed as 1 */}
    // { prop.order === 1 && 
    //         <div className="row no-gutters">
    //             <div className="col-lg-6 order-lg-1 text-white showcase-img" 
    //             style={{backgroundImage: `url('${prop.img}')` }}></div>

    //             <div className="col-lg-6 order-lg-2 my-auto showcase-text">
    //                 <h2>{prop.title}</h2>
    //                 <p className="lead mb-0">{prop.caption}</p>
    //             </div>
    //         </div>
    // }
    //   ​
    // {/* Case if order value passed as 2 */}
    // { prop.order === 2 && 
    //       <div className="row no-gutters">
    //           <div className="col-lg-6 order-lg-2 text-white showcase-img" 
    //           style={{backgroundImage: `url('${prop.img}')` }}></div>

    //           <div className="col-lg-6 order-lg-1 my-auto showcase-text">
    //               <h2>{prop.title}</h2>
    //               <p className="lead mb-0">{prop.caption}</p>
    //           </div>
    //       </div>
    // }

    // </div>