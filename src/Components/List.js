import { React, useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { Pagination } from "./Pagination";
const List = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [dataperpage, setDataperpage] = useState(10);
  const [searchTerm, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20", {}).then((response) => {
      console.log(response.data.results);
      setData(response.data.results);
    });
  }, []);

  const sortArr = () => {
    currList = currList.sort((a, b) => {
      return a.name.first < b.name.first;
    });
    return currList;
  };

  const show_pages = (e) => {
    setSearch(e.target.value);
  };

  const idxLast = page * dataperpage;
  const idxFirst = idxLast - dataperpage;
  var currList = data.slice(idxFirst, idxLast);

  const paginate = (pageNumber) => setPage(pageNumber);

  const searchName = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <button onClick={sortArr}>Sort By Name</button>
      <input
        value={searchTerm}
        onChange={searchName}
        type="text"
        placeholder="Search By Name"
      />

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
        </tr>
      </table>

      <table>
        {currList
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (val.name.first.includes(searchTerm)) {
              return val;
            }
          })
          .map((data) => (
            <tr>
              <td>{data.name.first}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
      </table>
      <Pagination
        postsPerPage={dataperpage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default List;
