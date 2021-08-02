import { Fragment } from 'react'
import Header from './Header'

function Layout(props:any) {
    return(
        <Fragment>
            <Header />
            { props.children }
        </Fragment>
    )
}

export default Layout