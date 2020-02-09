import React from 'react';
import Input from './Input/Input';
import Checkbox from './Checkbox/Checkbox';

const Contacts = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col contacts-header"><h2>Свяжитесь с нами</h2></div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <Input s={'small'} text={'Имя'} />
                    <Input s={'small'} text={'E-mail'} />
                </div>
                <div className="col-sm">
                    <Input s={'small'} text={'Телефон'} />
                    <Input s={'small'} text={'Дата записи'} />
                </div>
                <div className="col-sm ">
                    <Input s={'big'} text={'Комментарий (не обязательно)'} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm"><Checkbox /></div>
            </div>
            <div className="row">
                <div className="col-sm contacts"><button className="btn-1">Отправить заявку</button></div>
            </div>
        </div>
    )
}

export default Contacts;