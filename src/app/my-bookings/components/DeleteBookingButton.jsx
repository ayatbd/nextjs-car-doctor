"use client";
const DeleteBookingButton = ({ id }) => {
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/service/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <th>
      <button onClick={() => handleDelete(id)} className="btn btn-ghost btn-xs">
        Delete
      </button>
    </th>
  );
};

export default DeleteBookingButton;
