import React from 'react'
import './styles.scss'
import NavLogo from '../../assets/svg/nav-logo_3.svg';
import { RxAvatar } from 'react-icons/rx'

type Props = {}

const ChatBotCustomer = (props: Props) => {
  return (
   <>
   <div className='chat-bot-customer'>
      <header> 
        <div className='flex-navBar'>
        <img src={NavLogo} alt="" />
        <div className='text-logo'>MY SHOP</div>
        </div>
      </header>
      <section>
        <div className='flex-card'>
          <div className='spacing-card-chat-bot'>
            <div className='rounded-avatar'>
          <RxAvatar  className='size-avatar-chat-bot'/>
          </div>
          <div className='border-chat-bot'>
            <p className='text-chat-bot'>Chào mừng bạn đến với tạp hóa ông Năm <span>10:25</span></p>
          </div>
          </div>
          <div className='spacing-box-chat-right'>
          <div className='card-info'>
            <div>
              <p className='title-right-box-chat'>Thông tin khách hàng</p>
            </div>
            <div className='navbar-box-chat-right'>
              <div>Họ và tên: Nguyễn Đình Đức Anh</div>
              <div>Số điện thoại: 0123456789</div>
              <div>Email: Chưa có thông tin</div>
              <div>Ngày sinh: Chưa có thông tin</div>
              <div>Cấp thành viên: Normal</div>
            </div>
          </div>
        </div>
        
        </div>
      </section>
      </div>
   </>
  )
}

export default ChatBotCustomer