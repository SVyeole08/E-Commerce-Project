import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  asyncdeleteusers,
  asynclogoutuser,
  asyncupdateusers,
} from "../../store/actions/UserActions";
import { useEffect, useRef, useState } from "react";
import { Camera } from "lucide-react";

const ProfileUser = () => {
  const { id: _id } = useParams();
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef();

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
        password: users.password || "",
      });
    }
  }, [users, reset]);

  const UpdateUserHandler = async (data) => {
    try {
      await dispatch(asyncupdateusers(users.id, data));
      setSuccess("Profile updated successfully.");
      setTimeout(() => setSuccess(""), 3000);
    } catch {
      setSuccess("Failed to update profile.");
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteusers(users.id));
    navigate("/login");
  };

  const LogOutHandler = () => {
    dispatch(asynclogoutuser());
    navigate("/login");
  };

  const ProfPicHandler = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
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
            <div className="w-28 relative h-28 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-3xl font-bold text-white">
              <div
                onClick={ProfPicHandler}
                className="w-9 h-9 cursor-pointer card-glass border flex justify-center items-center rounded-full absolute bottom-0 right-0"
              >
                <Camera
                  className="w-5 h-5"
                  src="https://as2.ftcdn.net/v2/jpg/04/33/52/13/1000_F_433521314_BwYlqe4ZfB6St3gEsa2jNOltR1UUOVAQ.jpg"
                  alt=""
                />
              </div>
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover object-top rounded-full overflow-hidden"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-3xl font-bold text-white">
                  {initials}
                </div>
              )}
              <input
                type="file"
                className="hidden"
                accept="image/"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
            <h2 className="mt-4 text-xl font-semibold">{users.username}</h2>
            <p className="text-sm text-muted">{users.email}</p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="hover:scale-105 transition-all-ease duration-350 px-4 py-2 rounded-lg border border-white/8 text-sm text-muted"
              >
                Back
              </button>
              <button
                onClick={DeleteHandler}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg shadow-sm hover:shadow-md transform transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6h18M9 6v12a2 2 0 002 2h2a2 2 0 002-2V6M10 6V4a2 2 0 012-2h0a2 2 0 012 2v2"
                  />
                </svg>
                Delete
              </button>
              <button
                title="LogOut"
                onClick={LogOutHandler}
                aria-label="Log out"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-rose-500 text-black font-semibold px-3 py-2 rounded-lg shadow-md hover:from-rose-500 hover:to-orange-500 transform transition-all-ease duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                  />
                </svg>
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
                  className="btn-primary px-5  hover:scale-105 transition-all-ease duration-350 py-3 rounded-lg text-black font-semibold"
                >
                  {isSubmitting ? "Saving..." : "Save changes"}
                </button>
                <button
                  type="button"
                  onClick={() => reset()}
                  className="px-4 py-3 rounded-lg border border-white/8 hover:scale-105 duration-350 transition-all text-sm text-muted"
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
