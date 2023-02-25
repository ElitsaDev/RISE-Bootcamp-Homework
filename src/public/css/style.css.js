export default `
@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;

}

body {
    width: 100%;
    height: 100vh;
    background-image: url(https://www.logiag.com/wp-content/uploads/2022/05/agronomie_imagerie-drone_1-1024x683.jpg);
    background-position: 20% 10%;
    background-size: cover;
    color: #fff;
}

nav {
    width: 100%;
    padding: 2px 0;
    display: flex;
    align-items: center;
}

nav ul {
    flex: 1;
    background: gray:
    
}

nav ul li {
    display: inline-block;
    margin: 10px 20px;
    padding: 0 1%;
}

nav ul li a {
    color: black;
    background: #ff960b;
    padding: 10px;
    text-decoration: none;
}

.navigation {
    background: grey;
    padding: 10px;
}

.title {
    padding: 0 7%;
}

.content {
    margin-top: 8%;
}

.content h1 {
    font-size: 60px;
    margin-bottom: 15px;
    color: #ff960b;
}

#create-container {
    color: white;
    width: 360px;
    height: auto;
    margin: auto;
    background-color: rgba(70, 20, 158, 0.504);
    border: 2px solid white;
    border-radius: 20px;
}

#create-container h1 {
    text-align: center;
    padding-top: 15px;
    color: #f5ebdd;
}

#create-container h2 {
    margin-top: 10px;
    padding-bottom: 15px;
    text-align: center;
    color: #ff960b;
}

#create-container form {
    width: 300px;
    margin-left: 20px;
}

#create-container form label {
    display: flex;
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 18px;
}

#create-container form input {
    width: 320px;
    height: 30px;
    padding-left: 7px;
    border: none;
    border: 1px solid gray;
    border-radius: 8px;
    outline: none;
    background-color: whitesmoke;
}

#create-container input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

#create-container input[type=number] {
    -moz-appearance: textfield;
}

#create-container form textarea {
    width: 320px;
    height: 80px;
    padding-left: 7px;
    border: none;
    border: 1px solid gray;
    border-radius: 8px;
    outline: none;
    background-color: whitesmoke;
    resize: none;
}

#create-container select {
    outline: 0;
    border: 0;
    box-shadow: none;
    flex: 1;
    padding: 0 1em;
    cursor: pointer;
    height: 20px;
    font-weight: bold;
    border-radius: 20px;
    width: 320px;
    color: darkblue;
    background-color: whitesmoke;
}

#create-container input[type="submit"] {
    width: 320px;
    height: 35px;
    margin-top: 20px;
    border: black;
    background-color: #ff960b;
    color: white;
    font-size: 15px;
    margin-bottom: 30px;
}

`;