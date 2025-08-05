import { useState } from 'react';
let thepassword = import.meta.env.REWRITE_PASSWORD

const LoginPage = () => {
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
        if (formData.password !== thepassword) {
            alert('Incorrect password. Please try again.');
            return;
        }
        // Proceed with login
        alert('Login successful!');
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