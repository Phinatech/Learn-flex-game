import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Home/Main";
import Level18 from "../page/Home/Level18"
import Level2 from "../page/Home/Level2";
import Level3 from "../page/Home/Level3";
import Level4 from "../page/Home/Level4";
import Levels9 from "../page/Home/Levels9";
import Level10 from "../page/Home/Level10";
import Level5 from "../page/Home/Level5";
import Level19 from "../page/Home/Level19";
import Level20 from "../page/Home/Level20";
import Level21 from "../page/Home/Level21";
import Level22 from "../page/Home/Level22";
import Level23 from "../page/Home/Level23";
import Level24 from "../page/Home/Level24";
import Level11 from "../page/Home/Level11";
import Level12 from "../page/Home/Level12";
import Level13 from "../page/Home/Level13";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path:"/level18",
    element: <Level18 />,
  },
  {
    path: "/2",
    element: <Level2 />
  },
  {
    path: "/3",
    element: <Level3 />,
  },
  {
    path: "/4",
    element: <Level4 />,
  },
  {
    path:"/level5",
    element: <Level5 />,
  },
  {
    path: "/9",
    element: <Levels9 />,
  },
  {
    path: "/level19",
    element: <Level19 />,
  },
  {
    path: "/level20",
    element: <Level20 />,
  },
  {
    path: "/level21",
    element: <Level21 />,
  },
  {
    path: "/level22",
    element: <Level22 />,
  },
  {
    path: "/level23",
    element: <Level23 />,
  },
  {
    path: "/level24",
    element: <Level24 />,
  },
{
  path:"/10",
  element:<Level10/>
},
{
  path:"/11",
  element:<Level11/>
},
{
  path:"/12",
  element:<Level12/>
},
{
  path:"/13",
  element:<Level13/>
}
]);
