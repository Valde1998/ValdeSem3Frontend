import { Outlet } from 'react-router-dom';
function About(){
    return(

        <>
            <h1>About</h1>
            <Outlet />
        </>
    )
}

export default About;