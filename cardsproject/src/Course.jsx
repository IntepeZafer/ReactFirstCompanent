/* eslint-disable react/prop-types */
function Course({title , desctription}) {
    return ( 
        <div className="container">
            <div className="content">
                <h1>{title}</h1>
                <p>{desctription}</p>
            </div>
        </div>
     );
}

export default Course;