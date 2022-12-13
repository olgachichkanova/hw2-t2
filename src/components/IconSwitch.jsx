const IconSwitch = ({icon, onSwitch}) => {
    return (
        <div className="switch">
            <button className='switch-btn' onClick={onSwitch}>
                <span className="material-icons">
                    {icon}
                </span>
            </button>
        </div>
    )
}

export default IconSwitch;