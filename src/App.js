// react
import React, { useState, useEffect } from "react";
// style
import "./style/main.scss";
// links data
import { links } from "./links"
//  Shuffle
// import Shuffle from 'react-shuffle'
// ui components
import { Footer, GitHubRibbon, ScrollToTop, CollapseSwitch, SearchField, NoData, CardSection } from "./components"

export default function App() {
  const [filterLinks, setFilterLinks] = useState(links)
  const [filterSearch, setFilterSearch] = useState('')
  const [collapsedList, setCollapsedList] = useState('')
  const [isCollapsedAll, setIsCollapsedAll] = useState(false)



  const changeExpandedList = (id) => {
    if (collapsedList.includes(id)) {
      setCollapsedList(prev => [...prev].filter(item => item !== id))
    } else {
      setCollapsedList(prev => [...prev, id])
    }
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
      setFilterLinks(lastLinks)
    } else {
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

  return (
    <main>
      <GitHubRibbon />
      <h1 className="heading">Useful frontEnd Websites🔗</h1>
      <p className="text-center"> Easy copy <i className="fas fa-clone"></i> or  open in new tab  <i className="fas fa-external-link-alt"></i></p>

      <div className='d-flex justify-content-center align-items-center mb-2 flex-md-row flex-column'>
        <SearchField changeLinks={changeLinks} filterSearch={filterSearch} setFilterSearch={setFilterSearch} />
        <CollapseSwitch isCollapsedAll={isCollapsedAll} setIsCollapsedAll={setIsCollapsedAll} />
      </div>

      <div className="container">
        <div className="grid-layout">
          {filterLinks?.length ? filterLinks?.map((link, index) => (
            <CardSection key={link.id} link={link} collapsedList={collapsedList} changeExpandedList={changeExpandedList} />
          ))
            : ''
          }
        </div>

        {filterLinks?.length === 0 && <NoData onReset={() => { setFilterLinks(links); setFilterSearch('') }} />}
      </div >

      <ScrollToTop />

      <Footer />
    </main >
  );
}

//  {/* <span

// id = {`nestedli-${index}-${i}`}
//                                 > { li.title }
//                                 </span > * /}
{/* <span>{li.title?.split('').map((titleChar, k) => (
                                <span key={`char-${index}-${i}-${k}`} className={filterSearch[k] === titleChar ? 'select-text' : ''}>{titleChar}</span>
                              ))}
                              </span> */}