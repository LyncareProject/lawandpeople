import './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'


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
            <h2 className='logo'>법무법인 법과 사람들</h2>
            <a className='menu' href="/counsel">상담 사례</a>
            <a className='menu' href="/cases">해결 사례</a>
            <a className='menu' href="/guide">법률 가이드</a>
            <a className='menu' href="/video">법률 동영상</a>
            <a className='counsel' href="/counsel/write">상담 신청하기</a>
        </div>
    )   
}
export default SideBar;