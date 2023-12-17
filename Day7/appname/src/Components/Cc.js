import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Successfully created!");

const Cc = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default Cc;