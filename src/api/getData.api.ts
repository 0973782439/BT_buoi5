import http from "../utils/http";

export const getPayRoll = () => http.get("payroll");
export const deletePayRoll = (id: any) => http.delete(`payroll/${id}`);
