import * as yup from "yup";
export const SignUpSchema = yup.object().shape({
  name: yup.string().required("please enter true informations"),
  surname: yup.string().required("please enter true informations"),
  age: yup
    .number()
    .required("please enter true informations")
    .positive("please enter your age")
    .integer("please enter your age"),
  email: yup
    .string()
    .email("please enter your email")
    .required("please enter true informations"),
  password: yup.string().required("please enter true informations"),
  passwordRepeat: yup.string().required("please enter true informations").oneOf([yup.ref("password",yup.password),"please enter true password"])
});
