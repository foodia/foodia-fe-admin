import Swal from "sweetalert2";

const styledSweetAlert = Swal.mixin({
  customClass: {
    confirmButton: "buttonAlert",
    cancelButton: "btn-putih",
  },
  padding: "30px",
  buttonsStyling: false,
});

export const AlertMessage = (
  title: any,
  text: any,
  buttonText: any,
  icon: any
) => {
  styledSweetAlert.fire({
    title: title,
    text: text,
    showConfirmButton: true,
    confirmButtonText: buttonText,
    icon: icon,
  });
};
