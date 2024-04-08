import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import Footer from "./Footer";

function Home() {
    return (
        <>
            <div id="wrapper">
                <Sidebar></Sidebar>
                <div id="content-wrapper" className="d-flex flex-column">
                    <MainContent></MainContent>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}
export default Home;
