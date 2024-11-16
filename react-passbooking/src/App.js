import React, {useState} from 'react';
//import FacilitiesList from './component/facilities/facilitiesList';
import NavTabs from "./component/NavTabs";

function App(){
  const [refresh, setRefresh] = useState(false);  
return (
  <div>
    <NavTabs/>
    {/* <FacilitiesList key={refresh}/> */}
  </div>
);
};

export default App;
