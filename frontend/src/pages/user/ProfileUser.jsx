import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncupdaterusers } from "../../store/actions/UserActions";
import { useEffect, useState } from "react";

const ProfileUser = () => {
  const { id: _id } = useParams();
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (users) {
      reset({
        username: users.username || "",
        email: users.email || "",
        password: "",
      });
    }
  }, [users, reset]);

  const UpdateUserHandler = async (data) => {
    try {
      await dispatch(asyncupdaterusers(users.id, data));
      setSuccess("Profile updated successfully.");
      setTimeout(() => setSuccess(""), 3000);
    } catch {
      setSuccess("Failed to update profile.");
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const DeleteHandler = () => {
    navigate("/login");
  };

  const initials = users?.username
    ? users.username
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "GU";

  return users ? (
    <div className="w-screen min-h-screen p-6 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Profile</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card-glass rounded-2xl p-6 flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-3xl font-bold text-white">
              {initials}
            </div>
            <h2 className="mt-4 text-xl font-semibold">{users.username}</h2>
            <p className="text-sm text-muted">{users.email}</p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 rounded-lg border border-white/8 text-sm text-muted"
              >
                Back
              </button>
              <button
                onClick={DeleteHandler}
                className="rounded-lg px-3 bg-red-600 text-sm text-white hover:bg-red-600/90"
              >
               Delete
              </button>
            </div>
          </div>

          <div className="card-glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Edit profile</h3>
            {success && (
              <div className="mb-4 text-sm text-emerald-300">{success}</div>
            )}
            <form
              onSubmit={handleSubmit(UpdateUserHandler)}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-muted mb-1">
                  Username
                </label>
                <input
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${
                    errors.username ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Your name"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-muted mb-1">Email</label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-muted mb-1">
                  Password
                </label>
                <input
                  {...register("password", {
                    minLength: { value: 6, message: "At least 6 characters" },
                  })}
                  type="password"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${
                    errors.password ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-5 py-3 rounded-lg text-black font-semibold"
                >
                  {isSubmitting ? "Saving..." : "Save changes"}
                </button>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="px-4 py-3 rounded-lg border border-white/8 text-sm text-muted"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-screen min-h-screen flex items-center justify-center text-gray-300 bg-gray-900">
      Loading...
    </div>
  );
};

export default ProfileUser;
