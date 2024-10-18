

const loginController = {}


loginController.login = (req, res) => {
    const html = `<html>
        <body>
            <form action="users/login" method="post">
                <label>Username</label>
                <input type="text" name="username" required/>
                <label>Password</label>
                <input type="password" name="password" required/>
                <input type="submit" value="Log in"/>
            </form>
        </body>
    </html>`;
    res.status(200).send(html);
}


loginController.validLogin = (req, res) => {

}



module.exports = loginController;