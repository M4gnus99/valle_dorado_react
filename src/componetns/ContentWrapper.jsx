import MainContent from "./MainContent"
function ContentWrapper(){
    return(
        <>
        <div id="content-wrapper" className="d-flex flex-column">
            <MainContent></MainContent>
        </div>
        </>
    )
}
export default ContentWrapper