import { baseUrl } from "./utils/baseUrl";
import { opt } from "./utils/fetchOpt";

export class Simulator {
  index = 0;

  async start() {
    fetch(baseUrl + "Sim/Start", {
      method: "POST",
      ...opt,
    });
    //So i don't understand how start really works on backend
    // .then(() =>
    //   this.buyTransporte(1).then(() =>
    //     this.getTransporte(1).then((tr) => {
    //       console.log(tr);
    //       this.moveTransporte(tr.positionNodeId);
    //     })
    //   )
    // );
  }
  async stop() {
    fetch(baseUrl + "Sim/Stop", {
      method: "POST",
      ...opt,
    });
  }

  async getGrid() {
    const res = await fetch(baseUrl + "Grid/Get", {
      method: "GET",
      ...opt,
    });
    const r = await res.json();
    return r.Connections;
  }

  async buyTransporte(id) {
    fetch(baseUrl + "CargoTransporter/Buy" + `?positionNodeId=${id}`, {
      method: "POST",
      ...opt,
    });
  }
  async getTransporte(id) {
    const res = await fetch(
      baseUrl + "CargoTransporter/Get" + `?transporterId=${id}`,
      {
        method: "GET",
        ...opt,
      }
    );
    return await res.json();
  }
  async moveTransporte(id) {
    this.getGrid().then((Connections) => {
      let targetNodeId;
      for (let i = 0; i < Connections.length; i++)
        if (Connections[i].FirstNodeId == id) {
          targetNodeId = Connections[i].SecondNodeId;
          break;
        }
      fetch(
        baseUrl +
          "CargoTransporter/Move" +
          `?transporterId=${id}&targetNodeId=${targetNodeId}`,
        {
          method: "PUT",
          ...opt,
        }
      );
    });
  }
}

export const sim = new Simulator();
