import React from 'react'
import { Link } from 'react-router-dom'
export default class PersonalArea  extends React.Component {
    state = {
        name: null
    }
    componentDidMount() {
        window.gapi.load('auth2', function() {
            // библиотека загрузилась
            window.gapi.auth2.init({
                client_id: '258267074582-6vomvbbg2joem1up864rco5bh4skk5fa.apps.googleusercontent.com'
            }).then(() => console.log('init OK'), () => console.log('init ERR'))
        });
    }
    singIn = () => {
        const _authOk = (user) => {
            this.setState ({
                name:user.getBasicProfile().getName()
            })           
        }
        const _authErr = () => {
            console.log('Auth ERR')
        }
        const GoogleAuth = window.gapi.auth2.getAuthInstance()
        GoogleAuth.signIn({
            scope: 'profile email'
        }).then(_authOk, _authErr)
        
    }
    
    singOut = () => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance()
        GoogleAuth.signOut().then(
            () => {
            this.setState ({
                name:null
            })
        },
            () => console.log('signOur ERR'))
    }
    render(){
        const { name } = this.state
        localStorage.setItem('name', name)
        return(
            <div>
            {!name && <div className = 'personal_area' onClick = { this.singIn }>
                <i className="fa fa-user fa-2x" aria-hidden="true"></i>
              <p >Войти</p>
          </div>}
          {name && <Link to = '/profile'><div className = 'personal_area'>
            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
              <p >{name}</p>
          </div></Link>}
             </div>
        )
    }
}
    