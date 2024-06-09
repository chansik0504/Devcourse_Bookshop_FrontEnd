import React from "react";
import { FaSmileWink } from "react-icons/fa";
import { Link } from "react-router-dom";
import Empty from "../common/Empty";

function BooksEmpty() {
  return (
    <Empty
      title="검색 결과가 없습니다."
      icon={<FaSmileWink />}
      description={<Link to="/books">전체 검색 결과로 이동</Link>}
    />
  );
}

export default BooksEmpty;
