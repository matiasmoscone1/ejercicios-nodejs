
const Profile = () => {


    return(<>
        <div className="profile-container">
            <Link to={"/update-user"}>
                <button>Edit profile</button>
            </Link>
        </div>
    </>)

}


export default Profile;