import { LoginContext } from "../context/LoginContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {

    const { login, changeLogged } = useContext(LoginContext);

    const fetchLogOut = async () => {
        try{
            const response = await fetch("http://localhost:3000/api/logout", {
                method: "POST",
                credentials: "include"
                });
            if(response.ok){
                changeLogged();
            }            
        }catch(err){
            console.log("Hubo un error al desloguear el usuario...");
        }
    }

    return(<>
        <div className="dashboard-profile">
            <div>
                <p>{login.username}</p>
                <Link to={"/profile"}>
                    <button>Your profile</button>
                </Link>
            </div>
            <button className="btn-logout" onClick={() => fetchLogOut()}>Log Out</button>
        </div>

        <div className="dashboard-container">
            <section className="section-container">
                <h3>Noticias</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias voluptas facere, tenetur doloremque ipsum et optio accusamus id ullam quidem nam sequi porro, sunt omnis, temporibus laborum maxime blanditiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias voluptas facere, tenetur doloremque ipsum et optio accusamus id ullam quidem nam sequi porro, sunt omnis, temporibus laborum maxime blanditiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias voluptas facere, tenetur doloremque ipsum et optio accusamus id ullam quidem nam sequi porro, sunt omnis, temporibus laborum maxime blanditiis?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate alias voluptas facere, tenetur doloremque ipsum et optio accusamus id ullam quidem nam sequi porro, sunt omnis, temporibus laborum maxime blanditiis?</p>
            </section>
        </div>
    </>)


}


export default Dashboard;
