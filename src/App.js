import React, { useState, useEffect } from "react";
import "./style.scss";
import { links } from "./links"
export default function App() {
  const [filterLinks, setFilterLinks] = useState(links)
  const [filterSearch, setFilterSearch] = useState('')
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

  const changeLinks = (value) => {
    if (value !== '') {
      let lastLinks = [];
      for (let i = 0; i < links.length; i++) {
        if (
          links[i]?.list?.filter(item => item?.title?.toLowerCase().includes(value.toLowerCase())).length
          ||
          links[i].title.toLowerCase().includes(value.toLowerCase())
        ) {
          lastLinks[i] = links[i];
          if (!links[i].title.toLowerCase().includes(value.toLowerCase())) {
            lastLinks[i].list = links[i]?.list?.filter(item => item?.title?.toLowerCase().includes(value.toLowerCase()))
          } else {
            lastLinks[i].list = links[i]?.list
          }
        }
      }
      // console.log(lastLinks)
      setFilterLinks(lastLinks)

    } else {
      // console.log(false)
      setFilterLinks(links)
    }
  }
  useEffect(() => {
    changeLinks(filterSearch)
  }, [filterSearch])
  return (
    <div className="content">
      <h1>Useful frontEnd Websites</h1>
      <div className="form-group search-form">
        <input type="text" className="form-control"
          // value={filterSearch}
          placeholder="search keywords" list="key" onChange={(e) => {
            // setFilterSearch(e.target.value);
            changeLinks(e.target.value)
          }} />
        <datalist id="key">
          {links.map((link, i) => (
            <option value={link.title} key={`option-${i}`}></option>
          ))}
        </datalist>
      </div>

      <div className="container">
        <div className="row">
          {filterLinks?.length ? filterLinks?.map((link, index) => (
            <div className="col-lg-4 col-md-6 group" key={`levelone_${index}`}>
              <ul>
                <h2>
                  <span>{
                    link?.title?.split('').map((titleChar, j) => (
                      <span key={`char-${index}-${j}`} className={filterSearch[j] === titleChar ? 'select-text' : ''}>{titleChar}</span>
                    ))}
                  </span>{" "}
                  <i className={link.icon}></i>
                </h2>
                {link?.list &&
                  link?.list.map((li, i) => (
                    <li key={`nestedli-${index}-${i}`} className={i > "4" ? "d-none" : ""}>
                      {li.title && (
                        <>
                          <a target="_blank" rel="noreferrer" href={li.link}>
                            <span>{li.title?.split('').map((titleChar, k) => (
                              <span key={`char-${index}-${i}-${k}`} className={filterSearch[k] === titleChar ? 'select-text' : ''}>{titleChar}</span>
                            ))}
                            </span>
                          </a>
                          {li.list &&
                            li.list.map((l, ii) => (
                              <span className="item" key={`nested${i}_${ii}`}>
                                <a
                                  target="_blank"
                                  rel="noreferrer"
                                  href={l.link}
                                >
                                  {l.title}
                                </a>
                              </span>
                            ))}
                        </>
                        //   }
                      )}
                      {li.modalTitle && (
                        <>
                          <button
                            type="button"
                            className="btn"
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
                      )}
                    </li>
                  ))}
                {link.list.length - 1 > 5 && (
                  <>
                    <button
                      className="more"
                      onClick={(event) => {
                        showMore(event);
                      }}
                    >
                      show more
                    </button>
                    <button
                      className="less d-none"
                      onClick={(event) => {
                        showLess(event);
                      }}
                    >
                      show less
                    </button>
                  </>
                )}
              </ul>
            </div>))
            :
            <p className='text-center h2 w-100'>no result <i className='fa fa-frown' /></p>
          }
        </div>
      </div>
      <footer className="text-center py-2">
        <div className="container">
          <div>
            Made With <i className="fas fa-heart text-danger"></i> By{" "}
            <a
              href="https://alaa-sufi-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-underline"
            >
              Alaa Sufi
            </a>{" "}
            ©<script>document.write(new Date().getFullYear())</script>2023.
          </div>
        </div>
      </footer>
    </div >
  );
}
