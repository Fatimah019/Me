import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import Loader from "../../../Constant/Loader/loader";
import BookDesign from "../../ui/Book";
import "./index.css"

const HomeBookDesign = ()=>{
    const [ visibleLoader, setVisibleLoader ] = useState(true)
    const history = useHistory()
    
    useEffect(()=>{
        setTimeout(()=>{
            setVisibleLoader(false)
        }, 3000)
    }, [])
    
    return (
        <div className="home_container">
            {
                visibleLoader ? <Loader /> : 
                <div className="book_home">
                    <BookDesign 
                        left_book_content
                        right_book_content
                        left_image = "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg"
                        other_left_page_content = {
                            <>
                                <p>Fatimah Davies</p>
                                <p>This is who i am</p>
                                <p>skills</p>
                            </>
                        }
                        right_images = {[
                            "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
                            "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
                            "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
                            "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
                            "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
                            "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
                            "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg",
                            "https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg"
                        ]}
                        other_right_page_content ={
                            <>
                                <p>Some of the projects i have worked on</p>
                                <p>Have a look at them one after the othr</p>
                                <p>and if you find them attractive ?</p>
                                <p>Contact me on ....</p>
                            </> 
                        }
                        open_page={"Works"}
                        handlePageChange={()=>history.push("/proj")}
                    />
                </div>
            }
        </div>
    )
}

export default HomeBookDesign