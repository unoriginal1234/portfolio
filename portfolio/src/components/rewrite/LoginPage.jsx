import { useState } from 'react';


const LoginPage = ({onLogin}) => {
    const thepassword = import.meta.env.VITE_REWRITE_PASSWORD

    const [formData, setFormData] = useState({
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log(formData.password)
        if (formData.password !== thepassword) {
            alert('Incorrect password. Please try again.');
            return;
        }
        // Proceed with login
        onLogin(true);
        // Redirect or perform other actions
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <br></br>
                    <button type="submit" className="button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;