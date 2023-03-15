// copy to clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CustomDropDown({ data, i }) {
    return (
        <div class="dropdown custom-dropdown">
            <a class="btn  dropdown-toggle" href="#" role="button" id={`dropdownMenuLink-${`${i}-${data.title}`}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {data.title}
            </a>

            <div class="dropdown-menu" aria-labelledby={`dropdownMenuLink-${`${i}-${data.title}`}`}>
                {data.list &&
                    data.list.map((l, ii) => (
                        <div key={`nested-${i}-${data.title}${ii}`} className="item-layout">
                            <>
                                <a href={l.link}  >
                                    {l.title}
                                </a>
                                <div className="item-layout_icons">
                                    <CopyToClipboard text={l.link} >
                                        <i className="fas fa-clone" data-toggle="tooltip" title="copy to clipboard"></i>
                                    </CopyToClipboard>
                                    <a target="_blank" rel="noreferrer" href={l.link}>
                                        <i className="fas fa-external-link-alt" data-toggle="tooltip" title="open in new tab"></i>
                                    </a>
                                </div>
                            </>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}