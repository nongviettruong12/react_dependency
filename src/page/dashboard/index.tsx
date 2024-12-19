import React from 'react'
import './styles.scss'
import NavLogo from '../../assets/svg/nav-logo_3.svg';
import { RxAvatar } from 'react-icons/rx'

type Props = {}

const ChatBotCustomerDashBoard = (props: Props) => {
  return (
   <>
   <div className='chatBotCustomerDashBoard'>
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
            <p className='text-chat-bot'>Xin chào! Tôi là trợ lý ảo của cửa hàng ông Năm, sẵn sàng hỗ trợ bạn 24/7.
 Bạn có thể hỏi tôi về sản phẩm, chương trình khuyến mãi, đơn hàng, hoặc bất kỳ thắc mắc nào khác. 
Hãy bắt đầu bằng cách chọn vào Bắt đầu cuộc trò chuyện bạn nhé!"</p>
<span className='spacing-btn-start-chat'>
  <button className='btn-start-chat-bot'>Bắt đầu cuộc trò chuyện</button>
  </span>
          </div>
          </div>
          
          <div className='spacing-box-chat-right'>
          <div className='card-info'>
            <div className='navbar-box-chat-right'></div>
          </div>
        </div>
        </div>
      </section>
      </div>
   </>
  )
}

export default ChatBotCustomerDashBoard