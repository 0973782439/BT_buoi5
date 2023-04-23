import React from "react";
import { IClient, IStatus } from "../../interface/status";
interface Props {
  handleChangeStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeClient: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeFromDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeToDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const status = [
  { id: 1, name: "Pending" },
  { id: 2, name: "Received" },
  { id: 3, name: "Processing" },
];
const client = [
  { id: 1, name: "AVB" },
  { id: 2, name: "Powergate" },
  { id: 3, name: "Adidas" },
  { id: 4, name: "Yopmail" },
];
const Filter: React.FC<Props> = ({
  handleChangeStatus,
  handleChangeClient,
  handleChangeFromDate,
  handleChangeToDate,
}) => {
  return (
    <section className="filter">
      <form action="" className="form_filter">
        <select
          value="selected"
          onChange={(e) => handleChangeStatus(e)}
          name="status"
          className="select_filter"
        >
          <option value="selected" disabled>
            Status
          </option>
          {status.map((item: IStatus) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <select
          onChange={(e) => handleChangeClient(e)}
          name="status"
          className="select_filter"
        >
          <option value="1">Client</option>
          {client.map((item: IClient) => {
            return (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            );
          })}
        </select>
        <input
          className="select_filter"
          type="date"
          onChange={(e) => handleChangeFromDate(e)}
        />
        <input
          className="select_filter"
          type="date"
          onChange={(e) => handleChangeToDate(e)}
        />
        <input
          placeholder="Invoice"
          className="select_filter"
          type="text"
          // onChange={(e) => handleChangeToDate(e)}
        />
      </form>
      <div className="apply">
        <button className="btn_apply">Aply</button>
        <button className="btn_clear">Clear</button>
      </div>
    </section>
  );
};

export default Filter;
