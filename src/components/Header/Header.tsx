import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="payroll_header">
      <div className="header_left">
        <h1>Payroll Transactions List</h1>
      </div>
      <div className="header_right">
        <button style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          Export CSV <RiArrowDropDownLine fontSize={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
