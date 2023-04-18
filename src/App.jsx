import React, { useContext, useEffect, useState } from 'react';
import Store from './store';
import Loading from './Loading';
import Bar from './statusBar';
import Tabs from './Tabs';
function App(){
const [loading, setLoading] = useState(true);
useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);    


  if(loading){
    return ( <Loading/> )
  }else{

    return (
      <>
          <Bar />
          <Tabs />
          </>
    )
  }
}

export default App;
