import React, { useEffect, useState } from "react";

export default function useNetwork() {

    let [isOnline , setIsOnline] = useState(true);

    useEffect(()=>{
        detectOnline();
    },[])

    function detectOnline()
    {
        window.addEventListener('online' , function(){
            setIsOnline(true);
        });
    
        window.addEventListener('online' , function(){
            setIsOnline(false);
        });
    }

    return <>
        {isOnline?<div className="network">you are online</div>:<div className="network"> <i className="fas fa-wifi"></i> you are offline</div>}
    </>
}



