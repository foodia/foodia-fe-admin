import axios from "axios";

export const Approvals = (
  id: number,
  status: string,
  note: any,
  setIsOpen: any,
  modul: any
) => {
  {
    status === "approved"
      ? axios
          .put(
            process.env.NEXT_PUBLIC_BASE + `/${modul}/approval/${id}`,
            {
              status,
              note: "approved",
            },
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
              },
            }
          )
          .then((res) => {
            // getDetonatorDetail();
            location.reload();
            setIsOpen(false);
          })
          .catch((error) => {})
      : note === ""
      ? console.log("Note Empty")
      : axios
          .put(
            process.env.NEXT_PUBLIC_BASE + `/${modul}/approval/${id}`,
            {
              status,
              note,
            },
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
              },
            }
          )
          .then((res) => {
            // getDetonatorDetail();
            location.reload();
            setIsOpen(false);
          })
          .catch((error) => {});
  }
};
