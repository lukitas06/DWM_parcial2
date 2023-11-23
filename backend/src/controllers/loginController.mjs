
import loginService from "../services/loginService.mjs";

const login = (req, res) => {
    const { username, password } = req.body;
    loginService.login(username, password).then((token) => {
        if (!token) {
            res.status(401).json({ message: "Incorrect user or password " });
            return;
        }
        res.cookie('token', token,
            { httpOnly: false });
        res.status(200).json({ message: 'Login successful', token: token });
        return;
    });

}

export default {
    login: login
}
