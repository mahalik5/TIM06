/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './Homepage.css';
import Sidebar from './Sidebar';
import useGetAuction from './controller/getAuction';

function Homepage() {
  const { data: fetchOutlet, isLoading, refetch } = useGetAuction();
  console.log(fetchOutlet);

  const renderCard = () => {
    return fetchOutlet?.data?.data?.map((item, index) => {
      return (
        <div className='card'>
          <h1 className=''>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      );
    });
  };
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="container">
        <div className="navigation">
          <input
            type="text"
            name="search"
            className="search"
            placeholder="Search"
          />
        </div>
        <div className="card-wrapper" id="card-wrapper">
            {renderCard()}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
