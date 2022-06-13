import React from 'react';
import * as AiICons from "react-icons/ai";
import * as IoICons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home', 
        path: '/home',
        icon: <AiICons.AiFillHome color='white' />,
        cName: 'navText'
    },
    {
        title: 'Notificações', 
        path: '/',
        icon: <AiICons.AiFillBell color='white' />,
        cName: 'navText'
    },
    {
        title: 'Perfil', 
        path: '/',
        icon: <IoICons.IoMdPerson color='white' />,
        cName: 'navText'
    },
    {
        title: 'Market Place', 
        path: '/',
        icon: <AiICons.AiFillShopping color='white' />,
        cName: 'navText'
    },
]