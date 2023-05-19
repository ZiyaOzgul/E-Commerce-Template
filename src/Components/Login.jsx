import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required ")
      .min(8, "Password must be at least 8 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: validationSchema,
  });
  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-pink-50 to-rose-50 ">
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="flex justify-evenly items-center flex-col bg-gradient-to-br from-rose-400 to-pink-400  space-y-6 lg:space-y-12 px-4 py-6 rounded-md w-1/3 relative"
      >
        <h1 className="font-bold text-4xl lg:text-6xl text-white px-4 py-3">
          Login
        </h1>
        <div className="w-full">
          <input
            type="email"
            name="email"
            placeholder="Enter Mail..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="relative block outline-none focus:outline focus:outline-white duration-500 ease-in-out px-3 py-2 text-red-600 rounded-lg placeholder:text-red-600 font-normal text-base  w-full"
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="absolute text-red-700 text-sm italic left-10">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div className="w-full">
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter password..."
            className="relative block outline-none focus:outline focus:outline-white duration-500 ease-in-out px-3 py-2 text-red-600 rounded-lg placeholder:text-red-600 font-normal text-base w-full"
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="absolute text-red-700 text-sm italic left-10 ">
              {formik.errors.password}
            </p>
          ) : null}
        </div>

        <button
          className="outline-none px-4 py-3 font-semibold text-white bg-rose-600 hover:bg-rose-500 active:outline active:outline-white active:scale-90 duration-300 ease-in-out rounded-2xl"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};
