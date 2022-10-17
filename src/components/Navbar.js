import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    // const changeColor =(event)=>{
    //     let c=event.target.value;
    //     props.changeColor(c);
    // }
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/TextForm">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    {/* checkbox */}
                    {/* <div className={`d-flex text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                        <label htmlFor="favcolor">Color picker:</label>
                        <input type="color" id="favcolor" name="favcolor" onChange={changeColor}value="#444444" className='mx-2'/> */}
                            <div className={`form-check mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={()=>props.changeColor('#08510f')} type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                green
                            </label>
                        </div>
                        <div className={`form-check mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="radio" onClick={()=>props.changeColor('#6b061d')} name="flexRadioDefault" id="flexRadioDefault2"  />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                red
                            </label>
                        </div>
                        <div className={`form-check mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={()=>props.changeColor('#070958')} type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                blue
                            </label>
                        </div>
                        <div className={`form-check mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={()=>props.changeColor('#77790b')} type="radio" name="flexRadioDefault" id="flexRadioDefault4"  />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                yellow
                            </label>
                    </div>
                {/* </div> */}
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">enable dark mode</label>
                </div>
            </div>
        </div>
        </nav >
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: 'set title here',
    aboutText: 'set about here'
}