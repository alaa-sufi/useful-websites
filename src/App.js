import React, { useState, useEffect } from "react";
import "./style.scss";
import { links } from "./links"
// import Shuffle from 'react-shuffle'

export default function App() {
  const [filterLinks, setFilterLinks] = useState(links)
  const [filterSearch, setFilterSearch] = useState('')
  const [collapsedList, setCollapsedList] = useState('')
  const [isCollapsedAll, setIsCollapsedAll] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
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
  const changeExpandedList = (id) => {
    if (collapsedList.includes(id)) {
      setCollapsedList(prev => [...prev].filter(item => item !== id))
    } else {
      setCollapsedList(prev => [...prev, id])
    }
    // setCollapsedList((prev) => prev.length ? [...prev].contains(link.id) ? [...prev] : [...prev, link.id] : [...prev, link.id])
  }
  const changeLinks = (valueSearch) => {
    setIsCollapsedAll(false);
    changeCollapsedAll()
    const value = valueSearch?.trim();
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
            lastLinks[i].list = links[i]?.list.filter(item => item?.title?.toLowerCase().includes(value.toLowerCase()))
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

  const changeCollapsedAll = () => {
    if (isCollapsedAll) {
      setCollapsedList([...links.map(link => link.id)])
    } else {
      setCollapsedList([]);
    }
  }
  useEffect(() => {
    changeCollapsedAll()
  }, [isCollapsedAll])

  useEffect(() => {
    changeLinks(filterSearch)
  }, [filterSearch])
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return (
    <div className="content">
      <a className="github-fork-ribbon" href="https://github.com/alaa-sufi/useful-websites" data-ribbon="Fork me on GitHub" title="Fork me on GitHub" target="_blank">Fork me on GitHub</a>

      <h1>Useful frontEnd Websites 🔗</h1>
      <p className="text-center"> Click once to copy <i class="fas fa-clone"></i> and twice to open   <i class="fas fa-external-link-alt"></i> 
</p>
      <div className='d-flex justify-content-center align-items-center mb-2 flex-md-row flex-column'>
        <div className=" search-form">
          <input type="text" className="form-control"
            autoFocus={true}
            // value={filterSearch}
            placeholder="Search..." list="key" onChange={(e) => {
              // setFilterSearch(e.target.value);
              changeLinks(e.target.value)
            }} />
          {/* <datalist id="key">
            {links.map((link, i) => (
              <option value={link.title} key={`option-${i}`}></option>
            ))}
          </datalist> */}

        </div>
        <div className="d-flex gap-2 align-items-center">
          <span>Collabsed All </span>
          <div className="custom-toggle">
            <input type="checkbox" id="custom-toggle"
              checked={isCollapsedAll}
              onInput={(e) => setIsCollapsedAll(!isCollapsedAll)}  />
            <label htmlFor="custom-toggle">
              <span className="text">
                <span className="on">on</span>
                <span className="off">off</span>
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="container">

        {/* <Shuffle>
          {alphabet.map(function (letter) {
            return (
              <div className="tile" key={letter}>
                <img
                  src={"http://placehold.it/100x100&text=" + letter} />
              </div>
            )
          })}
        </Shuffle> */}
        <div className="grid-parent">
          {filterLinks?.length ? filterLinks?.map((link, index) => (
            <div className="" key={`levelone_${index}`}>
              <div className={`group ${collapsedList.includes(link.id) ? 'collapsed' : ' expanded'}`}>
                <h2 className='d-flex justify-content-between h4'
                  onClick={() => changeExpandedList(link.id)}>
                  <span>
                    <i className={link.icon}></i>
                    {" "}
                    {link?.title?.split('').map((titleChar, j) => (
                      <span key={`char-${index}-${j}`} className={filterSearch[j] === titleChar ? 'select-text' : ''}>{titleChar}</span>
                    ))}
                  </span>
                  <i className={`fa fa-angle-down transition ${collapsedList.includes(link.id) ? 'transform-rotate-90' : ''}`} ></i>
                </h2>
                <ul>
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
              </div>
            </div>))
            : ''

          }
        </div>
        {filterLinks?.length === 0 && <p className='text-center h2 w-100'>no result <i className='fa fa-frown' /></p>}
      </div>
      {/* <button className={`scroll-top ${window.pageYOffset > 500 ? 'd-none' : ''}`} onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }}>
        <i className="fa fa-angle-up"></i>
      </button> */}
      {isVisible && (
        <button className={`scroll-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
          <i className="fa fa-angle-up"></i>
        </button>
      )}
      <footer className="text-center py-2">
        <div className="container">
          <div>
            <div className="">
              <small className="">
                <a href="mailto:alaasufi227@gmail.com" target="_blank">
                  <i className="fa fa-paper-plane" /> alaasufi227@gmail.com </a>
              </small>
              <a href="mailto:alaasufi227@gmail.com" target="_blank">
              </a>
              <br />
              <small className="">
                <a href="https://wa.me/00963960990506" target="_blank">
                  <i className="fa fa-mobile" /> 00963 960 990 506 </a></small><a href="https://wa.me/00963960990506" target="_blank">
              </a>
            </div>

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
