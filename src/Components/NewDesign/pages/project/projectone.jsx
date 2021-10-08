import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router";
import BookDesign from "../../ui/Book";
import { data } from "./data";
import "./index.css"

const ProjectOneBookDesign = ()=>{
    const [projectIndex, setProjectIndex] = useState(0)
    const [animatedItems, setAnimatedItems] = useState(null);
    const history = useHistory()
    const match = useRouteMatch()
    const project = data[projectIndex]
    const activeTab = match.url.slice(-1)

    const handleProjectChange = ()=>{
        history.push(`${match.url.slice(0, -2)}/${Number(activeTab) + 1}`)
        if (data.length === projectIndex+1) history.push("/home")
        setProjectIndex(projectIndex + 1)
    }

    const goBack = ()=>{
        history.push(`${match.url.slice(0, -2)}/${Number(activeTab) - 1}`)
        if (projectIndex === 0) history.push("/home")
        setProjectIndex(projectIndex-1)
    }

    return (
        <div className="project_container"> 
            <div className="book_home">
                <p onClick={()=>goBack()}>back</p>              
                <BookDesign 
                    left_book_content
                    right_book_content
                    left_image = {project?.main_image}
                    other_left_page_content = {
                        <>
                            <p>{project?.name}</p>
                            <p>{project?.description}</p>
                            <p>{project?.toolsused}</p>
                        </>
                    }
                    right_images = {project?.images}
                    other_right_page_content ={
                        <>
                            <p>{project?.projectStory}</p>
                            <p>{project?.linktoproject}</p>
                         </> 
                    }
                    open_page={`Proj ${projectIndex+1}`}
                    handlePageChange={()=> handleProjectChange()}
                />
            </div>
        </div>
    )
}

export default ProjectOneBookDesign