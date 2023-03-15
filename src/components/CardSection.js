// copy to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
// components
import CustomDropDown from "./CustomDropDown"

export default function CardSection({ collapsedList, changeExpandedList, link }) {
    const showMore = (e) => {
        e.target.parentElement.style.overflowY = "scroll";
        e.target.parentElement.childNodes.forEach((x) =>
            x.classList.remove("d-none")
        );
        e.target.classList.add("d-none");
    };
    const showLess = (e) => {
        e.target.parentElement.style.overflow = "hidden";
        e.target.parentElement.childNodes.forEach(
            (x, i) => i > 4 && x.classList.add("d-none")
        );
        e.target.classList.add("d-none");
        e.target.previousSibling.classList.remove("d-none");
    };
    return (
        <div k className={`card-layout ${collapsedList.includes(link.id) ? 'collapsed' : ' expanded'}`}>
            <h2 className='h4 card-heading'
                onClick={() => changeExpandedList(link.id)}>
                <span>
                    <i className={link.icon}></i>
                    {" "}
                    {link?.title}
                </span>
                <i className={`fa fa-angle-down transition ${collapsedList.includes(link.id) ? 'transform-rotate-90' : ''}`} ></i>
            </h2>
            <ul className='card-list'>
                {link?.list &&
                    link?.list.map((li, i) => (
                        <li key={`nested_li-${i}`} className={i > "4" ? "d-none" : "w-100"}>
                            {li.title && (
                                <>
                                    <div className="item-layout">
                                        {li.link ?
                                            <>
                                                <a href={li.link}  >
                                                    {li.title}
                                                </a>
                                                <div className="item-layout_icons">
                                                    <CopyToClipboard text={li.link} >
                                                        <i className="fas fa-clone" data-toggle="tooltip" title="copy to clipboard"></i>
                                                    </CopyToClipboard>
                                                    <a target="_blank" rel="noreferrer" href={li.link}>
                                                        <i className="fas fa-external-link-alt" data-toggle="tooltip" title="open in new tab"></i>
                                                    </a>
                                                </div>
                                            </>
                                            :
                                            <CustomDropDown data={li} i={i} />
                                        }
                                    </div>
                                </>
                            )}
                            {
                                li.modalTitle && (
                                    <>
                                        <button
                                            type="button"
                                            className="btn card-button card-modal "
                                            data-toggle="modal"
                                            data-target={`#${li.id}`}
                                        >
                                            {" "}
                                            {li.modalTitle}{" "}
                                        </button>
                                        <div
                                            className="modal fade"
                                            id={li.id}
                                            tabIndex={-1}
                                            aria-labelledby="vs"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div
                                                        className="modal-body"
                                                        dangerouslySetInnerHTML={{
                                                            __html: li.modalBody
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </li >
                    ))}
                {
                    link.list.length - 1 > 5 && (
                        <>
                            <button
                                className="more card-button "
                                onClick={(event) => {
                                    showMore(event);
                                }}
                            >
                                show more
                            </button>
                            <button
                                className="less d-none card-button "
                                onClick={(event) => {
                                    showLess(event);
                                }}
                            >
                                show less
                            </button>
                        </>
                    )
                }
            </ul >

        </div>
    )
}

