import React, { useEffect, useState } from "react";
import "./payroll.scss";
import Table from "../Table/Table";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";
import { deletePayRoll, getPayRoll } from "../../api/getData.api";
interface Props {}
const Payroll: React.FC<Props> = ({}) => {
  const [tablePayRoll, setTablePayRoll] = useState<any>();
  const [data, setData] = useState<any>();

  //
  const [fromDate, setFromDate] = useState(""); // ngày bắt đầu
  const [toDate, setToDate] = useState(""); // ngày kết thúc
  //
  // const dispatch = useAppDispatch();
  function fetchApi() {
    const data = getPayRoll();
    data.then((res: any) => {
      setTablePayRoll(res.data);
      setData(res.data);
    });
  }
  useEffect(() => {
    fetchApi();
  }, []);
  const handleDelete = (id: number) => {
    const data = deletePayRoll(id);
    data.then((res: any) => {
      fetchApi();
    });
  };
  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = data.filter((item: any) => item.idStatus == e.target.value);
    setTablePayRoll(filter);
  };
  const handleChangeClient = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const filter = data.filter((item: any) => item.idClient == e.target.value);
    setTablePayRoll(filter);
  };
  function filterByDate(dataList: [], fromDate: string, toDate: string) {
    return data.filter((item: any) => {
      const date = new Date(item.date);
      const tesst = date >= new Date(fromDate) && date <= new Date(toDate);
      return date >= new Date(fromDate) && date <= new Date(toDate);
    });
  }
  const handleChangeFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value);
    const filter = filterByDate(data, e.target.value, toDate);
    setTablePayRoll(filter);
  };
  const handleChangeToDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value);
    const filter = filterByDate(data, fromDate, e.target.value);
    setTablePayRoll(filter);
  };
  return (
    <div className="payroll">
      <Header></Header>
      <Filter
        handleChangeFromDate={handleChangeFromDate}
        handleChangeToDate={handleChangeToDate}
        handleChangeClient={handleChangeClient}
        handleChangeStatus={handleChangeStatus}
      />
      <Table handleDelete={handleDelete} rowData={tablePayRoll} />
      <Pagination />
    </div>
  );
};

export default Payroll;
