import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import mainlogo from '../../assets/images/mainlogo.png'

const SideBar = ({ sideBar, setSideBar })=>{
    const handleSideBar =()=>{
        setSideBar(!sideBar)
    }
    return(
        <div className={
            !sideBar
            ? "SideBar"
            : "SideBar SideBarActive"
        }>
            <div className='btnWrap'>
                <button className='sideCloseBtn' onClick={ handleSideBar }><FontAwesomeIcon icon={ faX } /></button>
            </div>
            <img className='logo' src={ mainlogo } alt="mainlogo" />
            <a className='menu' href="/about">- 사무소 소개</a>
            <a className='menu' href="/counsel">- 상담 사례</a>
            <a className='menu' href="/cases">- 해결 사례</a>
            <a className='menu' href="/guide">- 법률 가이드</a>
            <a className='menu' href="/video">- 법률 동영상</a>
            <a className='counsel' href="/counsel/write">상담 신청하기</a>
        </div>
    )   
}
export default SideBar;