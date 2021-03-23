import React from 'react';
import Test from './Test';
const onClick=()=>{
    alert("salut");
}
const Header = () => {

    return ( <div>
            <h1>c est h1</h1>

            <Test onclick={onClick}/>
        </div>
    )

}
export default Header