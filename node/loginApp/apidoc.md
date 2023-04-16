## Get All Users

(GET) http://localhost:4000/api/auth/users

## Register

(POST) http://localhost:4000/api/auth/register
(body)
{
"name":"jack",
"email":"jack@gmail.com",
"password":"123456",
"phone":6543785446,
"role":"user"
}

## Login

(POST) http://localhost:4000/api/auth/login
(body) => { "email":"john@gmail.com", "password":"123456"}
(response) => {"auth": true,"token": "eyJhb"}

## UserInfo

(GET) http://localhost:4000/api/auth/userInfo
(Header) => {'x-access-token': 'token value from login }
