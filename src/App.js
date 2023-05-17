// import React, { useState, useEffect ,useCallback} from 'react'

// import ReactPaginate from 'react-paginate';
// import axios from 'axios';


// function App() {
//   let details = navigator.userAgent;

//   // let regexp = /android|iphone|kindle|ipad/i;
  

//   // let isMobileDevice = regexp.test(details);
  
//   // if (isMobileDevice) {
//   //    document.write("<h3>Its a Mobile Device !</h3>");
//   // } else {
//   //    document.write("<h3>Its a Desktop !</h3>");
//   // }
//   // var test = function(regexp) {return regexp.test(window.navigator.userAgent)}
//   // let regexp = /chrome|chromium|crios|firefox|/i;
//   // let isMobileDevice = regexp.test(details);
//   // switch (isMobileDevice) {
//   //     case test(/edg/i): return "Microsoft Edge";
//   //     case test(/trident/i): return "Microsoft Internet Explorer";
//   //     case test(/firefox|fxios/i): return "Mozilla Firefox";
//   //     case test(/opr\//i): return "Opera";
//   //     case test(/ucbrowser/i): return "UC Browser";
//   //     case test(/samsungbrowser/i): return "Samsung Browser";
//   //     case test(/chrome|chromium|crios/i): return "Google Chrome";
//   //     case test(/safari/i): return "Apple Safari";
//   //     default: return "Other";
//   // }

//   const userAgent1 = navigator.userAgent;

//   // Check for iOS devices
//   const isIOS = /iPad|iPhone|iPod/.test(userAgent1);

//   // Check for Android devices
//   const isAndroid = /Android/.test(userAgent1);

//   // Check for Windows Phone devices
//   const isWindowsPhone = /Windows Phone/.test(userAgent1);

//   // Check for desktop devices
//   const isDesktop = !isIOS && !isAndroid && !isWindowsPhone;

//   // let userAgent = navigator.userAgent;
//   // let browserName;

//   // if (userAgent.match(/chrome|chromium|crios/i)) {
//   //   browserName = "Chrome";
//   // } else if (userAgent.match(/firefox|fxios/i)) {
//   //   browserName = "Firefox";
//   // } else if (userAgent.match(/safari/i)) {
//   //   browserName = "Safari";
//   // } else if (userAgent.match(/opr\//i)) {
//   //   browserName = "Opera";
//   // } else if (userAgent.match(/edg/i)) {
//   //   browserName = "Edge";
//   // } else if (userAgent.match(/android/i)) {
//   //   browserName = "Android";
//   // } else if (userAgent.match(/iphone/i)) {
//   //   browserName = "iPhone";
//   // } else {
//   //   browserName = "Unknown";
//   // }

//   // if (userAgent.match(/Android/i)) {
//   //   browserName = "Android device";
//   // }
//   // if (userAgent.match(/webOS/i)) {
//   //   browserName = "WebOs device";
//   // }
//   // if (userAgent.match(/iPhone/i)) {
//   //   browserName = "iphone device";
//   // }
//   // if (userAgent.match(/iPad/i)) {
//   //   browserName = "ipad device";
//   // }
//   // if (userAgent.match(/iPod/i)) {
//   //   browserName = "ipod device";
//   // }
//   // if (userAgent.match(/BlackBerry/i)) {
//   //   browserName = "BlackBerry device";
//   // }
//   // if (userAgent.match(/Windows Phone/i)) {
//   //   browserName = "Windows Phone";
//   // }
//   // if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
//   //   // the user is using a mobile device, so redirect to the mobile version of the website
//   //   window.location = "https://team18cms.artoon.in/";
//   // }
 
    
//   // const detec=()=>{
//   //   var a = '';
//   //   var up = document.querySelector("#GFG_P");
//   //     if (navigator.userAgent.match(/Android/i)
//   //         || navigator.userAgent.match(/webOS/i)
//   //         || navigator.userAgent.match(/iPhone/i)
//   //         || navigator.userAgent.match(/iPad/i)
//   //         || navigator.userAgent.match(/iPod/i)
//   //         || navigator.userAgent.match(/BlackBerry/i)
//   //         || navigator.userAgent.match(/Windows Phone/i)) {
//   //         a = true;
//   //     } else {
//   //         a = false;
//   //     }
//   //     up.innerHTML = a;
//   //   } 

//   const toMatch = [
//     /Android/i,
//     /webOS/i,
//     /iPhone/i,
//     /iPad/i,
//     /iPod/i,
//     /BlackBerry/i,
//     /Windows Phone/i,
//     /chrome|chromium|crios/i,
//     /firefox|fxios/i,
//     /safari/i,
//     /opr\//i,
//     /edg/i,
//     /android/i,
// ];   
// let match = toMatch.find((toMatchItem) =>  {
//        if(navigator.userAgent.match(toMatchItem)){
//     return toMatchItem
//    };
//   })
//   return (
//     <div>
//       <p>{match.toString().split("/")[1]}</p>
//       {/* <button id="GFG_Button" onClick={()=> detec()}>Button</button>
//       <p id="GFG_P" style={{color:'green'}}></p> */}
//       {/* <h3>You are browsing with:{browserName}</h3> */}
//       {isIOS && <p>This website is open on an iOS device.</p>}
//       {isAndroid && <p>This website is open on an Android device.</p>}
//       {isWindowsPhone && <p>This website is open on a Windows Phone device.</p>}
//       {isDesktop && <p>This website is open on a desktop device.</p>}
//     </div>
    
//     // <div>
//     //   {isMobileDevice? <p>This website is open on an chorme</p> : <p>This website is not open on an iOS device</p>}
//     // </div>
//   );
  
//   // const userAgent = window.navigator.userAgent;
//   // if (userAgent.indexOf('Chrome') > -1) {
//   //   return <div>This website is open in Google Chrome</div>;
//   // } else if (userAgent.indexOf('Mozilla') > -1) {
//   //   return <div>This website is open in Mozilla Firefox</div>;
//   // } else if (userAgent.indexOf('Safari') > -1) {
//   //   return <div>This website is open in Apple Safari</div>;
//   // } else if (userAgent.indexOf('Edge') > -1) {
//   //   return <div>This website is open in Microsoft Edge</div>;
//   // } else if (userAgent.indexOf('Opera') > -1) {
//   //   return <div>This website is open in Opera</div>;
//   // } else {
//   //   return <div>Unknown browser</div>;
//   // }
// }


// export default App;



















// // const App = () => {
// //     const [list,setList]=useState([])
// //     const [pageCount, setPageCount] = useState(0);
// //     const [itemOffset, setItemOffset] = useState(0);
// //     const [itemsPerPage,setItemPerPage] = useState(5)
// //     const [total,setTotal] = useState([])
// //     const [searchText,setSearchText] = useState('')
// //     const [filterData,setFilterData] = useState([])
// //      const [, updateState] = useState();
// //      const forceUpdate = useCallback(() => updateState({}), []);
  
// //   useEffect(() => {
// //     const endOffset = itemOffset + itemsPerPage;
// //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
// //     setList(filterData.slice(itemOffset, endOffset));
// //     setPageCount(Math.ceil(filterData.length / itemsPerPage));
// //   }, [itemOffset, itemsPerPage]);
  
// // useEffect=()=>{
// //   fetchData()
// // }
  
// //   const fetchData = async () =>{
// //     const apiData = await axios.get(`https://registry.npmjs.org/-/v1/search?text=react-table&size=${100}&from=${0}`)
// //     console.log('apidata',apiData);
// //     const endOffset = itemOffset + itemsPerPage;
// //     // setList(apiData.data.objects)
// //     setList(apiData.data.objects.slice(itemOffset, endOffset));
// //     setTotal(apiData.data.objects)
// //     setFilterData(apiData.data.objects)
// //     // forceUpdate()
// //     setPageCount(Math.ceil(apiData.data.objects.length / itemsPerPage));
// //   }
  
// //   const handlePageClick = (event) =>{
// //     console.log('filterData',filterData);
// //     const newOffset = ((event.selected * itemsPerPage) % (filterData.length ))
// //     // setCurrentPage(event.selected)
// //     setItemOffset(newOffset);
// //   }
  
// //   const inputEvent =(e) =>{
// //     const {name , value} =e.target;
// //     setSearchText(value)
// //     setTimeout(()=>{
// //       const data= total.filter((item,i)=>{
// //         if(item.package.description.toLowerCase().includes(value)) return item
// //        })
// //        console.log('value',searchText);
     
// //        console.log('data',data);
// //        setFilterData(data)
// //        // setTotal(data)
// //        const endOffset = itemOffset + itemsPerPage;
// //        setList(data.slice(itemOffset, endOffset));
// //        setPageCount(Math.ceil(data.length / itemsPerPage));
// //       //  setCurrentPage(0)
// //     },3000)
// //   }
// //   const sortFun=(a, b)=> {
// //     if(a !== undefined && b !== undefined)
// //     {
// //         if (a.package.description < b.package.description) return -1;
// //         if (a.package.description > b.package.description) return 1;
// //         return 0;
// //     }
// //   }
// //   const handleSort =()=>{
// //     setList(list.sort(sortFun))
// //      forceUpdate()
// //   }
  
//     // return (
//       // <div className="App">
//       //    <div className="jumbotron">
//       //   <h1 className="display-4">
//       //     <i class="material-icons brand-icon">User Data</i>
//       //   </h1>
//       //   <div class="input-group search_container w-50 mx-auto">
//       //     <input
//       //       type="text"
//       //       className="form-control"
//       //       placeholder="Search Your Recipe..."
//       //       value={searchText} name='searchText' onChange={inputEvent} /><i class="fa fa-search"></i>
          
//       //   </div>
//       // </div>
//       //   {console.log('sort',list)}
     
//       //   <div className="container">
//       //   <div className="row">

//       //     <div className="col-12">
//       //       <table class="table">
//       //         <thead class="thead-light">
//       //           <tr>
//       //             <th>Data</th>
//       //           </tr>
//       //         </thead>
//       //         <tbody>
//       //         {list && list.length > 0 && list.map((item,i)=>{
//       //     return(
//       //       <tr>
//       //         <td>
//       //         {item.package.description}
//       //         </td>
//       //       </tr>
//       //       )
//       //     })}
//       //         </tbody>
//       //         </table>
//       //         </div>
//       //        </div>
      
//       //     <button className="btn btn-primary btn-block" onClick={handleSort}>sort</button>
//       //     <div className='custom-pagination'>
//       //     <ReactPaginate
//       //     breakLabel="..."
//       //     nextLabel=">"
//       //     onPageChange={handlePageClick}
//       //     pageRangeDisplayed={5}
//       //     pageCount={pageCount}
//       //     previousLabel="<"
//       //     renderOnZeroPageCount={null}
//       //     activeClassName={"active"}
//       //     // forcePage={currentPage}
//       //   />
//       //     </div>
//       //     </div>
       
//       // </div>
      
//     // );
// // }

// // export default App

import React from 'react'
import Mocktest from './Mocktest'
// import TestElements from './TestElements'
function App() {
  return (
    <div><Mocktest/></div>
  );
}

export default App;