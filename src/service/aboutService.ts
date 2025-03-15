import instance from "@/hooks/useAxios.ts";

export const AboutService = {
  QueryKey: {
    getManagers: "getManagers",
    getMerchandises: "getMerchandises",
    getCalendars: "getCalendars",
  },

  getManagers: async () => {
    const { data } = await instance.get(`/manager`);

    return data;
  },

  getMerchandises: async () => {
    const { data } = await instance.get(`/merchandise`);

    return data;
  },

  getCalendars: async () => {
    const { data } = await instance.get(`/pymoncalendar/`);

    return data;
  },
};
