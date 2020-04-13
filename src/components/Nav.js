import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: 'black'}}>
                <a className="navbar-brand" href="https://bongdaplus.vn/">MyNote</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/note-list">Xem danh sach note</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/dropdown" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="/action1">Action 1</a>
                        <a className="dropdown-item" href="/action2">Action 2</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        );
    }
}

export default Nav;