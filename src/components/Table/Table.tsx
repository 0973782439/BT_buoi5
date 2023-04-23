import { RiDeleteBinFill } from "react-icons/ri";
interface Props {
  rowData: [];
  handleDelete: (id: number) => void;
}
const Table: React.FC<Props> = ({ rowData, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Status</th>
          <th>Date</th>
          <th>Client</th>
          <th>Currency</th>
          <th>Total</th>
          <th>Invoice #</th>
        </tr>
      </thead>
      <tbody>
        {rowData?.map((item: any) => {
          return (
            <tr key={item.id}>
              <td>{item.status}</td>
              <td>{item.date}</td>
              <td>{item.client}</td>
              <td>{item.currency}</td>
              <td>{item.total}</td>
              <td>{item.invoice}</td>
              <td>
                <button type="submit" className="btn_view">
                  View Details
                </button>
              </td>
              <td>
                <button type="submit" onClick={() => handleDelete(item.id)}>
                  <RiDeleteBinFill color="red" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
