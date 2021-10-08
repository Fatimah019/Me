import React, {useState} from "react";
import "./index.css"

const BookDesign = ({
    left_book_content, 
    left_image, 
    other_left_page_content, 
    right_book_content, 
    right_images,
    other_right_page_content,
    open_page,
    handlePageChange
})=>{
    // const [animatedItems, setAnimatedItems] = useState(false);

    // handlePageChange && setAnimatedItems(true);
    return (
        <div className="book_container">
            <div className="left_page">
                {
                    left_book_content && 
                    <div>
                        <img src={left_image && left_image} alt="myimage" className="left_page_image"/>
                        <div>{other_left_page_content && other_left_page_content}</div>
                    </div>
                }
            </div>
            <div className="right_page">
            {/* {animatedItems} */}
                {
                    right_book_content && 
                    <div>
                        {
                            <div className="right_page_image_container">
                                {    
                                    right_images?.map((images, index)=>{
                                        return (
                                            <img src={images} alt="me" className="right_page_image" key={index}/>
                                        )
                                })
                                }
                            </div>
                        }
                        <div>{other_right_page_content && other_right_page_content}</div>
                    </div>
                }
                <div className="door" onClick={handlePageChange}>{open_page && open_page}</div>
            </div>
        </div>
    )
}

export default BookDesign