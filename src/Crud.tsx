import React, { useState, useEffect } from "react";
import axios from "axios";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Crud: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get<Comment[]>(
        "https://jsonplaceholder.typicode.com/comments"
      );
      console.log("Fetched comments:", response.data);
      setComments(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };
  const addComment = async () => {
    try {
        const newComment: Omit<Comment, "id"> = {
          name: Name,
          email: Email,
          body: "This is a new comment.",
        };
        const response = await axios.post<Comment>(
          "https://jsonplaceholder.typicode.com/comments",
          newComment
        );
        setComments([...comments, response.data]);
      setEmail('')
      setName('')
    } catch (err: any) {
      setError(err.message);
    }
  };

  const editComment = async (id: number, updatedComment: Comment) => {
    try {
      const response = await axios.put<Comment>(
        `https://jsonplaceholder.typicode.com/comments/${id}`,
        updatedComment
      );
      setComments(
        comments.map((comment) => (comment.id === id ? response.data : comment))
      );
    } catch (err: any) {
      setError(err.message);
    }
  };

  const deleteComment = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-center text-5xl">Crud App</h1>
      <input
        type="text"
        value={Name}
        className="border-2 border-slate-500 mr-3"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={Email}
        className="border-2 border-slate-500 mr-3"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="px-3 py-2 text-white mb-3 bg-blue-500 rounded-md shadow ripple hover:shadow-lg hover:bg-blue-600"
        onClick={addComment}
      >
        Add Comment
      </button>
      <table className="border border-slate-500 min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 border border-y-slate-500 ">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Body
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white border border-y-slate-500 ">
          {comments.map((comment, Index) => (
            <tr className="border border-y-slate-500 " key={comment.id}>
              <td className="px-6 py-4 whitespace-nowrap">{comment.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{comment.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{comment.body}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() =>
                    editComment(comment.id, {
                      ...comment,
                      name: "Updated Name",
                    })
                  }
                  className="inline-block px-3 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-500 rounded-md shadow ripple hover:shadow-lg hover:bg-blue-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteComment(comment.id)}
                  className="inline-block px-3 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded-md shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
