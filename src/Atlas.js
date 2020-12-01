import './Atlas.css'


export default function Atlas({northIce, southIce}) {
    return (
        <div>
            <div className="Atlas-map">
                <div></div>
                <div className="Atlas__ice north" style={{ height: `${northIce}px`, width: `${northIce*2}px` }}></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className="Atlas__ice south" style={{ height: `${southIce}px`, width: `${southIce*2}px` }}></div>
                <div></div>
            </div>
        </div>
    )
}