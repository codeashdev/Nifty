import { useEffect, useRef, useContext  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNFTs } from './data/retrieveContract/contractSlice';
import { selectContract, selectNFTs, selectNFTsStatus, selectNFTsError, selectNFTsCount } from './data/retrieveContract/contractSlice';

import Navbar from './components/navbar/Navbar';
import ContentSection from './components/contentSection/ContentSection';
import  Card from './components/card/Card';
import { renderStatus } from './components/renderStatus/renderStatus';
import SearchBar from './components/searchBar/searchBar';

import { InputContext } from './inputContext/inputContext';

const App = () => {
  const { search } = useContext(InputContext);

  const dispatch = useDispatch();

  const contract = useSelector(selectContract);
  const nfts = useSelector(selectNFTs);
  const status = useSelector(selectNFTsStatus);
  const error = useSelector(selectNFTsError);
  const count = useSelector(selectNFTsCount);
  const page = useRef(1);

  // useEffect(() => {
  //   dispatch(fetchNFTs(page.current, search));
  // }, [dispatch]);

  // const handleScroll = () => {
  //   const scrollTop = document.documentElement.scrollTop;
  //   const offsetHeight = document.documentElement.offsetHeight;
  //   const clientHeight = document.documentElement.clientHeight;
  //   if (scrollTop + clientHeight >= offsetHeight && nfts.length < count && status === "succeeded") {
  //     page.current++;
  //     dispatch(fetchNFTs(page.current));
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [handleScroll]);
    
    // console.log(status)
   
   // console.log(contract.contract.metadata.description)
    // console.log(nfts)
  return (
    <>
    <Navbar />
    <SearchBar />
  <ContentSection>
  
   {renderStatus(status, error)}
    {status === "succeeded" &&
 
      nfts.map((nft) => (
                
            <div className="card w-50 bg-base-100 shadow-xl m-5 carousel-item" key={nft.token_id}>
            <figure><img src={nft.cached_file_url} alt="nft_image"/></figure>
            <div className="card-body">
              <h2 className="card-title">{nft.metadata.name}</h2>
              <p className='font-bold text-lg hover:opacity-80'> <a href={`https://opensea.io/${nft.owner}`} target="_blank">Owner</a></p>

              <div className="card-actions justify-end">
                <button className="btn w-max mx-auto mt-5">Learn now!</button>
              </div>
            </div>
          </div>

      ))}
      </ContentSection>
      </>
  )
}

export default App
