import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContainer from './auth/AuthContainer';
import UserInfo from './auth/UserInfo';
import AuthHelper from './auth/AuthHelper';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        shouldRerenderHeader: state.shouldRerenderHeader
    }
}

class FixedNavigation extends Component {
    constructor(params) {
        super(params);

        this.state = {
            currentUser: {},
            confirmed: false,
            logged: false
        }
    }

    AuthHelper = new AuthHelper();

    componentDidMount() {
        if (this.AuthHelper.loggedIn()) {
            var confirm = this.AuthHelper.getConfirm();

            if (confirm) {
                this.setState({
                    currentUser: confirm,
                    confirmed: true
                })
            }
        }

        console.log(this.state.confirmed)
    }

    handleUserInfoChanges = (flag) => {
        if (this.AuthHelper.loggedIn()) {
            var confirm = this.AuthHelper.getConfirm();

            if (confirm) {
                this.setState({
                    currentUser: confirm,
                    confirmed: true
                })
            }
        }

        this.setState({
            confirmed: flag
        });
    }

    handleAuthContainerChanges = (flag) => {
        this.setState({
            confirmed: flag
        });
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to={'/'} className="navbar-brand">Поликлиника</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {this.props.shouldRerenderHeader
                        ? <div>


                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/ad'} className="btn btn-success btn-sm">Объявления</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/tabs'} className="btn btn-success btn-sm">Вкладки</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/news'} className="btn btn-success btn-sm">Новости</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/specs'} className="btn btn-success btn-sm">Специялизации</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/doctors'} className="btn btn-success btn-sm">Докторы</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/cabinets'} className="btn btn-success btn-sm">Кабинеты</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/shifts'} className="btn btn-success btn-sm">Смены</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/pages'} className="btn btn-success btn-sm">Страницы</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/patients'} className="btn btn-success btn-sm">Пациенты</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/timetables'} className="btn btn-success btn-sm">Расписание</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/vouchers'} className="btn btn-success btn-sm">Талоны</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/extracts'} className="btn btn-success btn-sm">Выписки</Link>
                                </li>
                            </ul>
                            <UserInfo login = {this.state.currentUser.login} handleUserInfoChanges = {this.handleUserInfoChanges}/>
                        </div>
                        : <AuthContainer handleAuthContainerChanges = {this.handleAuthContainerChanges}/>}
                </div>
            </nav>
        );
    }
}

export default connect(mapStateToProps)(FixedNavigation);
