import axios from "../utils/axios";

const Todo = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{data.title}</h1>
      complete
      <input
        onChange={(e) => {
          axios
            .put(`/complete/${data._id}`, {
              isComplete: e.target.checked,
            })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
        defaultChecked={data.isComplete}
        type="checkbox"
      />
    </div>
  );
};

export default Todo;
