import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { postUser } from "@/redux/actions/actions";
import { useRouter } from "next/navigation";


export const useForm = () => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  const router = useRouter()
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
  
  const dispatch = useDispatch();
  const onSubmit = (values, actions) => {
    dispatch(postUser(values));
    actions.resetForm() 
    router.replace('/')
  };

  const basicSchema = yup.object().shape({
    email: yup.string().email("Introduzca un email valido").required(""),
    username: yup
      .string()
      .min(4, "Minimo 4 caracteres")
      .max(15, "Maximo 15 caracteres")
      .required(""),
    password: yup
      .string()
      .min(6, "Minimo 6 caracteres")
      .matches(passwordRules, {
        message: "Minimo 5 caracteres 1 mayuscula 1 numero",
      })
      .required(""),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Tiene que coincidir con la contraseña"
      )
      .required(""),
  });
  const { values, touched, errors, handleBlur, handleChange, handleSubmit, isSubmitting} =
    useFormik({
      initialValues: {
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  

  return {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    onSubmit,
    isSubmitting
  };
};
