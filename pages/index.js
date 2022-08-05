import {Fragment, useEffect} from 'react'
import Head from 'next/head'
import SwiperSlider from '../components/Home/SwiperSlider'
import Description from '../components/Home/Description'
import React from 'react'
import MembersList from '../components/Home/MembersList'
import { useDispatch } from 'react-redux'
import { navbarActions } from '../store/navbarSlice'




const images = [
  {id: '1', src:'/concert1.jpg', title:"concert"},
  {id: '2', src:'/concert2.jpg', title:"concert" },
  {id: '3', src:'/concert3.jpg', title:"concert"},
]

const socials = [
  {id: '1', 
  title: 'Канал группы в YouTube', 
  pic: <i className="fa fa-youtube" aria-hidden="true"></i>, href:'https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg',
  color: 'tomato'
  },

  {id: '2', 
  title: 'Сообщество группы в VK', 
  pic: <i className="fa fa-vk" aria-hidden="true"></i>, href: 'https://vk.com/kkurtki',
  color: 'steelblue'
  },
  // {id: '3', 
  // title: 'Сообщество группы в Instagram', 
  // pic: <i className="fa fa-instagram" aria-hidden="true"></i>, href: 'https://www.instagram.com/music_jackets/',
  // color: 'black'
  // }
]

const members = [
  {id: '1', title: 'Boris Britva - вокал, гитара', src: '/boris.jpg', direction: 'row-reverse'},
  {id: '2', title: 'Боярский Максим - ударные', src: '/maxim.jpg', direction: 'row'},
  {id: '3', title: 'Музыченко Дмитрий - бас', src: '/dima.jpg', direction: 'row-reverse'},
  // {id: '4', title: 'Андрей Лазук - клавишные', src: '/andrew.jpg', direction: 'row'}
]




const HomePage = () => {

   const dispatch = useDispatch();

  useEffect(() => {
      dispatch(navbarActions.changeNavbarColor())

      return () => dispatch(navbarActions.changeNavbarColor())
  }, [])


  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Head>
      <SwiperSlider images={images}/>
      <Description socials={socials}/>
      <MembersList members={members}/>
    </Fragment>
  )
}

export default HomePage
