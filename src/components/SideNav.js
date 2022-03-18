import React from "react"
import { AiOutlineHome , AiOutlineAppstore , AiOutlineNotification} from "react-icons/ai"
import { BsFillPersonFill , BsFileEarmarkMedical } from "react-icons/bs"




export default function SideNav(){
    return(
        <aside className="sideBar">
            <div className="sideBar--item">
                <div className="sideBar--top">
                    <div className="profile-img">
                        <img src="./images/profile_1.jpeg" className="sideBar--img"alt="efosa"  />
                    </div>
                    <h1 className="title">Efosa Oviawe</h1>
                    <h2 className="subtitle">Front-End Developer</h2>
                </div>
                <nav>
                    
                    <a href="/"><AiOutlineHome/>Home</a>
                    <a href="/"><BsFillPersonFill/>About</a>
                    <a href="/"><AiOutlineAppstore />Project</a>
                    <a href="/"><AiOutlineNotification />Blog</a>
                    <a href="/"> <BsFileEarmarkMedical/>Resume</a>

                </nav>


            </div>
            

        </aside>
    )
}