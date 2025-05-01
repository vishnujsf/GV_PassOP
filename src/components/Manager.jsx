// import React from "react";
// import { useRef, useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import { v4 as uuidv4 } from 'uuid';

// const Manager = () => {
  
//     const notify = (message) => toast(message);



//   const ref = useRef();
//   const passwordRef = useRef();
//   const [form, setform] = useState({ site: "", username: "", password: "" });
//   const [passwordArray, setpasswordArray] = useState([]);

//   useEffect(() => {
//     let passwords = localStorage.getItem("passwords");
//     if (passwords) {
//       setpasswordArray(JSON.parse(passwords));
//     }
//   }, []);


//   const savePassword = () => {

//     if (!form.site.trim() || !form.username.trim() || !form.password.trim()) {
//       notify("⚠️ All fields are required! Please fill in site, username, and password.");
//       return;
//     }
    


//     setpasswordArray([...passwordArray, {...form,id:uuidv4()}]);
//     localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]));
//     console.log(passwordArray);
//     setform({site:"",username:"",password:""})
//     notify("Password Saved Successfully!")
//   };

//   const deletePassword = (id) => {
//     console.log("Deleting password with id",id)
//     let c = confirm("Do you really want to delete this Password")
//     if(c){ 
//       setpasswordArray(passwordArray.filter(item=>item.id!==id))
//       localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item=>item.id!==id)))
//       notify("Password Deleted Successfully!");
//     }
    
 
//   };

//   const editPassword = (id) => {
//     console.log("Editing password with id",id)
//     setform(passwordArray.filter(i=>i.id===id)[0])
//     setpasswordArray(passwordArray.filter(item=>item.id!==id))
//     notify("Password Deleted Successfully!"); 
//     };



//   const handleChange = (e) => {
//     setform({ ...form, [e.target.name]: e.target.value });
//   };

//   const copyText = (text) => {
//     navigator.clipboard.writeText(text);
//     notify("Text copied to Clipboard!")
//   };

//   <ToastContainer position="top-right" autoClose={2000} />

//   return (
//     <>
  
     
//       <div className="absolute inset-0 -z-10 h-full w-full bg-green-85 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
//         <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
//       </div>
//       <div className="p-2 md:px-30 py-3  md:mycontainer min-h-[86.5vh]">
//         <h1 className="text-3xl font-bold text-center">
//           <span className="text-green-500">&lt;</span>
//           GV
//           <span className="text-green-500">PassOp /&gt;</span>
//         </h1>
//         <p className="text-center text-green-500 text-lg">
//           Your own Password Manager
//         </p>
//         <div className="text-black flex flex-col p-4 text-black gap-5 items-center">
//           <input
//             value={form.site}
//             onChange={handleChange}
//             placeholder="Enter Website URL"
//             className="rounded-full border border-green-500 w-full placeholder:text-sm px-3 "
//             type="text"
//             name="site"
//             id="site"
//           />
//           <div className="flex flex-col md:flex-row  w-full gap-5  justify-between">
//             <input
//               value={form.username}
//               onChange={handleChange}
//               placeholder="Enter Username"
//               className=" rounded-full border border-green-500 w-full placeholder:text-sm px-3"
//               type="text"
//               name="username"
//               id="username"
//             />
//             <div className="relative ">
//               <input
//                 ref={passwordRef}
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="Enter Password"
//                 className="rounded-full border border-green-500 w-full placeholder:text-sm px-3"
//                 type="password"
//                 name="password"
//                 id="password"
//               />
            
//             </div>
//           </div>

//           <button
//             onClick={savePassword}
//             className=" font-bold flex justify-center items-center text-black bg-green-400 hover:bg-green-300 gap-2 py-0.5 px-4 w-fit rounded-full border border-green-900"
//           >
//             <lord-icon
//               src="https://cdn.lordicon.com/sbnjyzil.json"
//               trigger="hover"
//             ></lord-icon>
//             Save
//           </button>
//         </div>

//         <div className="passwords">
//           <h2 className="font-bold text-2xl py-2">Your Passwords</h2>
//           {passwordArray.length === 0 && <div>No Passwords to show</div>}
//           {passwordArray.length != 0 && (
//             <table className="table-auto w-full rounded-md overflow-hidden">
//               <thead className="bg-green-900 text-white ">
//                 <tr>
//                   <th className="py-2">Site</th>
//                   <th className="py-2">Username</th>
//                   <th className="py-2">Password</th>
//                   <th className="py-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-green-100">
//                 {passwordArray.map((item, index) => {
//                   return (
//                     <tr key={index}>
//                       <td className="py-1 border border-white text-center ">
//                         <div className=" flex align-center justify-center ">
//                           <a href={item.site} target="_blank">
//                             {item.site}
//                           </a>
//                           <div className=" flex align-center justify-center ">
//                             <div
//                               className="loriconcopy size-7 cursor-pointer "
//                               onClick={() => {
//                                 copyText(item.site);
//                               }}
//                             >
//                               <div onClick={notify}>
//                                 <lord-icon
//                                   style={{
//                                     width: "25px",
//                                     height: "25px",
//                                     paddingTop: "3px",
//                                     paddingLeft: "2px",
//                                   }}
//                                   src="https://cdn.lordicon.com/iykgtsbt.json"
//                                   trigger="hover"
//                                 ></lord-icon>
//                                 <ToastContainer />
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className=" py-1 border border-white text-center">
//                         <div className=" flex align-center justify-center ">
//                           <span>{item.username}</span>
//                           <div
//                             className="loriconcopy size-7 cursor-pointer "
//                             onClick={() => {
//                               copyText(item.username);
//                             }}
//                           >
//                             <div onClick={notify}>
//                               <lord-icon
//                                 style={{
//                                   width: "25px",
//                                   height: "25px",
//                                   paddingTop: "3px",
//                                   paddingLeft: "2px",
//                                 }}
//                                 src="https://cdn.lordicon.com/iykgtsbt.json"
//                                 trigger="hover"
//                               ></lord-icon>
//                               <ToastContainer />
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="justify-center py-1 border border-white text-center">
//                         <div className=" flex align-center justify-center ">
//                           <span>{item.password}</span>
//                           <div
//                             className="loriconcopy size-7 cursor-pointer "
//                             onClick={() => {
//                               copyText(item.password);
//                             }}
//                           >
//                             <div onClick={notify}>
//                               <lord-icon
//                                 style={{
//                                   width: "25px",
//                                   height: "25px",
//                                   paddingTop: "3px",
//                                   paddingLeft: "2px",
//                                 }}
//                                 src="https://cdn.lordicon.com/iykgtsbt.json"
//                                 trigger="hover"
//                               ></lord-icon>
//                               {/* <ToastContainer /> */}
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="justify-center py-1 border border-white text-center">
//                         <span className="cursor-pointer mx-1" onClick={()=>editPassword(item.id)}>
//                           <lord-icon
//                             src="https://cdn.lordicon.com/gwlusjdu.json"
//                             trigger="hover"
//                             style={{width:"25px",height:"25px"}}> 
//                           </lord-icon>  
//                         </span>
//                         <span className="cursor-pointer mx-1" onClick={()=>deletePassword(item.id)}>
                       
//                         <lord-icon
//                             src="https://cdn.lordicon.com/skkahier.json"
//                             trigger="hover"
//                             style={{width:"25px",height:"25px"}}> 
//                           </lord-icon>  
                        
                      
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Manager;






import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css'; // Import the Toastify styles

const Manager = () => {
  // Function to show toast notifications
  const notify = (message) => toast(message);

  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  // Load passwords from localStorage on component mount
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  // Save a new password
  const savePassword = () => {
    if (!form.site.trim() || !form.username.trim() || !form.password.trim()) {
      notify("⚠️ All fields are required! Please fill in site, username, and password.");
      return;
    }

    const newPassword = { ...form, id: uuidv4() };
    setpasswordArray([...passwordArray, newPassword]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, newPassword]));
    setform({ site: "", username: "", password: "" });
    notify("Password Saved Successfully!");
  };

  // Delete a password
  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this Password?");
    if (c) {
      const updatedPasswords = passwordArray.filter(item => item.id !== id);
      setpasswordArray(updatedPasswords);
      localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
      notify("Password Deleted Successfully!");
    }
  };

  // Edit a password
  const editPassword = (id) => {
    const passwordToEdit = passwordArray.find(i => i.id === id);
    setform(passwordToEdit); // Set the selected password into the form
    setpasswordArray(passwordArray.filter(item => item.id !== id)); // Remove it from the list of passwords
    notify("Ready to Edit!");
  };

  // Handle form input changes
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  // Copy text to clipboard
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    notify("Text copied to Clipboard!");
  };

  return (
    <>
      {/* Global ToastContainer for all notifications */}
      <ToastContainer position="top-right" autoClose={2000} />
      
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-85 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="p-2 md:px-30 py-3  md:mycontainer min-h-[86.5vh]">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-green-500">&lt;</span>
          GV
          <span className="text-green-500">PassOp /&gt;</span>
        </h1>
        <p className="text-center text-green-500 text-lg">
          Your own Password Manager
        </p>

        <div className="text-black flex flex-col p-4 text-black gap-5 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full placeholder:text-sm px-3"
            type="text"
            name="site"
            id="site"
          />
          <div className="flex flex-col md:flex-row w-full gap-5 justify-between">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full placeholder:text-sm px-3"
              type="text"
              name="username"
              id="username"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full placeholder:text-sm px-3"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </div>

          <button
            onClick={savePassword}
            className="font-bold flex justify-center items-center text-black bg-green-400 hover:bg-green-300 gap-2 py-0.5 px-4 w-fit rounded-full border border-green-900"
          >
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-2">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-900 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-1 border border-white text-center">
                        <div className="flex align-center justify-center">
                          <a href={item.site} target="_blank" rel="noopener noreferrer">
                            {item.site}
                          </a>
                          <div className="flex align-center justify-center">
                            <div
                              className="loriconcopy size-7 cursor-pointer"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            >
                              <lord-icon
                                style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "2px" }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-1 border border-white text-center">
                        <div className="flex align-center justify-center">
                          <span>{item.username}</span>
                          <div
                            className="loriconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <lord-icon
                              style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "2px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="justify-center py-1 border border-white text-center">
                        <div className="flex align-center justify-center">
                          <span>{item.password}</span>
                          <div
                            className="loriconcopy size-7 cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <lord-icon
                              style={{ width: "25px", height: "25px", paddingTop: "3px", paddingLeft: "2px" }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="justify-center py-1 border border-white text-center">
                        <span className="cursor-pointer mx-1" onClick={() => editPassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                        <span className="cursor-pointer mx-1" onClick={() => deletePassword(item.id)}>
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

