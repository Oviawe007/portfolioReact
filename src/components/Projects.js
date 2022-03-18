import React from "react"

export default function Projects(){
    return(
        <section>
            <div className="feature-header">
                <h1>Feature Projects</h1> 
            </div>
            <div className="projects">
                <div className="proj-card">
                    <div>
                        <img src="./images/profile.jpeg" alt="" />
                    </div>
                    <div>
                        <h2><a href="/">Project Title</a></h2>
                        <p>Lorem ipsum</p>
                        <h3><a href="/">Technologies:</a> Lorem Ipsum</h3>
                    </div>

                    <div className="proj-links">
                        <a href="/">View Online</a>
                        <a href="/">Source</a>
                        <a href="/">Read More</a>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}