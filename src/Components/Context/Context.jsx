// import { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import AskQuestion from "../Components/Pages/AskQuestion/AskQuestion";
// import SingleQuestion from "../Components/Pages/SingleQuestion/SingleQuestion";
// //import axios from "../AxiosConfig/AxiosConfig";

// import UserHome from "../Components/Pages/UserHome/UserHome";
// import Home from "../Components/Home/Home";
// import NotFound from "../Components/NotFound/NotFound";

// import { state } from "../Components/Section/StateValue";
// import HowItWorks from "../Components/HowItWorks/HowItWorks";
// import Sharedpage from "../Components/SharedPage/SharedPage";
// // export const StateContext = createContext();

// export const StateProvider = () => {
//   // const [username, setUserName] = useState(null); // Set initial state here
//   // // const [shouldSetUsername, setShouldSetUsername] = useState(false);
//   // // const [fetchedData, setFetchedData] = useState(""); // Declare fetchedData state

//   // const [isLoading, setIsLoading] = useState(true);

//   // console.log("Username before rendering:", username); // Add this line

//   // useEffect(() => {
//   //     const fetchData = async () => {
//   //         try {
//   //             const token = localStorage.getItem("token");

//   //             if (token) {
//   //                 const { data } = await axios.get("/users/check", {
//   //                     headers: {
//   //                         Authorization: "Bearer " + token,
//   //                     },
//   //                 });

//   //                 if (
//   //                     data.msg === "token not provide" ||
//   //                     data.msg === "Authentication Invalid"
//   //                 ) {
//   //                     return;
//   //                     // Handle authentication failure
//   //                 } else {
//   //                     setUserName(data.username);
//   //                     console.log("Username set:", data.username);
//   //                 }
//   //             }
//   //         } catch (error) {
//   //             // Handle other errors if needed
//   //         } finally {
//   //             setIsLoading(false);
//   //         }
//   //     };

//   //     fetchData();
//   // }, []);

//   const [username, setUserName] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const fetchData = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       if (token) {
//         const { data } = await axios.get("/users/check", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });

//         if (
//           data.msg === "token not provide" ||
//           data.msg === "Authentication Invalid"
//         ) {
//           // Handle authentication failure, e.g., redirect to login
//           localStorage.removeItem("token"); // Clear token from local storage
//           setUserName(null); // Clear username from state
//         } else {
//           setUserName(data.username);
//           console.log("Username set:", data.username);
//         }
//       } else {
//         // Handle the case where there's no token (e.g., user not logged in)
//         setUserName(null);
//       }
//     } catch (error) {
//       // Handle other errors if needed
//       console.error("Error fetching username:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <state.Provider value={{ fetchData, username, setUserName }}>
//       <Routes>
//         <Route path="/" element={<Sharedpage />}>
//           <Route index element={<Home />} />
//           <Route path="home" element={<UserHome />} />
//           <Route path="how-it-works" element={<HowItWorks />} />
//           <Route path="answer/:questionId" element={<SingleQuestion />} />
//           <Route path="ask" element={<AskQuestion />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </state.Provider>
//   );
// };
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios"; // Make sure to import axios

import { state } from "../Section/StateValue";
import HowItWorks from "../HowItWorks/HowItWorks";
import Sharedpage from "../SharedPage";
import UserHome from "../Pages/UserHome/UserHome";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import AskQuestion from "../Pages/AskQuestion/AskQuestion";
import SingleQuestion from "../Pages/SingleQuestion/SingleQuestion";

export const StateProvider = () => {
  const [username, setUserName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const { data } = await axios.get("/users/check", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        if (
          data.msg === "token not provided" ||
          data.msg === "Authentication Invalid"
        ) {
          // Handle authentication failure, e.g., redirect to login
          localStorage.removeItem("token"); // Clear token from local storage
          setUserName(null); // Clear username from state
        } else {
          setUserName(data.username);
          console.log("Username set:", data.username);
        }
      } else {
        // Handle the case where there's no token (e.g., user not logged in)
        setUserName(null);
      }
    } catch (error) {
      // Handle other errors if needed
      console.error("Error fetching username:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <state.Provider value={{ fetchData, username, setUserName }}>
        <Routes>
          <Route path="/" element={<Sharedpage />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<UserHome />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="answer/:questionId" element={<SingleQuestion />} />
            <Route path="ask" element={<AskQuestion />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    </state.Provider>
  );
};
