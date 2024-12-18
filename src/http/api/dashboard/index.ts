import { DASHBOARD } from "../../endpoint";
import HTTP_CLIENT from "../../http-common";

class DashboardAPI {
  getAll(params) {
    return HTTP_CLIENT({
      url: DASHBOARD.GET_ALL,
      method: "GET",
      params: params,
    });
  }
}

const dashboardAPI = new DashboardAPI();

export default dashboardAPI;
