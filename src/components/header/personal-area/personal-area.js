import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class PersonalArea  extends React.Component {
    state = {
        name: null,
        user: 'user_false',
        symbol: <span>&#x2228;</span>,
        imgUrl: null
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
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signIn().then(googleUser => {
          const profile = googleUser.getBasicProfile()

          this.setState({
            name: profile.getName(),
            imgUrl: profile.getImageUrl(),
          })
        })
      }

    singOut = () => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance()
        GoogleAuth.signOut().then(
            () => {
                this.setState({
                    name: null,
                })
        },
            () => console.log('signOut ERR'))
    }
    handlClickUser = () => {
        const symbol1 = <span>&#x2228;</span> 
        const symbol2 = <span>&#x2227;</span> 
         this.setState({
             user: this.state.user === 'user_false' ? 'user_true' : 'user_false' ,
             symbol: this.state.user === 'user_false' ? symbol2 : symbol1
         })
    }
    
    render(){
        const { name } = this.state
        localStorage.setItem('name', name)
        return(
            <div>
            {!name && <div className = 'personal_area' onClick = { this.singIn }>
                <div className = 'google_icon'></div>
                <p >Войти</p>
          </div>}
          {name && <div className = 'user_area' onClick = {this.handlClickUser}>
              <div className = 'user_menu'>

                  <img src = {this.state.imgUrl} width = '100%' alt = 'Fhoto'/></div>
              <div className = {this.state.user}>
                <div onClick = {this.singOut}><div className = 'logout' ></div >выйти</div>
                <div><Link to = '/basket'><div className = 'product_in_basket'></div>{this.props.lengthBasket} товар в карзине</Link></div>
                <div><Link to = '/favorites'><div className = 'product_in_favorites'></div> избранные</Link></div>
              </div>
          </div>}
             </div>
        )
    }
}
const mapStateToProps = ({lengthBasket}) => {
    return{
        lengthBasket
    }
        
}
export default connect (mapStateToProps)(PersonalArea)