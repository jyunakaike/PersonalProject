import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/TaskList.scss'
// import Coin from '../assets/logos/coin.png'

const TaskList = () => {

    // let navigate = useNavigate();

    // const navigateClick = () => {
    //     navigate("/Finance")
    // }
    
    return (
        <section className="main-container">
            <div className='taskList'>
                <Link to="/Finance">
                    <div className='task'>
                        {/* <img src={Coin} alt="Coin" className='Task__Img'/> */}
                        <h1>Finance</h1>
                    </div>
                </Link>

                <Link to="/todo" >
                    <div className='task'>
                        {/* <img src="" alt="" /> */}
                        <h1>To Do</h1>
                    </div>
                </Link>

                <div className='task'>
                    {/* <img src="" alt="" /> */}
                    <h1>Products</h1>
                </div>
                <div className='task'>
                    {/* <img src="" alt="" /> */}
                    <h1>Goals</h1>
                </div>
                <div className='task'>
                    {/* <img src="" alt="" /> */}

                    <h1>suplies</h1>
                </div>

                <div className='task'>
                    {/* <img src="" alt="" /> */}

                    <h1>calendar</h1>
                </div>

            </div>
        </section>

    )
}

export default TaskList;

